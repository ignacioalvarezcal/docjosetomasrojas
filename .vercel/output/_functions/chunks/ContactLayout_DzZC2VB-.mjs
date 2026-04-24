import { c as createAstro, a as createComponent, b as addAttribute, f as renderHead, d as renderComponent, r as renderSlot, e as renderTemplate } from './astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { a as $$Nav, b as $$Footer } from './Nav_kO2Jnzzc.mjs';
/* empty css                          */

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
const $$ContactLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactLayout;
  const { title, description = "Descripci\xF3n por defecto", navStartStyle = "scrolled" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-gray-100">  ${renderComponent($$result, "Nav", $$Nav, { "startStyle": navStartStyle })} <main>  ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/layouts/ContactLayout.astro", void 0);

export { $$ContactLayout as $ };
