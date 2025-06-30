export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "INICIO",
		link: "/",
	},
	{
		text: "TRABAJOS",
		link: "/portfolios/",
	},
	{
		text: "VALORES",
		link: "/#pricing",
	},
	{
		text: "PAGINAS",
		dropdown: [
			{
				text: "Landing One (Home)",
				link: "/landing-1/",
			},
			{
				text: "Landing Two",
				link: "/landing-2/",
			},
			{
				text: "Contact",
				link: "/contact/",
			},
			{
				text: "Blog",
				link: "/blog/",
			},
			{
				text: "Style Guide",
				link: "/style-guide/",
			},
		],
	},
];

export default navConfig;
