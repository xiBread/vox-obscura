<template>
	<div class="flex h-full items-center justify-center px-24 sm:px-28">
		<nav class="font-mono">
			<ContentNavigation v-slot="{ navigation }">
				<ol class="list-[decimal-leading-zero] space-y-10 p-0 marker:text-neutral-600">
					<li v-for="chapter in navigation" :key="chapter._path" class="pl-0">
						<NuxtLink
							:to="chapter._path"
							:title="chapter.title"
							class="group font-normal text-neutral-400 no-underline hover:text-white"
						>
							{{ chapter.title }}
							<br />
							<span class="text-sm text-neutral-500 group-hover:text-neutral-300">
								<em>{{ chapter.description }}</em>
							</span>
						</NuxtLink>
					</li>
				</ol>
			</ContentNavigation>
		</nav>
	</div>
</template>

<script setup lang="ts">
useHead({ title: "" });

definePageMeta({
	documentDriven: {
		page: false,
	},
});
</script>
