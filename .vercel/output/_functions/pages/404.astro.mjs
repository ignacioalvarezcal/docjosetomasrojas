import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_BXITQ2cS.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DP1lnzhf.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404", "description": "Error 404 page not found.", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="site-container pt-36 text-center md:pt-44"> <div class="mx-auto max-w-xl px-4 text-center"> <h1 class="h1">Page not found!</h1> <p class="description mt-4">
Apologies, one of our links must have broken. Please try again or go back to the homepage.
</p> <div class="mt-8 flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "href": "/" }, { "default": ($$result3) => renderTemplate`Go to homepage` })} </div> </div> </section> ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/404.astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
