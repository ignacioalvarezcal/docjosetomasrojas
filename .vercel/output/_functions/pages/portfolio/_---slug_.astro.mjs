import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, e as renderTemplate, r as renderSlot, k as renderTransition, b as addAttribute } from '../../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { a as $$TestimonialQuote, $ as $$PortfolioGrid, b as $$Contact } from '../../chunks/TestimonialQuote_c6WtEMRu.mjs';
import '../../chunks/internal_BrB3KVH6.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CguaQxJb.mjs';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_CHCG-VF3.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DP1lnzhf.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://horizon.cosmicthemes.com");
const $$PortfolioImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioImage;
  const { image, numCols } = Astro2.props;
  const maxWidth = 1120;
  const width = maxWidth / numCols;
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full max-w-6xl"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "portfolio image", "width": width, "quality": "high", "densities": [1.5, 2], "class": "h-auto min-h-full w-full min-w-full object-cover" })} </div>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/PorfolioImage/PortfolioImage.astro", void 0);

const headerImage = new Proxy({"src":"/_astro/portfolio-header-crop-min.p33K-d21.jpg","width":696,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/portfolio-header-crop-min.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://horizon.cosmicthemes.com");
const $$PortfolioLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioLayout;
  const { portfolio } = Astro2.props;
  const { title, description, date, images, clients, location, heroImage } = portfolio.data;
  const otherPortfolios = await getCollection("portfolios", (otherPortfolio) => {
    return otherPortfolio.data.draft !== true && otherPortfolio.id !== portfolio.id;
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "type": "general", "title": title, "description": description, "heroImage": heroImage, "navStartStyle": "white" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative h-[40svh] w-full overflow-hidden md:h-[60svh]"> <div class="absolute inset-0 z-10 bg-black/30"></div> ${renderComponent($$result2, "Image", $$Image, { "src": headerImage, "alt": "Portfolio header", "class": "absolute inset-0 h-auto min-h-full w-full min-w-full object-cover md:hidden", "width": 600, "densities": [1.5, 2], "loading": "eager" })} ${renderComponent($$result2, "Image", $$Image, { "src": headerImage, "alt": "Portfolio header", "class": "absolute inset-0 hidden h-auto min-h-full w-full min-w-full object-cover md:block", "width": 1920, "densities": [1.5, 2], "loading": "eager" })} </div> <article class="mx-auto mt-12 px-4 md:mt-20 md:max-w-6xl"> <h1 class="h1 description mt-4 text-center uppercase"> ${title} </h1> <!-- hero image --> <div class="mt-6 h-auto max-h-[50vh] w-full overflow-hidden md:max-h-[80vh]"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": `cover for ${title}`, "width": 1120, "quality": "high", "densities": [1.5, 2], "class": "h-auto min-h-full w-full min-w-full object-cover", "data-astro-transition-scope": renderTransition($$result2, "anvyhivq", "", `portfolio-image-${portfolio.id}`) })} </div> <!-- people and location --> <h2 class="h3 text-primary-500 mt-10 flex flex-col items-center justify-center gap-x-3 gap-y-1 tracking-widest md:flex-row"> <div> ${clients.join(" & ")} </div> <span class="hidden md:inline">|</span> <hr class="border-primary-400 w-1/3 md:hidden"> <span>${location}</span> </h2> <!-- slot really only fuctions as a longer description --> <div class="description mt-6 text-center text-pretty md:text-lg"> ${renderSlot($$result2, $$slots["default"])} </div> <!-- portfolio images --> <div class="mx-auto mt-12 max-w-5xl space-y-6 md:mt-20 md:space-y-16"> ${images.map((imageGroup) => renderTemplate`<div${addAttribute([
    "mb-6 grid gap-6 md:gap-16",
    {
      "grid-cols-1": imageGroup.length === 1,
      "grid-cols-2": imageGroup.length === 2,
      "grid-cols-3": imageGroup.length === 3
    }
  ], "class:list")}> ${imageGroup.map((image) => renderTemplate`${renderComponent($$result2, "PortfolioImage", $$PortfolioImage, { "image": image, "numCols": imageGroup.length })}`)} </div>`)} </div> </article> ${renderComponent($$result2, "TestimonialQuote", $$TestimonialQuote, {})} <section class="mx-auto mt-12 px-4 md:mt-16 md:max-w-5xl"> <h3 class="h2 text-center">Más trabajos</h3> ${renderComponent($$result2, "PortfolioGrid", $$PortfolioGrid, { "portfolios": otherPortfolios, "noTransitions": true })} </section> ${renderComponent($$result2, "Contact", $$Contact, { "class": "mt-12" })} ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/layouts/PortfolioLayout.astro", "self");

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
async function getStaticPaths() {
  const portfolios = await getCollection("portfolios", ({ data }) => {
    return data.draft !== true;
  });
  return portfolios.map((portfolio) => ({
    params: { slug: portfolio.id },
    props: portfolio
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const portfolio = Astro2.props;
  const { Content } = await renderEntry(portfolio);
  return renderTemplate`${renderComponent($$result, "PortfolioLayout", $$PortfolioLayout, { "portfolio": portfolio }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/portfolio/[...slug].astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/portfolio/[...slug].astro";
const $$url = "/portfolio/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
