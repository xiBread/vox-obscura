import type { APIRoute, GetStaticPaths } from "astro";
import { dictionary } from "../../lib/dictionary";

export const getStaticPaths: GetStaticPaths = () => {
	return dictionary.words.map(({ slug }) => ({ params: { slug } }));
};

export const GET: APIRoute = ({ params }) => {
	return new Response(JSON.stringify(dictionary.get(params.slug!)));
};
