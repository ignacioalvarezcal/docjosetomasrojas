import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

// parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	js.configs.recommended,
	tseslint.configs.recommended,

	{
		plugins: {
			prettier: prettier,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"prettier/prettier": "off",
			"simple-import-sort/imports": "warn",
			"simple-import-sort/exports": "warn",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/ban-ts-comment": "off",
		},
	},

	astro.configs.recommended,
	astro.configs["jsx-a11y-recommended"],
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"astro/jsx-a11y/anchor-is-valid": "off",
			"@typescript-eslint/no-unused-expressions": "off",
		},
	},

	{
		ignores: [
			"dist/**",
			"**/*.d.ts",
			".tours/",
			"src/docs/scripts/**",
			"scripts/",
			"public/pagefind/",
			".github/",
			".netlify/",
			".changeset/",
		],
	},
]);