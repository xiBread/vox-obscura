import type { APIRoute } from "astro";
import chapters from "../../data/chapters.json";

export const GET: APIRoute = () => new Response(JSON.stringify(chapters));
