import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DxUF27o1.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/post/code-to-canvas.astro.mjs');
const _page3 = () => import('./pages/post/the-perfect-brew.astro.mjs');
const _page4 = () => import('./pages/post/vintage-tech.astro.mjs');
const _page5 = () => import('./pages/post/writing-less-achieving-more.astro.mjs');
const _page6 = () => import('./pages/post/zen-mornings.astro.mjs');
const _page7 = () => import('./pages/posts.astro.mjs');
const _page8 = () => import('./pages/projects.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/post/code-to-canvas.md", _page2],
    ["src/pages/post/the-perfect-brew.md", _page3],
    ["src/pages/post/vintage-tech.md", _page4],
    ["src/pages/post/writing-less-achieving-more.md", _page5],
    ["src/pages/post/zen-mornings.md", _page6],
    ["src/pages/posts.astro", _page7],
    ["src/pages/projects.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1c95eaa0-97fe-41c4-b587-d2b88db506c5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
