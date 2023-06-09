import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../renderers.mjs';
import { $ as $$Layout } from './about.astro.6744cf18.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'fs';
import 'node:fs/promises';
import 'node:url';
import 'node:fs';
import 'node:path';
import 'mime/lite.js';
import 'path';
import 'html-escaper';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';
/* empty css                               *//* empty css                            */import './_...slug_.astro.d1e59f1e.mjs';
/* empty css                                                                    *//* empty css                               *//* empty css                               *//* empty css                           */
const $$Astro = createAstro("https://catstudios.online");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>${title}</h1>
` })}`;
}, "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/blog.astro");

const $$file = "C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Puma/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
