<template>
	<div class="flex h-full items-center justify-center">
		<ContentDoc class="prose prose-neutral !prose-invert" />
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
const { prev, next } = useContent();

onMounted(() => {
	useEventListener(document, "keydown", (event) => {
		if (event.key === "ArrowLeft" && prev) {
			router.push(prev.value._path);
		} else if (event.key === "ArrowRight" && next) {
			router.push(next.value._path);
		}
	});
});
</script>
