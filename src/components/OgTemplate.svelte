<script lang="ts">
	import { dictionary } from "../lib/dictionary";
	import { romanNumerals } from "../lib/util";

	interface Props {
		chapter: string;
		word: string | null;
	}

	const props: Props = $props();

	const chapter = dictionary.chapters[props.chapter];
	const word = props.word ? dictionary.get(props.word) : null;
</script>

{#if word}
	<!--  -->
{:else}
	<div class="flex items-center justify-center w-full h-full text-white">
		<img
			class="absolute w-full h-full"
			src={`${import.meta.env.PUBLIC_BASE_URL}/og-background.jpg`}
			alt=""
		/>

		<hgroup class="flex flex-col">
			<span class="text-3xl" style="font-family: Playfair;">
				{romanNumerals[chapter.id]}
			</span>

			<h1 class="font-black my-1 text-8xl">
				{chapter.name.toUpperCase()}
			</h1>

			<p class="text-2xl leading-0">{chapter.description}</p>
		</hgroup>
	</div>
{/if}
