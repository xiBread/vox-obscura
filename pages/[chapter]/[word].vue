<template>
	<div class="flex h-full items-center justify-center">
		<ContentDoc class="prose !prose-invert prose-neutral" />
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Ref } from "vue";

type Content = Ref<ParsedContent>;

const router = useRouter();
const { prev, next } = useContent() as Record<string, Content>;

const push = (page?: Content) => !page?.value.index && router.push(page?.value._path ?? "");

onMounted(() => {
	useEventListener(document, "keydown", (event) => {
		event.key === "ArrowLeft" && push(prev);
		event.key === "ArrowRight" && push(next);
	});
});
</script>
