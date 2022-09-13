<template>
	<div class="h-screen w-screen">
		<Lichtenberg />

		<main class="min-h-full">
			<NuxtPage />
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} • Vox Obscura` : "Vox Obscura"),
});
</script>
