<template>
	<div class="h-screen w-screen">
		<main class="min-h-full">
			<NuxtPage />
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} • Obscura` : "Obscura"),
});
</script>
