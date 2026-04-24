import { c as createAstro, a as createComponent, b as addAttribute, e as renderTemplate, s as spreadAttributes, u as unescapeHTML, d as renderComponent, v as renderScript, f as renderHead, r as renderSlot, k as renderTransition } from './astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
/* empty css                          */
import { s as siteData, a as $$Nav, b as $$Footer } from './Nav_kO2Jnzzc.mjs';
import { c as getImage } from './_astro_assets_CguaQxJb.mjs';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$b = createAstro("https://horizon.cosmicthemes.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$a = createAstro("https://horizon.cosmicthemes.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$9 = createAstro("https://horizon.cosmicthemes.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$8 = createAstro("https://horizon.cosmicthemes.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$7 = createAstro("https://horizon.cosmicthemes.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$6 = createAstro("https://horizon.cosmicthemes.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$5 = createAstro("https://horizon.cosmicthemes.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$4 = createAstro("https://horizon.cosmicthemes.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$3 = createAstro("https://horizon.cosmicthemes.com");
const $$Seo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title = "general", description, image, noindex = false } = Astro2.props;
  let optimizedImage;
  const canonicalUrl = new URL(Astro2.url.pathname, Astro2.site);
  if (image) {
    optimizedImage = await getImage({
      src: image,
      format: "webp",
      quality: "high",
      width: 1200
    });
  }
  function trimEndSlash(str) {
    if (str[str.length - 1] === "/") {
      return str.slice(0, -1);
    } else {
      return str;
    }
  }
  const imageUrl = trimEndSlash(Astro2.site?.toString() || "") + (optimizedImage?.src || siteData.defaultImage.src);
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalUrl.toString(), "openGraph": {
    basic: {
      title,
      type: "website",
      image: imageUrl,
      url: canonicalUrl.toString()
    },
    optional: {
      description,
      siteName: siteData.title
    },
    image: {
      type: "image/webp",
      width: optimizedImage?.attributes.width || "1200",
      height: optimizedImage?.attributes.height || "800",
      alt: title
    }
  }, "twitter": {
    site: "@" + siteData.author.twitter,
    creator: "@" + siteData.author.twitter,
    card: "summary_large_image",
    title,
    description,
    image: imageUrl
  }, "noindex": noindex, "nofollow": noindex })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Seo/Seo.astro", void 0);

const $$Astro$2 = createAstro("https://horizon.cosmicthemes.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/node_modules/astro/components/ClientRouter.astro", void 0);

const CinzelDecorative = "/_astro/cinzel-decorative-latin-400-normal.C3uAaiWr.woff2";

const PlayfairDisplayVariable = "/_astro/playfair-display-latin-wght-normal.BGlevZWC.woff2";

const RalewayVariable = "/_astro/raleway-latin-wght-normal.B0Bc4KU0.woff2";

const WorkSansVariable = "/_astro/work-sans-latin-wght-normal.CkJCGd27.woff2";

const $$Astro$1 = createAstro("https://horizon.cosmicthemes.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { type = "general", title, description, image, noindex = false } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width" initial-scale="1.0"><!-- local font preload for better performance when not using ClientRouter --><link rel="preload"${addAttribute(WorkSansVariable, "href")} as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload"${addAttribute(RalewayVariable, "href")} as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload"${addAttribute(PlayfairDisplayVariable, "href")} as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload"${addAttribute(CinzelDecorative, "href")} as="font" type="font/woff2" crossorigin="anonymous"><!-- Favicons. Generated from https://realfavicongenerator.net/ --><link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg"><link rel="shortcut icon" href="/favicons/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="manifest" href="/favicons/site.webmanifest"><!-- other --><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml">${renderComponent($$result, "Seo", $$Seo, { "type": type, "title": title, "description": description, "image": image, "noindex": noindex })}<!-- no fallback as I saw issues with firefox fallback -->${renderTemplate`${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "none" })}`}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/layouts/BaseHead.astro", void 0);

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    type = "general",
    navStartStyle = "initial",
    title,
    description,
    heroImage,
    noindex = false
  } = Astro2.props;
  return renderTemplate`<html lang="en"${addAttribute(renderTransition($$result, "tyfwoq7n", "fade", ""), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">${renderComponent($$result, "BaseHead", $$BaseHead, { "type": type, "title": title, "description": description, "image": heroImage ? heroImage : void 0, "noindex": noindex })}${renderHead()}</head> <body id="body" class="bg-base-50 text-base-900"> <div class="min-h-[100lvh]"> ${renderComponent($$result, "Nav", $$Nav, { "startStyle": navStartStyle })} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/layouts/BaseLayout.astro", "self");

export { $$BaseLayout as $ };
