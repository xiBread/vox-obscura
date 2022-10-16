<template>
	<div class="absolute flex h-full w-full items-center justify-center">
		<div class="absolute left-0 flex px-8">
			<nav class="m-0 my-auto">
				<ol class="group m-0 list-none p-0 text-sm text-neutral-600">
					<li
						v-for="(chapter, i) in navigation"
						:key="chapter._id"
						class="!leading-8 hover:text-neutral-200"
					>
						<NuxtLink :to="chapter._path">
							<div class="relative w-6 text-center font-mono">
								{{ `${i + 1}`.padStart(2, "0") }}

								<span
									class="absolute left-6 w-64 whitespace-nowrap text-left opacity-0 transition-[left,opacity] duration-500 group-hover:left-12 group-hover:opacity-100"
								>
									{{ chapter.title }}
								</span>
							</div>
						</NuxtLink>
					</li>
				</ol>
			</nav>
		</div>

		<dl class="absolute top-0 p-8 font-mono text-sm">
			<dd>
				<NuxtLink :to="`/${name}`" class="text-neutral-500 hover:text-neutral-200">
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
