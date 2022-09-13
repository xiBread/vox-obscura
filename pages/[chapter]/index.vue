<template>
	<div class="flex flex-col justify-center">
		<div class="flex justify-center mt-32">
			<ContentDoc tag="article" class="prose prose-neutral !prose-invert" />
		</div>

		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-28 gap-x-20 mx-auto font-mono my-20"
		>
			<ContentQuery :path="$route.params.chapter.toString()" :skip="1" v-slot="{ data }">
				<NuxtLink
					v-for="word in data"
					:key="word._path"
					:to="word._path"
					class="first-letter:lowercase mr-10 my-4 text-neutral-400 hover:text-white"
				>
					{{ word.title }}
				</NuxtLink>
			</ContentQuery>
		</div>
	</div>
</template>
