<template>
	<Head>
		<Link type="image/png" rel="icon" href="/logo.png" />
	</Head>

	<div class="h-screen w-screen">
		<Lichtenberg />

		<div class="flex h-full flex-col">
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

const router = useRouter();

onMounted(() => {
	useEventListener(document, "keydown", (event) => {
		if (event.key === "Escape") {
			void router.push("/");
		} else if (event.code === "Slash" && event.shiftKey) {
			void router.push("/all");
		}
	});
});
</script>
