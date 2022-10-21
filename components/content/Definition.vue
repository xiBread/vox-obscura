<template>
	<dl class="px-10">
		<dt>
			<h1>{{ page.title }}</h1>
		</dt>

		<dd class="text-justify">
			<slot></slot>
		</dd>

		<dd class="text-justify text-sm text-neutral-400">
			<slot name="details"></slot>
		</dd>
	</dl>
</template>

<script setup lang="ts">
const { page } = useContent() as Content;
</script>
