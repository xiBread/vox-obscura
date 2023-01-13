import { createClient } from "contentful";

export default createClient({
	space: import.meta.env.CTF_SPACE_ID,
	accessToken: import.meta.env.CTF_ACCESS_TOKEN,
});
