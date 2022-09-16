<template>
	<figure class="prose-blockquote:font-normal prose-blockquote:not-italic">
		<blockquote class="not-prose text-neutral-300 [&>p]:text-justify">
			<slot></slot>
		</blockquote>

		<figcaption>
			&mdash; {{ author }},
			<cite>{{ source }}</cite>
		</figcaption>
	</figure>
</template>

<script setup lang="ts">
defineProps<{ author: string; source: string }>();
</script>

<style>
.indent-1 {
	margin-left: 1em;
}

.indent-2 {
	margin-left: 2em;
}
</style>
