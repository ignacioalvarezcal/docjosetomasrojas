// astro.config.mjs
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon"; // https://www.astroicon.dev/guides/upgrade/v1/
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	// CAMBIO 2: estático por defecto (CDN, óptimo para CWV).
	// El adaptador Vercel se mantiene para habilitar rutas serverless
	// puntuales (Dentalink) con `export const prerender = false`.
	output: "static",
	adapter: vercel({
		// Descarga la optimización de imágenes al CDN de Vercel.
		// Mejora LCP y reduce el tiempo de build. (Opcional, recomendado)
		imageService: true,
	}),

	// CAMBIO 1: dominio real de producción.
	// Base de canonical, sitemap y Open Graph.
	site: "https://docjosetomasrojas.cl",

	integrations: [
		AutoImport({
			imports: ["@components/Admonition/Admonition.astro"],
		}),
		mdx(),
		icon({
			include: {
				tabler: [
					"bulb",
					"alert-triangle",
					"flame",
					"info-circle",
					"arrow-narrow-left",
					"arrow-narrow-right",
					"menu-2",
					"x",
					"chevron-down",
					"category",
					"calendar-event",
				],
			},
		}),

		// CAMBIO 3: sitemap con metadatos y filtro de utilitarios.
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(),
			filter: (page) =>
				!page.includes("/404") &&
				!page.includes("/_") , // excluye utilitarios/borradores
		}),

		compress({
			HTML: true,
			JavaScript: true,
			CSS: false,
			Image: false, // astro:assets / Vercel se encargan
			SVG: false, // astro-icon se encarga
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			assetsInlineLimit: 0,
		},
	},
});