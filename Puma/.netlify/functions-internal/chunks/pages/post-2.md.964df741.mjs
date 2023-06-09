import { i as createVNode, j as spreadAttributes, F as Fragment } from '../../renderers.mjs';
import { $ as $$MarkdownPostLayout } from './post-1.md.9b9a443e.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'fs';
import 'mime/lite.js';
import 'path';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';
import './about.astro.6744cf18.mjs';
/* empty css                               *//* empty css                            */import './_...slug_.astro.d1e59f1e.mjs';
/* empty css                                                                    *//* empty css                               *//* empty css                               *//* empty css                           */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\nsrc/pages/posts/post-3.md</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg","alt":"Thumbnails of websites from the Astro Showcase site."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\nsrc/pages/posts/post-3.md\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
