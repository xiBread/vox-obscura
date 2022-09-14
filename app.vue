<template>
	<div class="h-screen w-screen">
		<Lichtenberg />

		<div class="flex flex-col h-full">
			<main class="flex-[1]">
				<NuxtPage />
			</main>

			<AppFooter />
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} • Vox Obscura` : "Vox Obscura"),
});
</script>
