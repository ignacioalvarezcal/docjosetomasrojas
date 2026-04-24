import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DP1lnzhf.mjs';
import { r as renderEntry, g as getCollection } from '../chunks/_astro_content_CHCG-VF3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
async function getStaticPaths() {
  const otherPages = await getCollection(
    "otherPages",
    ({ data }) => {
      return data.draft !== true;
    }
  );
  return otherPages.map((page) => ({
    params: { page: page.id },
    props: page
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const page = Astro2.props;
  let Content = () => null;
  let title = "";
  let description = "";
  if (page) {
    const rendered = await renderEntry(page);
    Content = rendered.Content;
    title = page.data?.title ?? page.id ?? "";
    description = page.data?.description ?? "";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 pt-24 md:pt-36"> <h1 class="h1 description text-center"> ${title} </h1> <div class="text-base-content markdown-content mt-8 max-w-none text-sm md:mt-12 md:px-8 md:text-base"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/[page].astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/[page].astro";
const $$url = "/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
