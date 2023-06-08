import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as createCollectionToGlobResultMap, g as createGetCollection, h as renderHead } from '../astro.98501766.mjs';
/* empty css                           *//* empty css                                                                    *//* empty css                           */
const $$Astro$6 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/components/BaseHead.astro");

const $$Astro$5 = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([[className, { active: isActive }], "astro-EIMMU3LG"], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/components/HeaderLink.astro");

const SITE_TITLE = "My personal website.";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$4 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
	<h2 class="astro-3EF6KSR2">
		${SITE_TITLE}
	</h2>
	<nav class="astro-3EF6KSR2">
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Home` })}
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Blog` })}
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`About` })}
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://twitter.com/astrodotbuild", "target": "_blank", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Twitter` })}
		${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://github.com/withastro/astro", "target": "_blank", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`GitHub` })}
	</nav>
</header>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/components/Header.astro");

const $$Astro$3 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
	&copy; ${today.getFullYear()} YOUR NAME HERE. All rights reserved.
</footer>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/components/Footer.astro");

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post.d73d1d09.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide.a14118ec.mjs'),"/src/content/blog/second-post.md": () => import('../second-post.fdf0ec2f.mjs'),"/src/content/blog/third-post.md": () => import('../third-post.8d06dc73.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx.7afbb88a.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","third-post":"/src/content/blog/third-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md","using-mdx":"/src/content/blog/using-mdx.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post.442f209f.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide.397bac78.mjs'),"/src/content/blog/second-post.md": () => import('../second-post.0703c620.mjs'),"/src/content/blog/third-post.md": () => import('../third-post.999ff943.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx.71f6a7b5.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>
	${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}
</time>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/components/FormattedDate.astro");

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-BVZIHDZO">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-BVZIHDZO" })}
		
	${renderHead($$result)}</head>

	<body class="astro-BVZIHDZO">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-BVZIHDZO" })}
		<main class="astro-BVZIHDZO">
			<article class="astro-BVZIHDZO">
				${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" class="astro-BVZIHDZO">`}
				<h1 class="title astro-BVZIHDZO">${title}</h1>
				${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "class": "astro-BVZIHDZO" })}
				${updatedDate && renderTemplate`<div class="last-updated-on astro-BVZIHDZO">
							Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "class": "astro-BVZIHDZO" })}
						</div>`}
				<hr class="astro-BVZIHDZO">
				${renderSlot($$result, $$slots["default"])}
			</article>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-BVZIHDZO" })}
	</body></html>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/layouts/BlogPost.astro");

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<h1>${post.data.title}</h1>
	${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/[...slug].astro");

const $$file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, SITE_TITLE as S, ____slug_ as _, $$BaseHead as a, $$Header as b, $$Footer as c, SITE_DESCRIPTION as d, $$FormattedDate as e, $$HeaderLink as f, getCollection as g };
