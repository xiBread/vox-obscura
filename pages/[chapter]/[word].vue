<template>
	<div class="flex h-full items-center justify-center">
		<ContentDoc class="prose prose-neutral !prose-invert" />
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const $regex = new RegExp(`/${route.params.chapter}/`);

const { data } = await useAsyncData(() => queryContent().where({ _path: { $regex } }).find());
const words = data.value;

const current = words.findIndex((page) => page.title === route.params.word);
const prev = words[current - 1];
const next = words[current + 1];

onMounted(() => {
	useEventListener(document, "keydown", (event) => {
		if (event.key === "ArrowLeft" && prev) {
			router.push(prev._path);
		} else if (event.key === "ArrowRight" && next) {
			router.push(next._path);
		}
	});
});
</script>
