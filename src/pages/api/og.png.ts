import type { APIRoute } from "astro";
import type { SatoriOptions } from "satori";
import { Buffer } from "node:buffer";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { html } from "satori-html";
import { render } from "svelte/server";
import Inter400 from "../../assets/InterDisplay-400.woff";
import Inter700 from "../../assets/InterDisplay-700.woff";
import Inter900 from "../../assets/InterDisplay-900.woff";
import Playfair600 from "../../assets/PlayfairDisplay-600.ttf";
import OgTemplate from "../../components/OgTemplate.svelte";

export const prerender = false;

const satoriOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	fonts: [
		{
			name: "Inter",
			data: Buffer.from(Inter400),
			weight: 400,
		},
		{
			name: "Inter",
			data: Buffer.from(Inter700),
			weight: 700,
		},
		{
			name: "Inter",
			data: Buffer.from(Inter900),
			weight: 900,
		},
		{
			name: "Playfair",
			data: Buffer.from(Playfair600),
			weight: 600,
		},
	],
};

export const GET: APIRoute = async ({ url }) => {
	const chapter = url.searchParams.get("chapter");
	const word = url.searchParams.get("word");

	if (!chapter) {
		return new Response("`chapter` parameter required", { status: 400 });
	}

	const { body } = render(OgTemplate, { props: { chapter, word } });
	const svg = await satori(html(body), satoriOptions);

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: "width",
			value: 1200,
		},
		font: {
			loadSystemFonts: false,
		},
	});

	return new Response(resvg.render().asPng(), {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": import.meta.env.DEV
				? "no-cache, no-store"
				: "public, immutable, no-transform, max-age=31536000",
		},
	});
};
