<template>
	<dl>
		<dt>
			<h1>
				<ContentSlot :use="$slots.default" unwrap="p" />
			</h1>
		</dt>

		<dd class="text-justify">
			<slot name="definition"></slot>
		</dd>

		<dd class="text-justify text-sm text-neutral-400">
			<slot name="details"></slot>
		</dd>
	</dl>
</template>
