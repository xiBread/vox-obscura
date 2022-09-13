<template>
	<dl>
		<dt>
			<h1>
				<ContentSlot :use="$slots.default" unwrap="p" />
			</h1>
		</dt>

		<dd>
			<slot name="definition"></slot>
		</dd>

		<dd class="text-sm text-neutral-400">
			<slot name="details"></slot>
		</dd>
	</dl>
</template>
