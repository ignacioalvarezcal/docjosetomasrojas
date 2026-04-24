import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderSlot, d as renderComponent, e as renderTemplate } from './astro/server_BHuz-xO5.mjs';
import { $ as $$Icon } from './Nav_kO2Jnzzc.mjs';

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    type,
    variant = "primary",
    href,
    arrow = "none",
    onclick,
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`<!-- normal link -->${href && renderTemplate`${maybeRenderHead()}<a${addAttribute([
    className,
    `button group gap-2`,
    {
      "button--primary": variant === "primary"
    },
    {
      "button--secondary": variant === "secondary"
    },
    {
      "button--outline": variant === "outline"
    },
    {
      "button--ghost": variant === "ghost"
    }
  ], "class:list")}${addAttribute(href, "href")}${addAttribute(onclick, "onclick")}${spreadAttributes(rest)}>${arrow === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mynaui/arrow-long-right", "class": "h-[1.4em] w-[1.4em] rotate-180 transition-[transform]", "aria-hidden": "true" })}`}<span>${renderSlot($$result, $$slots["default"])}</span>${arrow === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mynaui/arrow-long-right", "class": "h-[1.4em] w-[1.4em] transition-[transform]", "aria-hidden": "true" })}`}</a>`}<!-- button for "submit" or other -->${!href && renderTemplate`<button${addAttribute([
    className,
    `button group gap-2`,
    {
      "button--primary": variant === "primary"
    },
    {
      "button--secondary": variant === "secondary"
    },
    {
      "button--outline": variant === "outline"
    },
    {
      "button--ghost": variant === "ghost"
    }
  ], "class:list")}${addAttribute(type, "type")}${addAttribute(onclick, "onclick")}${spreadAttributes(rest)}>${arrow === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mynaui/arrow-long-right", "class": "h-[1.4em] w-[1.4em] rotate-180 transition-[transform]", "aria-hidden": "true" })}`}<span>${renderSlot($$result, $$slots["default"])}</span>${arrow === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mynaui/arrow-long-right", "class": "h-[1.4em] w-[1.4em] transition-[transform]", "aria-hidden": "true" })}`}</button>`}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Button/Button.astro", void 0);

export { $$Button as $ };
