import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$doc: ParsedContent;
	}
}
