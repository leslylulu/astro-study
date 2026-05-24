import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('blog');
	return rss({
		title: 'Lulu Zhang | Blog',
		description: 'My journey learning Astro',
		site: context.site!, // could be undefined, but we know it is set in astro.config.mjs
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.id}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}