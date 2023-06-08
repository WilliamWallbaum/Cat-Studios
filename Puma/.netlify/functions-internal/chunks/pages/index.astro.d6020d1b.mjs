import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, h as renderHead, b as addAttribute } from '../astro.98501766.mjs';
import { a as $$BaseHead, b as $$Header, c as $$Footer, S as SITE_TITLE, d as SITE_DESCRIPTION, g as getCollection, e as $$FormattedDate } from './_...slug_.astro.bd9f2f05.mjs';
/* empty css                           */
const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
	${renderHead($$result)}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
		<main>
			<h1>🧑‍🚀 Hello, Astronaut!</h1>
			<p>
				Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This
				template serves as a lightweight, minimally-styled starting point for anyone looking to build
				a personal website, blog, or portfolio with Astro.
			</p>
			<p>
				This template comes with a few integrations already configured in your
				<code>astro.config.mjs</code> file. You can customize your setup with
				<a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind,
				React, or Vue to your project.
			</p>
			<p>Here are a few ideas on how to get started with the template:</p>
			<ul>
				<li>Edit this page in <code>src/pages/index.astro</code></li>
				<li>Edit the site header items in <code>src/components/Header.astro</code></li>
				<li>Add your name to the footer in <code>src/components/Footer.astro</code></li>
				<li>Check out the included blog posts in <code>src/pages/blog/</code></li>
				<li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li>
			</ul>
			<p>
				Have fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs
				</a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions.
			</p>
			<p>
				Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template">astro-blog-template
				</a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
			</p>
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/index.astro");

const $$file$1 = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" class="astro-5TZNM7MJ">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-5TZNM7MJ" })}
		
	${renderHead($$result)}</head>
	<body class="astro-5TZNM7MJ">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-5TZNM7MJ" })}
		<main class="astro-5TZNM7MJ">
			<section class="astro-5TZNM7MJ">
				<ul class="astro-5TZNM7MJ">
					${posts.map((post) => renderTemplate`<li class="astro-5TZNM7MJ">
								${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "class": "astro-5TZNM7MJ" })}
								<a${addAttribute(`/blog/${post.slug}/`, "href")} class="astro-5TZNM7MJ">${post.data.title}</a>
							</li>`)}
				</ul>
			</section>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-5TZNM7MJ" })}
	</body></html>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/index.astro");

const $$file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
