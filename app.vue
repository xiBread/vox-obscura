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

			<footer class="z-10 p-8 font-mono text-sm">
				<nav
					class="flex items-center justify-center text-neutral-500 [&>span:not(:first-child)]:before:content-['\a0•\a0']"
				>
					<span v-for="[to, text] in links" :key="text">
						<NuxtLink :to="to" class="hover:text-neutral-200">{{ text }}</NuxtLink>
					</span>
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

const links = [
	["/", "home"],
	["/all", "index"],
	["https://github.com/xiBread/vox-obscura", "source"],
];

onKeyStroke("Escape", () => void router.push("/"));
onKeyStroke("?", () => void router.push("/all"));
</script>
