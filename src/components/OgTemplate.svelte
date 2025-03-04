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

	const bgVariant = Math.floor(Math.random() * 4 + 1);
</script>

<img
	class="absolute w-full h-full"
	src="{import.meta.env.PUBLIC_BASE_URL}/og-background-{bgVariant}.jpg"
	alt=""
	width="1200"
	height="630"
/>

{#if word}
	<div class="flex flex-col justify-center h-full px-16 text-white">
		<h1 class="font-black text-7xl mb-0">{word.name}</h1>

		<p class="text-2xl text-neutral-400">
			{word.definition.replace(/<[^>]+(>|$)/g, "")}
		</p>
	</div>
{:else}
	<div class="flex items-center justify-center w-full h-full text-white">
		<div class="flex flex-col px-16">
			<span class="text-4xl" style="font-family: Playfair;">
				{romanNumerals[chapter.id]}
			</span>

			<h1 class="font-black my-3 text-8xl">
				{chapter.name.toUpperCase()}
			</h1>

			<p class="text-3xl leading-0">{chapter.description}</p>
		</div>
	</div>
{/if}
