export type Post = {
	url: string;
	frontmatter: {
		title: string;
		date: string;
		description: string;
		image: string;
		link: string;
		repo: string;
		tags: string[];
		apidata: boolean;
	}
}