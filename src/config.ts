interface NavItem {
	readonly slug: string;
	readonly title: string;
	readonly description: string;
}

export const NAVIGATION: readonly NavItem[] = [
	{
		slug: "between-living-and-dreaming",
		title: "Between Living and Dreaming",
		description: "Seeing the world as it is, and the world as it could be",
	},
	{
		slug: "the-interior-wilderness",
		title: "The Interior Wilderness",
		description: "Defining who you are from the inside out",
	},
	{
		slug: "montage-of-attractions",
		title: "Montage of Attractions",
		description: "Finding shelter in the presence of others",
	},
	{
		slug: "faces-in-a-crowd",
		title: "Faces in a Crowd",
		description: "Catching glimpses of humanity from a distance",
	},
	{
		slug: "boats-against-the-current",
		title: "Boats Against the Current",
		description: "Holding on in the rush of the moment",
	},
	{
		slug: "roll-the-bones",
		title: "Roll the Bones",
		description: "Connecting the dots of a wide-open universe",
	},
] as const;
