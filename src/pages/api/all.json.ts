import type { APIRoute } from "astro";
import { dictionary } from "../../lib/dictionary";

export const GET: APIRoute = () => new Response(JSON.stringify(dictionary.words));
