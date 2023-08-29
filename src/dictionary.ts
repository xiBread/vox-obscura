import chapterData from "./data/chapters.json";
import wordData from "./data/words.json";

interface Metadata {
	id: number;
	slug: string;
	name: string;
}

interface Chapter extends Metadata {
	description: string;
	quotes: ChapterQuote[];
	words: Word[];
}

interface ChapterQuote {
	body: string;
	author: string;
	source: string;
}

export interface Word extends Metadata {
	type: number;
	chapter: string;
	definition: string;
	etymology: string;
}

const words = Object.values(wordData).flat();

export default {
	chapters: Object.entries(wordData).reduce<Record<string, Chapter>>(
		(all, [slug, words], i) => ({
			...all,
			[slug]: {
				...chapterData.find((ch) => ch.id === i)!,
				words,
			},
		}),
		{}
	),
	words,
	get: (slug: string): Word => {
		return words.find((word) => word.slug === slug)!;
	},
};
