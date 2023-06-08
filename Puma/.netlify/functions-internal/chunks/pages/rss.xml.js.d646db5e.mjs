import rss from '@astrojs/rss';
import { g as getCollection, S as SITE_TITLE, d as SITE_DESCRIPTION } from './_...slug_.astro.bd9f2f05.mjs';
import '../astro.98501766.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           *//* empty css                                                                    *//* empty css                           */
async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { get };
