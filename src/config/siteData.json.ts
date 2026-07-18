export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		site: string; // used for twitter cards when sharing a blog post on twitter
	};
	contact: {
		email: string;
		address: string;
	};
	// Datos de agendamiento y contacto directo (centralizados).
	// Cambia el link de Dentalink o el WhatsApp AQUÍ y se actualiza en todo el sitio.
	booking: {
		dentalinkUrl: string; // Link de Agenda Online de Dentalink
		whatsappNumber: string; // Formato internacional SIN "+", ni espacios. Ej: 56912345678
		whatsappMessage: string; // Mensaje pre-cargado al abrir el chat
	};
	defaultImage: {
		src: string;
		alt: string;
	};
	mainNavLinks: {
		name: string;
		href: string;
		subMenu?: {
			name: string;
			href: string;
		}[];
	}[];
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Dr. Jose Tomás Rojas Vera",
	// Your website's title and description (meta fields)
	title: "Dr. José Tomás Rojas Vera - Implantología y Odontología en Providencia",
	description:
		"Especialista en implantología y odontología general. Recupera tu sonrisa con la mejor atención en Providencia, Santiago de Chile.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Ignacio Álvarez",
		email: "ignacioaalvarezc@gmail.com",
		site: "https://isoft.cl", // used for twitter cards when sharing a blog post on twitter
	},

	// Contact information
	contact: {
		email: "joseto.rojas@gmail.com",
		address: "Hernando de Aguirre 162, of 1302, Providencia, Santiago",
	},

	// === AGENDAMIENTO Y CONTACTO DIRECTO ===
	booking: {
		// Link de Agenda Online de Dentalink (agendamiento automático, sin API)
		dentalinkUrl: "https://ff.healthatom.io/6m5J5q",
		// WhatsApp del doctor. Formato internacional SIN "+". Chile = 56 + 9 + número.
		// ⚠️ REEMPLAZA por el número real del doctor:
		whatsappNumber: "56992076080",
		whatsappMessage:
			"Hola Dr. Rojas, me gustaría hacer una consulta sobre una evaluación dental.",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "@assets/images/hero-bg-min.jpg", // SOLUCIÓN TEMPORAL
		alt: "Clínica Dental Dr. José Tomás Rojas Vera en Providencia, Santiago",
	},

	// Main navigation links
	mainNavLinks: [
		{ name: "INICIO", href: "/" },
		{ name: "TRABAJOS", href: "/portfolios/" },
		{ name: "VALORES", href: "/#pricing" },
		{
			name: "PAGINAS",
			href: "#",
			// sub-menu items
			subMenu: [],
		},
	],
};

export default siteData;