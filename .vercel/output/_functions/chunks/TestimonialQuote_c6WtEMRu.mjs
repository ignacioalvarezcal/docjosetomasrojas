import { a as createComponent, m as maybeRenderHead, e as renderTemplate, c as createAstro, b as addAttribute, d as renderComponent, k as renderTransition } from './astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Button } from './Button_BXITQ2cS.mjs';
import './internal_BrB3KVH6.mjs';
import { $ as $$Image } from './_astro_assets_CguaQxJb.mjs';
/* empty css                          */
import { $ as $$Icon } from './Nav_kO2Jnzzc.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="relative h-[40rem] bg-cover bg-center bg-fixed" style="background-image: url('/images/1932.jpg');"> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"> <h2 class="h1 font-heading-1 text-pretty">Agenda tu Evaluación</h2> <p class="mt-25 max-w-2xl text-lg md:text-xl">
¿Listo para comenzar? Agenda tu evaluación en el siguiente enlace.
</p> <div class="mt-4 flex justify-center"> <a href="/contact-me" class="mt-6 group relative inline-flex items-center gap-2 rounded-full 
					bg-gradient-to-r from-primary-600 to-primary-800 
					px-6 py-2.5 text-base font-semibold text-white 
					shadow-lg shadow-primary-500/30 
					transition-all duration-300 
					hover:from-primary-700 hover:to-primary-900 
					hover:-translate-y-[1px] hover:shadow-xl hover:shadow-primary-500/40 
					active:translate-y-0 
					focus:outline-none focus:ring-4 focus:ring-primary-400/50"> <span>Agendar ahora</span> <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span> </a> </div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Contact/Contact.astro", void 0);

const $$Astro$1 = createAstro("https://horizon.cosmicthemes.com");
const $$PortfolioCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioCard;
  const { portfolio, direction, noTransitions = false } = Astro2.props;
  const { title, description, heroImage } = portfolio.data;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "grid gap-4",
    {
      "md:grid-cols-2": direction === "horizontal"
    }
  ], "class:list")}> <a${addAttribute(`/portfolio/${portfolio.id}`, "href")} class="aspect-square overflow-hidden"> ${noTransitions && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": title, "width": 450, "densities": [1.5, 2, 3], "class": "h-auto min-h-full w-full min-w-full object-cover" })}`} ${!noTransitions && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": title, "width": 450, "densities": [1.5, 2, 3], "class": "h-auto min-h-full w-full min-w-full object-cover", "data-astro-transition-scope": renderTransition($$result, "hxdw5cp7", "", `portfolio-image-${portfolio.id}`) })}`} </a> <div class="flex flex-col justify-between gap-2"> <div> <h3 class="h3 text-primary-500 tracking-widest">${title}</h3> <p class="mt-4 lg:text-lg">${description}</p> </div> <div class="flex"> ${renderComponent($$result, "Button", $$Button, { "variant": "ghost", "arrow": "right", "href": `/portfolio/${portfolio.id}`, "class": "pl-0" }, { "default": ($$result2) => renderTemplate`
Ver más
` })} </div> </div> </div>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/PortfolioCard/PortfolioCard.astro", "self");

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
const $$PortfolioGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioGrid;
  const { portfolios, noTransitions = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-x-4 gap-y-10 pt-8 md:grid-cols-3 md:pt-12"> ${portfolios.map((portfolio) => renderTemplate`${renderComponent($$result, "PortfolioCard", $$PortfolioCard, { "portfolio": portfolio, "direction": "vertical" })}`)} </div>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Portfolio/PortfolioGrid.astro", void 0);

const $$TestimonialQuote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-base-100 mt-12 py-10 md:mt-16 md:py-16"> <div class="mx-auto flex max-w-6xl items-start gap-2 px-4"> <div> ${renderComponent($$result, "Icon", $$Icon, { "name": "gridicons/quote", "class": "text-primary-200 size-8 -translate-y-4 md:size-20", "aria-hidden": "true" })} </div> <p class="h2 text-primary-600 text-center uppercase">
Atenderme con el dr Jose Tomás fue la mejor decisión que he podido tomar.
</p> <div> ${renderComponent($$result, "Icon", $$Icon, { "name": "gridicons/quote", "class": "text-primary-200 size-8 -translate-y-4 -scale-x-100 md:size-20", "aria-hidden": "true" })} </div> </div> <div class="xs:grid-cols-2 mt-6 grid"> <div class="col-start-2"> <p class="h3 text-primary-600">- Vanessa Riquelme</p> </div> </div> </div>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Testimonials/TestimonialQuote.astro", void 0);

export { $$PortfolioGrid as $, $$TestimonialQuote as a, $$Contact as b };
