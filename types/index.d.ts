import type { NavItem, ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Ref } from "vue";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$doc: ParsedContent;
	}
}

declare global {
	interface Content {
		navigation: Ref<NavItem[]>;
		page: Ref<ParsedContent>;
		next: Ref<ParsedContent | undefined>;
		prev: Ref<ParsedContent | undefined>;
	}
}
