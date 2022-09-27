<template>
	<div>
		<input type="text" />
	</div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch("vox_obscura");
</script>
