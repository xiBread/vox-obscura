import p5 from "p5";
import fragment from "./assets/frag.glsl";
import vertex from "./assets/vert.glsl";

let time = 0;

new p5((p5: p5) => {
	let sample: p5.Image;
	let target: p5.Image;

	let palette: p5.Image;
	let shader: p5.Shader;

	const canvas = document.getElementById("p5-canvas")!;

	p5.preload = () => {
		palette = p5.loadImage("/palette.png");
		shader = p5.createShader(vertex, fragment);
	};

	p5.setup = () => {
		p5.createCanvas(innerWidth, innerHeight, p5.WEBGL, canvas);

		sample = p5.createImage(1, palette.height);
		sample.loadPixels();

		target = p5.createImage(1, palette.height);
		target.loadPixels();

		palette.loadPixels();

		for (let i = 0; i < palette.height; i++) {
			const id = i * palette.width;

			target.pixels[i * 4 + 0] = palette.pixels[id * 4 + 0];
			target.pixels[i * 4 + 1] = palette.pixels[id * 4 + 1];
			target.pixels[i * 4 + 2] = palette.pixels[id * 4 + 2];
			target.pixels[i * 4 + 3] = palette.pixels[id * 4 + 3];
		}

		target.updatePixels();
		target.loadPixels();

		canvas.style.opacity = "1";
	};

	p5.draw = () => {
		const dt = p5.deltaTime / 1000;

		for (let i = 0; i < sample.pixels.length; i++) {
			sample.pixels[i] = p5.map(dt * 5, 0, 1, sample.pixels[i], target.pixels[i]);
		}

		sample.updatePixels();
		time += 0.06 * dt;

		shader.setUniform("uTime", time);
		shader.setUniform("uAspect", p5.width / p5.height);
		shader.setUniform("uNoiseSize", 1.5);
		shader.setUniform("uSampler", sample);

		p5.push();
		p5.shader(shader).noStroke().plane(p5.width, p5.height).pop();
	};

	p5.windowResized = () => {
		p5.resizeCanvas(innerWidth, innerHeight);
	};
});
