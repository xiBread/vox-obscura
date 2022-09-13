<template>
	<div class="flex items-center justify-center h-screen">
		<nav class="font-mono">
			<ContentNavigation v-slot="{ navigation }">
				<ol class="list-[decimal-leading-zero] marker:text-neutral-500/80 p-0 space-y-9">
					<li v-for="chapter in navigation" :key="chapter._path" class="pl-0">
						<NuxtLink
							:to="chapter._path"
							:title="chapter.title"
							class="no-underline font-normal text-neutral-400 group hover:text-white"
						>
							{{ chapter.title }}
							<br />
							<span class="text-sm text-neutral-500 group-hover:text-neutral-300">
								{{ chapter.description }}
							</span>
						</NuxtLink>
					</li>
				</ol>
			</ContentNavigation>
		</nav>
	</div>
</template>
