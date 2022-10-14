<template>
	<div class="flex h-full items-center justify-center">
		<dl class="absolute top-0 p-8 font-mono text-sm">
			<dd>
				<NuxtLink :to="`/${name}`" class="text-neutral-500 hover:text-white">
					<em>{{ chapterName }}</em>
				</NuxtLink>
			</dd>
		</dl>

		<ContentDoc class="prose !prose-invert prose-neutral" />
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Ref } from "vue";

type Content = Ref<ParsedContent>;

const router = useRouter();
const { prev, next, page } = useContent() as Record<string, Content>;

const [, name] = /\d\.([\w-]+)/.exec(page.value._id)!;
const chapterName = name
	.split("-")
	.map((word) => word[0].toUpperCase() + word.slice(1))
	.join(" ");

const push = (page?: Content) => void (!page?.value.index && router.push(page?.value._path ?? "/"));

onKeyStroke("ArrowLeft", () => push(prev));
onKeyStroke("ArrowRight", () => push(next));
</script>
