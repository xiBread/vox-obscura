<template>
	<div class="mt-32 mb-16 flex items-center justify-center font-mono text-neutral-400">
		<div class="columns-3 gap-x-40 space-y-12">
			<div v-for="group in Object.keys(groups).sort()" :key="group">
				<ol class="relative inline-block space-y-2">
					<span
						class="absolute -top-4 -left-4 text-5xl font-semibold text-neutral-500/30"
					>
						{{ group }}
					</span>

					<li v-for="word in sort(groups[group])" :key="word._path">
						<NuxtLink :to="word._path" class="hover:text-white">
							{{ word.title }}
						</NuxtLink>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

useHead({ title: "Index" });

definePageMeta({
	documentDriven: {
		page: false,
	},
});

const { navigation } = useContent() as Content;

const sort = (xs: NavItem[]) => xs.sort((a, b) => a.title.localeCompare(b.title));

const groups = navigation.value
	.flatMap((nav) => nav.children!)
	.filter((word) => !word.description)
	.map((word) => ({
		...word,
		title: word.title.replace(/^the (.+)/, "$1, the"),
	}))
	.reduce<Record<string, NavItem[]>>((group, word) => {
		(group[word.title[0].toUpperCase()] ??= []).push(word);

		return group;
	}, {});
</script>
