<template>
	<div class="flex h-full items-center justify-center">
		<dl class="absolute top-0 p-8 font-mono text-sm">
			<dd>
				<NuxtLink :to="`/${name}`" class="text-neutral-500 hover:text-white">
					<em>{{ current.title }}</em>
				</NuxtLink>
			</dd>
		</dl>

		<ContentDoc class="prose !prose-invert prose-neutral" />
	</div>
</template>

<script setup lang="ts">
import type { NavItem, ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Ref } from "vue";

interface Content {
	navigation: Ref<NavItem[]>;
	next: Ref<ParsedContent>;
	prev: Ref<ParsedContent>;
	page: Ref<ParsedContent>;
}

const router = useRouter();
const { prev, next, page, navigation } = useContent() as Content;

const [, name] = /\d\.([\w-]+)/.exec(page.value._id)!;
const current = navigation.value.find((item) => item._path.includes(name))!;

const push = (page?: ParsedContent) => void (!page?.index && router.push(page?._path ?? "/"));

onKeyStroke("ArrowLeft", () => push(prev.value));
onKeyStroke("ArrowRight", () => push(next.value));
</script>
