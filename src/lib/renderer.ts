import type { Node } from "three/webgpu";
import {
	Material,
	Mesh,
	OrthographicCamera,
	PlaneGeometry,
	Scene,
	SRGBColorSpace,
	WebGLRenderer,
} from "three";
import { MeshBasicNodeMaterial, WebGPURenderer } from "three/webgpu";

interface RendererInit {
	container: HTMLElement;
	canvas: HTMLCanvasElement;
	fragmentNode: Node;
}

export class Renderer {
	static readonly #MIN_FRAME_TIME = 16;

	#renderer: WebGPURenderer | WebGLRenderer;
	#camera: OrthographicCamera;
	#scene: Scene;
	#mesh: Mesh;

	#resizeObserver: ResizeObserver;

	#width = 0;
	#height = 0;
	#lastRenderTime = 0;
	#rafId: number | undefined;

	public constructor({ container, canvas, fragmentNode }: RendererInit) {
		this.#scene = new Scene();

		this.#camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		this.#camera.position.z = 1;
		this.#camera.lookAt(0, 0, 0);

		const rendererOptions = {
			canvas,
			antialias: true,
			alpha: false,
			depth: false,
			powerPreference: "high-performance" as const,
		};

		if (navigator.gpu) {
			this.#renderer = new WebGPURenderer(rendererOptions);
		} else {
			this.#renderer = new WebGLRenderer(rendererOptions);
		}

		this.#renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
		this.#renderer.outputColorSpace = SRGBColorSpace;

		const material = new MeshBasicNodeMaterial({ fragmentNode });
		const geometry = new PlaneGeometry(2, 2);

		this.#mesh = new Mesh(geometry, material);
		this.#scene.add(this.#mesh);

		this.#resizeObserver = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;

			this.#updateSize(Math.round(width), Math.round(height));
		});

		this.#resizeObserver.observe(container);

		const { width, height } = container.getBoundingClientRect();
		this.#updateSize(Math.round(width), Math.round(height));

		this.#render();
		this.#raf();
	}

	public dispose(): void {
		this.#resizeObserver.disconnect();

		if (this.#rafId) {
			cancelAnimationFrame(this.#rafId);
			this.#rafId = undefined;
		}

		this.#mesh.geometry.dispose();

		if (this.#mesh.material instanceof Material) {
			this.#mesh.material.dispose();
		}

		this.#scene.remove(this.#mesh);
		this.#renderer.dispose();
	}

	#updateSize(width: number, height: number): void {
		if (width === this.#width && height === this.#height) {
			return;
		}

		const now = performance.now();
		if (now - this.#lastRenderTime < Renderer.#MIN_FRAME_TIME) {
			return;
		}

		this.#width = width;
		this.#height = height;
		this.#lastRenderTime = now;

		this.#renderer.setSize(width, height, false);

		const aspectRatio = width / height;
		const adjustedWidth = aspectRatio * 2;

		this.#camera.left = -adjustedWidth / 2;
		this.#camera.right = adjustedWidth / 2;
		this.#camera.updateProjectionMatrix();

		this.#mesh.scale.set(adjustedWidth, 2, 1);
		this.#render();
	}

	#render(): void {
		if (this.#renderer instanceof WebGPURenderer) {
			this.#renderer.renderAsync(this.#scene, this.#camera);
		} else {
			this.#renderer.render(this.#scene, this.#camera);
		}
	}

	#raf(): void {
		if (this.#rafId) return;

		const frame = () => {
			this.#rafId = requestAnimationFrame(frame);
			this.#render();
		};

		frame();
	}
}
