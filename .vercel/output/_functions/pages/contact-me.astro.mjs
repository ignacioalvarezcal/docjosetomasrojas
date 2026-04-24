import { a as createComponent, m as maybeRenderHead, e as renderTemplate, d as renderComponent, b as addAttribute } from '../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import { $ as $$ContactLayout } from '../chunks/ContactLayout_DzZC2VB-.mjs';
import 'clsx';
import { s as siteData } from '../chunks/Nav_kO2Jnzzc.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" name="contact form" class="flex h-full flex-col justify-between gap-4"> <input type="hidden" name="form-name" value="contact"> <div> <label for="contact-name" class="font-heading-1 text-lg uppercase">Nombre Completo</label> <input type="text" class="form__input rounded-lg" name="name" id="contact-name" placeholder="Tu nombre y apellido" required> </div> <div class="flex flex-col gap-1"> <label for="contact-email" class="font-heading-1 text-lg uppercase">Email de Contacto</label> <input type="email" class="form__input rounded-lg" name="email" id="contact-email" inputmode="email" placeholder="ejemplo@correo.com" required> </div> <div> <label for="contact-phone" class="font-heading-1 text-lg uppercase">Teléfono</label> <input type="tel" class="form__input rounded-lg" name="phone" id="contact-phone" placeholder="+56 9 1234 5678" required> </div> <div> <label for="contact-message" class="font-heading-1 text-lg uppercase">Motivo de la Consulta</label> <textarea name="message" class="form__input rounded-lg" id="contact-message" rows="4" placeholder="Ej: Quisiera agendar una evaluación para un implante." required></textarea> </div> <div class="mt-8 flex justify-center"> <button type="submit" class="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-sky-500 px-6 py-2.5 text-base font-semibold text-white shadow-[0_8px_18px_-12px_rgba(14,165,233,0.35)] transition-all duration-300 hover:from-cyan-400 hover:via-sky-500 hover:to-sky-600 hover:-translate-y-[1px] hover:shadow-[0_14px_28px_-14px_rgba(14,165,233,0.35)] active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-sky-300/50"> <span>Enviar Solicitud</span> </button> </div> </form>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Forms/ContactForm.astro", void 0);

const $$ContactMe = createComponent(($$result, $$props, $$slots) => {
  const address = siteData.contact.address;
  const gmapsUrl = `https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=${encodeURIComponent(address)}`;
  return renderTemplate`${renderComponent($$result, "ContactLayout", $$ContactLayout, { "title": "Contacto", "description": "Agenda tu evaluaci\xF3n con nosotros." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="contacto" class="scroll-mt-10 bg-white"> <div class="mx-auto max-w-6xl px-4 py-16 md:py-24"> <div class="mb-12 text-center"> <h2 class="h2">Agenda tu Evaluación</h2> <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
¿Listo para comenzar tu tratamiento o tienes alguna pregunta? Completa el formulario y te contactaremos a la brevedad.
</p> </div> <div class="grid gap-12 md:grid-cols-2"> <div class="flex items-center"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> <div class="flex flex-col justify-center space-y-8"> <div class="text-lg"> <p><strong>Email:</strong> ${siteData.contact.email}</p> <p><strong>Dirección:</strong> ${address}</p> </div> <div class="h-72 w-full overflow-hidden rounded-3xl shadow-lg"> <iframe${addAttribute(gmapsUrl, "src")} width="100%" height="100%" style="border:0;"${addAttribute(false, "allowfullscreen")} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación de la clínica"></iframe> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/contact-me.astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/contact-me.astro";
const $$url = "/contact-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ContactMe,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
