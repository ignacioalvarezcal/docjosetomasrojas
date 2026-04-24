import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ChLuKdkV.mjs';
import { manifest } from './manifest_C_MG9Zmv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/agendar.astro.mjs');
const _page4 = () => import('./pages/casos-clinicos.astro.mjs');
const _page5 = () => import('./pages/conoceme-mas.astro.mjs');
const _page6 = () => import('./pages/contact-me.astro.mjs');
const _page7 = () => import('./pages/portfolio.astro.mjs');
const _page8 = () => import('./pages/portfolio/_---slug_.astro.mjs');
const _page9 = () => import('./pages/services.astro.mjs');
const _page10 = () => import('./pages/servicios.astro.mjs');
const _page11 = () => import('./pages/_page_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/agendar.astro", _page3],
    ["src/pages/casos-clinicos.astro", _page4],
    ["src/pages/conoceme-mas.astro", _page5],
    ["src/pages/contact-me.astro", _page6],
    ["src/pages/portfolio/index.astro", _page7],
    ["src/pages/portfolio/[...slug].astro", _page8],
    ["src/pages/services.astro", _page9],
    ["src/pages/servicios.astro", _page10],
    ["src/pages/[page].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "768602c6-cc01-491d-9593-ce3439995241",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
