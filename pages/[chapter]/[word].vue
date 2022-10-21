<template>
	<div class="absolute flex h-full w-full items-center justify-center">
		<dl class="absolute top-0 p-8 font-mono text-sm">
			<dd>
				<NuxtLink :to="`/${name}`" class="text-neutral-500 hover:text-neutral-200">
					{{ current.title }}
				</NuxtLink>
			</dd>
		</dl>

		<ContentDoc class="prose !prose-invert prose-neutral" />

		<div class="absolute left-0 hidden px-8 lg:flex">
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
									class="absolute left-0 w-64 whitespace-nowrap pl-6 text-left opacity-0 transition-[padding,opacity] duration-500 group-hover:pl-12 group-hover:opacity-100"
								>
									{{ chapter.title }}
								</span>
							</div>
						</NuxtLink>
					</li>
				</ol>
			</nav>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const router = useRouter();
const { prev, next, page, navigation } = useContent() as Content;

const [, name] = /\d\.([\w-]+)/.exec(page.value._id)!;
const current = navigation.value.find((item) => item._path.includes(name))!;

const push = (page?: ParsedContent) => void (!page?.index && router.push(page?._path ?? "/"));

onKeyStroke("ArrowLeft", () => push(prev.value));
onKeyStroke("ArrowRight", () => push(next.value));
</script>
