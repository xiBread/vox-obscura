<template>
	<div class="flex flex-col justify-center">
		<div class="mt-32 flex justify-center px-16">
			<ContentDoc tag="article" class="prose !prose-invert prose-neutral" />
		</div>

		<div
			class="mx-auto my-20 grid grid-cols-2 gap-y-8 gap-x-8 px-8 text-center font-mono text-sm text-neutral-400 sm:gap-x-24 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 2xl:grid-cols-4"
		>
			<ContentQuery v-slot="{ data }" :path="$route.params.chapter.toString()" :skip="1">
				<NuxtLink
					v-for="word in data"
					:key="word._path"
					:to="word._path"
					class="my-4 place-self-center hover:text-white"
				>
					{{ word.title }}
				</NuxtLink>
			</ContentQuery>
		</div>
	</div>
</template>
