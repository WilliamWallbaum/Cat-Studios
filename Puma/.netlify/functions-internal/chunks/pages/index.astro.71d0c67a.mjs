import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, h as renderHead, b as addAttribute } from '../../renderers.mjs';
import { $ as $$Layout } from './about.astro.6744cf18.mjs';
/* empty css                           */import { g as getCollection, b as $$FormattedDate, c as $$BaseHead, $ as $$Header, a as $$Footer, S as SITE_TITLE, d as SITE_DESCRIPTION } from './_...slug_.astro.d1e59f1e.mjs';
/* empty css                           */
const $$Astro$1 = createAstro("https://catstudios.online");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
    <h1 class="astro-J7PV25F6">${title}</h1>
    <section id="BuildCaracterForm" class="astro-J7PV25F6"></section>
    <p class="instructions astro-J7PV25F6">
      To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
      <strong class="astro-J7PV25F6">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
  </main>
` })}`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/index.astro");

const $$file$1 = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://catstudios.online");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" class="astro-FJQFNJXI">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-FJQFNJXI" })}
		
	${renderHead($$result)}</head>
	<body class="astro-FJQFNJXI">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-FJQFNJXI" })}
		<main class="astro-FJQFNJXI">
			<section class="astro-FJQFNJXI">
				<ul class="astro-FJQFNJXI">
					${posts.map((post) => renderTemplate`<li class="astro-FJQFNJXI">
								${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "class": "astro-FJQFNJXI" })}
								<a${addAttribute(`/blog/${post.slug}/`, "href")} class="astro-FJQFNJXI">${post.data.title}</a>
							</li>`)}
				</ul>
			</section>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-FJQFNJXI" })}
	</body></html>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/posts/index.astro");

const $$file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
