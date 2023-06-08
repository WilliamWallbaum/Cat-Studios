import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import { i as deserializeManifest } from './chunks/astro.98501766.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.58230ee5.mjs');
const _page1  = () => import('./chunks/rss.6459fe49.mjs');
const _page2  = () => import('./chunks/about@_@astro.64382c85.mjs');
const _page3  = () => import('./chunks/index@_@astro.c956178e.mjs');
const _page4  = () => import('./chunks/_...71aff9f3.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.js", _page1],["src/pages/about.astro", _page2],["src/pages/blog/index.astro", _page3],["src/pages/blog/[...slug].astro", _page4]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.a5218c4e.css"},{"type":"external","src":"/_astro/HeaderLink.astro_astro_type_style_index_0_lang.28ee6213.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.a5218c4e.css"},{"type":"external","src":"/_astro/HeaderLink.astro_astro_type_style_index_0_lang.28ee6213.css"},{"type":"external","src":"/_astro/about.26bc61b1.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.a5218c4e.css"},{"type":"external","src":"/_astro/HeaderLink.astro_astro_type_style_index_0_lang.28ee6213.css"},{"type":"external","src":"/_astro/index.3cb4ed4e.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.a5218c4e.css"},{"type":"external","src":"/_astro/HeaderLink.astro_astro_type_style_index_0_lang.28ee6213.css"},{"type":"external","src":"/_astro/about.26bc61b1.css"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/about.astro":"chunks/pages/about.astro.d0973ebe.mjs","/src/pages/rss.xml.js":"chunks/pages/rss.xml.js.d646db5e.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.58230ee5.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss.6459fe49.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.64382c85.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index@_@astro.c956178e.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_...71aff9f3.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post.d73d1d09.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide.a14118ec.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post.fdf0ec2f.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post.8d06dc73.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx.7afbb88a.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post.442f209f.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide.397bac78.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post.0703c620.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post.999ff943.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx.71f6a7b5.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/first-post.md":"chunks/first-post.4a5c37db.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide.732e7070.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/second-post.md":"chunks/second-post.486b8ff0.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/third-post.md":"chunks/third-post.5b1374f9.mjs","C:/Users/Bill Walown/Documents/GIT/Cat-Studios/Cat-Studios/Puma/src/content/blog/using-mdx.mdx":"chunks/using-mdx.d0613991.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/HeaderLink.astro_astro_type_style_index_0_lang.28ee6213.css","/_astro/about.26bc61b1.css","/_astro/about.a5218c4e.css","/_astro/index.3cb4ed4e.css","/favicon.svg","/placeholder-about.jpg","/placeholder-hero.jpg","/placeholder-social.jpg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
