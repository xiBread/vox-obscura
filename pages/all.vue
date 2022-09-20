<template>
	<div class="font-mono text-neutral-400 my-32 flex items-center justify-center">
		<ol class="[column-count:3] space-y-2 gap-x-32">
			<li v-for="word in words" :key="word._path">
				<NuxtLink :to="word._path" class="hover:text-white">{{ word.title }}</NuxtLink>
			</li>
		</ol>
	</div>
</template>

<script setup lang="ts">
useHead({ title: "Index" });
const { navigation } = useContent();

const words = navigation.value
	.map((ch) => ch.children)
	.flat()
	.filter((w) => !w.description)
	.sort((a, b) => a.title.localeCompare(b.title));
</script>
