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

			<footer class="p-8 font-mono text-sm">
				<nav class="flex items-center justify-center text-neutral-500">
					<NuxtLink to="/" class="hover:text-white">home</NuxtLink>
					&nbsp;&bullet;&nbsp;
					<NuxtLink to="/all" class="hover:text-white">index</NuxtLink>
				</nav>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} • Vox Obscura` : "Vox Obscura"),
});

const router = useRouter();

onKeyStroke("Escape", () => void router.push("/"));
onKeyStroke("?", () => void router.push("/all"));
</script>
