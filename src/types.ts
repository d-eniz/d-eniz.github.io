export type Post = {
	url: string;
	frontmatter: {
		title: string;
		date: string;
		description: string;
		tags: string[];
		image: string;
	}
}