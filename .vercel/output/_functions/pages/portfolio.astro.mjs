import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { $ as $$PortfolioGrid, a as $$TestimonialQuote, b as $$Contact } from '../chunks/TestimonialQuote_c6WtEMRu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DP1lnzhf.mjs';
import { g as getCollection } from '../chunks/_astro_content_CHCG-VF3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const portfolios = await getCollection("portfolios", ({ data }) => {
    return data.draft !== true;
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portfolios", "description": "Portfolio page for my projects and work." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="site-container pt-24 md:pt-36"> <div class="mx-auto max-w-6xl text-center"> <h1 class="h2 text-pretty uppercase">
Este es el momento de tomar el fúturo en tus manos y conquistar con tu sonrisa.
</h1> </div> ${renderComponent($$result2, "PortfolioGrid", $$PortfolioGrid, { "portfolios": portfolios })} </div> ${renderComponent($$result2, "TestimonialQuote", $$TestimonialQuote, {})} ${renderComponent($$result2, "Contact", $$Contact, { "class": "mt-12" })} ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/portfolio/index.astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
