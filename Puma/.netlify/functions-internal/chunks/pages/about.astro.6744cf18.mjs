import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, h as renderHead, m as maybeRenderHead, e as renderComponent, d as renderSlot } from '../../renderers.mjs';
/* empty css                               *//* empty css                            */import { $ as $$Header, a as $$Footer } from './_...slug_.astro.d1e59f1e.mjs';
/* empty css                           */
const $$Astro$4 = createAstro("https://catstudios.online");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate`<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta charset="utf-8">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="generator"${addAttribute(Astro2.generator, "content")}>
  <title>${title}</title>
  
${renderHead($$result)}</head>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/components/Head.astro");

const $$Astro$3 = createAstro("https://catstudios.online");
const $$PostLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostLinks;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/post-1.md": () => import('./post-1.md.9b9a443e.mjs').then(n => n.p),"../pages/posts/post-2.md": () => import('./post-2.md.964df741.mjs'),"../pages/posts/post-3.md": () => import('./post-3.md.306ff976.mjs'),"../pages/posts/post-4.md": () => import('./post-4.md.ad45b33d.mjs')}), () => "../pages/posts/*.md");
  return renderTemplate`${maybeRenderHead($$result)}<section id="postlinks" class="astro-INNK35PI">
  <div class="post-section-header astro-INNK35PI">
    <h1 class="astro-INNK35PI">My Astro Learning Blog</h1>
    <p class="astro-INNK35PI">This is where I will post about my journey learning Astro.</p>
  </div>

  <div class="post-container astro-INNK35PI">
    <ul id="blog-post-list" class="astro-INNK35PI">
      ${allPosts.map((post) => renderTemplate`<li${addAttribute(post.frontmatter.title, "id")} class="astro-INNK35PI">
            ${renderComponent($$result, "Image", Image, { "src": post.frontmatter.image.url, "width": 300, "height": 300, "alt": post.frontmatter.image.alt, "class": "astro-INNK35PI" })}
            <h3 class="astro-INNK35PI">
              <a class="blog-post-a astro-INNK35PI"${addAttribute(post.url, "href")}>
                ${post.frontmatter.title}
              </a>
            </h3>
            <p class="astro-INNK35PI">${post.frontmatter.description}</p>
          </li>`)}
    </ul>
  </div>
</section>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/components/PostLinks.astro");

const $$Astro$2 = createAstro("https://catstudios.online");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en">
  ${renderComponent($$result, "Head", $$Head, {})}
  ${maybeRenderHead($$result)}<body>
    ${renderComponent($$result, "Header", $$Header, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "PostLinks", $$PostLinks, {})}
    ${renderComponent($$result, "Footer", $$Footer, {})}

    
  </body>
</html>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/layouts/Layout.astro");

const $$Astro$1 = createAstro("https://catstudios.online");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/components/Card.astro");

const $$Astro = createAstro("https://catstudios.online");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  }, skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"], finished = false, { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="astro-KH7BTL4R">
    <h1 class="astro-KH7BTL4R">${title} Perrie</h1>
    <p class="instructions astro-KH7BTL4R">
      To get started, open the directory <code class="astro-KH7BTL4R">src/pages</code> in your project.<br class="astro-KH7BTL4R">
      <strong class="astro-KH7BTL4R">Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
    <ul role="list" class="link-card-grid astro-KH7BTL4R">
      ${renderComponent($$result2, "Card", $$Card, { "href": "./blog", "title": "Story", "body": "This is the story behind Perrie", "class": "astro-KH7BTL4R" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "./about", "title": "History", "body": "Reaching all the back into the crusades.", "class": "astro-KH7BTL4R" })}
      ${renderComponent($$result2, "Card", $$Card, { "href": "./", "title": "Home", "body": "Go Home!", "class": "astro-KH7BTL4R" })}
    </ul>

    <h1 class="astro-KH7BTL4R">My Astro Learning Blog</h1>
    <p class="astro-KH7BTL4R">This is where I will post about my journey learning Astro.</p>
    <ul class="astro-KH7BTL4R">
      <li class="astro-KH7BTL4R"><a href="/posts/post-1/" class="astro-KH7BTL4R">Post 1</a></li>
      <li class="astro-KH7BTL4R"><a href="/posts/post-2/" class="astro-KH7BTL4R">Post 2</a></li>
      <li class="astro-KH7BTL4R"><a href="/posts/post-3/" class="astro-KH7BTL4R">Post 3</a></li>
    </ul>

    <p class="astro-KH7BTL4R">Here are a few facts about me:</p>
    <ul class="astro-KH7BTL4R">
      <li class="astro-KH7BTL4R">My name is ${identity.firstName}.</li>
      <li class="astro-KH7BTL4R">
        I live in ${identity.country} and I work as a ${identity.occupation}.
      </li>
      ${identity.hobbies.length >= 2 && renderTemplate`<li class="astro-KH7BTL4R">
            Two of my hobbies are: ${identity.hobbies[0]} and${" "}
            ${identity.hobbies[1]}
          </li>`}
    </ul>
    <p class="astro-KH7BTL4R">My skills are:</p>
    <ul class="astro-KH7BTL4R">
      ${skills.map((skill) => renderTemplate`<li class="skill astro-KH7BTL4R">${skill}</li>`)}
    </ul>

    ${renderTemplate`<p class="astro-KH7BTL4R">I am happy to be learning Astro!</p>`}

    ${finished }

    ${renderTemplate`<p class="astro-KH7BTL4R">My goal is to finish in 3 days.</p>` }
  </main>
` })}`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/about.astro");

const $$file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
