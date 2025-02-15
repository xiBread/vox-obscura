<script lang="ts">
	import { onMount } from "svelte";
	import { Renderer } from "../renderer";
	import { fragment } from "../shader";

	let mounted = $state(false);

	let container: HTMLElement;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		mounted = true;

		const renderer = new Renderer({
			container,
			canvas,
			fragmentNode: fragment(),
		});

		return () => renderer.dispose();
	});
</script>

<div
	class="fixed inset-0 size-full overflow-clip transition-opacity duration-750 ease-in-out {mounted
		? 'opacity-100'
		: 'opacity-0'}"
	bind:this={container}
>
	<canvas class="absolute top-0 left-0 size-full" bind:this={canvas}></canvas>
</div>
