import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { NitroApp } from "nitropack";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNitroPlugin((app: NitroApp) => {
	app.hooks.hook("content:file:afterParse", (file: ParsedContent) => {
		const filename = file._id.split(":").at(-1)!.split(".")[1];

		if (filename === "index" || /^[a-z]/.test(file.title![0])) return;

		file.title = filename[0].toLowerCase() + filename.slice(1).replace(/_/g, " ");
	});
});
