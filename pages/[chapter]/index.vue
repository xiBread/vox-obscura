<template>
	<div class="flex flex-col justify-center">
		<div class="mt-32 flex justify-center">
			<ContentDoc tag="article" class="prose !prose-invert prose-neutral" />
		</div>

		<div
			class="mx-auto my-20 grid grid-cols-1 gap-y-10 gap-x-20 font-mono text-neutral-400 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
		>
			<ContentQuery v-slot="{ data }" :path="$route.params.chapter.toString()" :skip="1">
				<NuxtLink
					v-for="word in data"
					:key="word._path"
					:to="word._path"
					class="my-4 mr-10 hover:text-white"
				>
					{{ word.title }}
				</NuxtLink>
			</ContentQuery>
		</div>
	</div>
</template>
