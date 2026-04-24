import { a as createComponent, e as renderTemplate, v as renderScript, b as addAttribute, m as maybeRenderHead, c as createAstro, d as renderComponent } from '../chunks/astro/server_BHuz-xO5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { s as siteData } from '../chunks/Nav_kO2Jnzzc.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DP1lnzhf.mjs';
export { renderers } from '../renderers.mjs';

const heroImageOne$1 = new Proxy({"src":"/_astro/JoSlide1.BgRykWnV.png","width":6871,"height":3686,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/hero-slide/JoSlide1.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="hero"', ' data-astro-cid-a42nmg7r> <div class="hero-content" id="heroContent" data-astro-cid-a42nmg7r> <h1 data-astro-cid-a42nmg7r>Dr. Jos\xE9 Tom\xE1s Rojas V.</h1> <h2 data-astro-cid-a42nmg7r>Implantolog\xEDa Buco Maxilofacial</h2> <div class="divider" data-astro-cid-a42nmg7r></div> </div> </section> ', ` <!--
<!DOCTYPE html >

<section
  id="hero"
  class="relative z-10 flex min-h-[100svh] w-full items-center bg-cover bg-center bg-fixed"
  style={\`
    background-image: url(\${heroImageMobileOne.src});
    @media (min-width: 640px) {
      background-image: url(\${heroImageOne.src});
    }
  \`}
>
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="site-container relative w-full text-center"> {/* Quitado md:text-left para mantener centrado en todos los tama\xF1os */}
    <div class="text-base-50 flex-col mx-auto"> {/* Cambiado mr-auto por mx-auto para centrar */}
      <h3 class="font-open-sans text-2xl font-semibold tracking-tight drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] sm:text-4xl md:text-6xl md:leading-tight md:whitespace-nowrap will-reveal">
        Implantolog\xEDa Buco Maxilofacial
      </h3>
    </div>
  </div>
</section>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de revelado al cargar
    const revealables = document.querySelectorAll('#hero .will-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealables.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
  });
<\/script>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(14px) scale(0.995);
    transition: opacity 600ms ease, transform 700ms ease;
    will-change: opacity, transform;
  }
  .in-view {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
</style>

-->`], ["", '<section class="hero"', ' data-astro-cid-a42nmg7r> <div class="hero-content" id="heroContent" data-astro-cid-a42nmg7r> <h1 data-astro-cid-a42nmg7r>Dr. Jos\xE9 Tom\xE1s Rojas V.</h1> <h2 data-astro-cid-a42nmg7r>Implantolog\xEDa Buco Maxilofacial</h2> <div class="divider" data-astro-cid-a42nmg7r></div> </div> </section> ', ` <!--
<!DOCTYPE html >

<section
  id="hero"
  class="relative z-10 flex min-h-[100svh] w-full items-center bg-cover bg-center bg-fixed"
  style={\\\`
    background-image: url(\\\${heroImageMobileOne.src});
    @media (min-width: 640px) {
      background-image: url(\\\${heroImageOne.src});
    }
  \\\`}
>
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="site-container relative w-full text-center"> {/* Quitado md:text-left para mantener centrado en todos los tama\xF1os */}
    <div class="text-base-50 flex-col mx-auto"> {/* Cambiado mr-auto por mx-auto para centrar */}
      <h3 class="font-open-sans text-2xl font-semibold tracking-tight drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] sm:text-4xl md:text-6xl md:leading-tight md:whitespace-nowrap will-reveal">
        Implantolog\xEDa Buco Maxilofacial
      </h3>
    </div>
  </div>
</section>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de revelado al cargar
    const revealables = document.querySelectorAll('#hero .will-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealables.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
  });
<\/script>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(14px) scale(0.995);
    transition: opacity 600ms ease, transform 700ms ease;
    will-change: opacity, transform;
  }
  .in-view {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
</style>

-->`])), maybeRenderHead(), addAttribute(`
    background-image: url(${heroImageOne$1.src});
    @media (min-width: 640px) {
      background-image: url(${heroImageOne$1.src});
    }
  `, "style"), renderScript($$result, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Hero.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Hero.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section style="background:var(--white);" class="section" data-astro-cid-4cbyfjnk> <div class="container" style="font-size:1.05rem; line-height:1.8;" data-astro-cid-4cbyfjnk> <p class="text" data-astro-cid-4cbyfjnk>
Esta página fue creada para compartir mi visión de la odontología, mostrar el trabajo que
			realizo y ofrecer información clara y confiable sobre salud oral.
</p> <p style="margin-top:1.5rem;" data-astro-cid-4cbyfjnk>
Aquí podrás encontrar casos clínicos reales, contenidos educativos y conocer cómo abordo cada
			tratamiento, siempre desde un enfoque cercano, profesional y personalizado.
</p> <p style="margin-top:1.5rem;" data-astro-cid-4cbyfjnk>
Te invito a recorrer este espacio, pensado para quienes valoran una atención consciente,
			basada en la confianza y en la evidencia clínica.
</p> <div style="margin-top:2.5rem;" data-astro-cid-4cbyfjnk><a href="/conoceme-mas" class="btn" data-astro-cid-4cbyfjnk>Conóceme más</a></div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Welcome.astro", void 0);

const heroImageOne = new Proxy({"src":"/_astro/cortada.DoP1dh9n.jpg","width":3712,"height":5568,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/hero-slide/cortada.jpg";
							}
							
							return target[name];
						}
					});

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-me" class="section" style="background:var(--primary);" data-astro-cid-vlyggmgm> <div class="grid-2 container" data-astro-cid-vlyggmgm> <div data-astro-cid-vlyggmgm> <h2 class="section-title" data-astro-cid-vlyggmgm>Sobre mí</h2> <p style="line-height:1.8; margin-bottom:1.2rem;" data-astro-cid-vlyggmgm>
Soy el Dr. José Tomás Rojas Vera, Cirujano Dentista con enfoque en implantología y
				rehabilitación oral. Mi forma de trabajo se basa en una planificación cuidadosa, la
				precisión clínica y una relación de confianza con cada paciente.
</p> <p style="line-height:1.8;" data-astro-cid-vlyggmgm>
Creo en una odontología que acompaña, explica y propone soluciones pensadas para el largo
				plazo, integrando ciencia, experiencia y criterio profesional.
</p> <div style="margin-top:2rem;" data-astro-cid-vlyggmgm> <a href="/conoceme-mas" style="color:var(--bg-light); text-decoration:none; font-weight:500;" data-astro-cid-vlyggmgm>Ver más →</a> </div> </div> <div class="foto-container" data-astro-cid-vlyggmgm> <img${addAttribute(heroImageOne.src, "src")} alt="Foto del Dr. José Tomás Rojas" data-astro-cid-vlyggmgm> </div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/About-me.astro", void 0);

const casoTres = new Proxy({"src":"/_astro/caso1.GZDP-qOX.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/casos/caso1.png";
							}
							
							return target[name];
						}
					});

const casoDos = new Proxy({"src":"/_astro/caso2.BvJmsn-b.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/casos/caso2.png";
							}
							
							return target[name];
						}
					});

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cases" class="section" style="background:#ffffff;" data-astro-cid-qmchnktq> <div class="container" data-astro-cid-qmchnktq> <h2 class="section-title" data-astro-cid-qmchnktq>Casos clínicos destacados</h2> <div class="grid-3" data-astro-cid-qmchnktq> <div class="card" data-astro-cid-qmchnktq> <img${addAttribute(casoTres.src, "src")} alt="Implantes en zona estética" data-astro-cid-qmchnktq><div class="card-body" data-astro-cid-qmchnktq>
Implantes en zona estética
</div> </div> <div class="card" data-astro-cid-qmchnktq> <img${addAttribute(casoDos.src, "src")} alt="Rehabilitación oral completa" data-astro-cid-qmchnktq><div class="card-body" data-astro-cid-qmchnktq>
Rehabilitación oral completa
</div> </div> <div class="card" data-astro-cid-qmchnktq> <img${addAttribute(casoTres.src, "src")} alt="Cirugía oral" data-astro-cid-qmchnktq><div class="card-body" data-astro-cid-qmchnktq>Cirugía oral</div> </div> </div> <div style="margin-top:3rem;" data-astro-cid-qmchnktq> <a href="/casos-clinicos" class="btn" data-astro-cid-qmchnktq>Ver todos los casos clínicos</a> </div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Testimonials.astro", void 0);

const $$Astro = createAstro("https://horizon.cosmicthemes.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="services-section" data-astro-cid-yj4vnjpu> <div class="services-container" data-astro-cid-yj4vnjpu> <!-- Header --> <div class="services-header" data-astro-cid-yj4vnjpu> <span class="services-label" data-astro-cid-yj4vnjpu>Nuestros servicios</span> <h2 class="services-title" data-astro-cid-yj4vnjpu>Excelencia en cada tratamiento</h2> <p class="services-subtitle" data-astro-cid-yj4vnjpu>
Atención especializada con los más altos estándares de calidad y tecnología de vanguardia
</p> </div> <!-- Cards Grid --> <div class="services-grid" id="servicesGrid" data-astro-cid-yj4vnjpu> <!-- Card 1 --> <div class="service-card" data-astro-cid-yj4vnjpu> <div class="service-icon-wrapper" data-astro-cid-yj4vnjpu> <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yj4vnjpu> <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" data-astro-cid-yj4vnjpu></path> <circle cx="12" cy="12" r="3" data-astro-cid-yj4vnjpu></circle> </svg> </div> <h3 class="service-name" data-astro-cid-yj4vnjpu>Implantología Buco Maxilofacial</h3> <div class="service-divider" data-astro-cid-yj4vnjpu></div> <p class="service-description" data-astro-cid-yj4vnjpu>
Restauración funcional y estética con implantes de última generación
</p> </div> <!-- Card 2 --> <div class="service-card" data-astro-cid-yj4vnjpu> <div class="service-icon-wrapper" data-astro-cid-yj4vnjpu> <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yj4vnjpu> <path d="M9 12l2 2 4-4" data-astro-cid-yj4vnjpu></path> <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" data-astro-cid-yj4vnjpu></path> </svg> </div> <h3 class="service-name" data-astro-cid-yj4vnjpu>Rehabilitación oral</h3> <div class="service-divider" data-astro-cid-yj4vnjpu></div> <p class="service-description" data-astro-cid-yj4vnjpu>Recuperación integral de la función y armonía dental</p> </div> <!-- Card 3 --> <div class="service-card" data-astro-cid-yj4vnjpu> <div class="service-icon-wrapper" data-astro-cid-yj4vnjpu> <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yj4vnjpu> <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-astro-cid-yj4vnjpu></path> </svg> </div> <h3 class="service-name" data-astro-cid-yj4vnjpu>Cirugía oral</h3> <div class="service-divider" data-astro-cid-yj4vnjpu></div> <p class="service-description" data-astro-cid-yj4vnjpu>
Procedimientos quirúrgicos seguros con técnica de precisión
</p> </div> <!-- Card 4 --> <div class="service-card" data-astro-cid-yj4vnjpu> <div class="service-icon-wrapper" data-astro-cid-yj4vnjpu> <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yj4vnjpu> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" data-astro-cid-yj4vnjpu></path> <rect x="8" y="2" width="8" height="4" rx="1" ry="1" data-astro-cid-yj4vnjpu></rect> <path d="M9 14l2 2 4-4" data-astro-cid-yj4vnjpu></path> </svg> </div> <h3 class="service-name" data-astro-cid-yj4vnjpu>Evaluación integral</h3> <div class="service-divider" data-astro-cid-yj4vnjpu></div> <p class="service-description" data-astro-cid-yj4vnjpu>
Diagnóstico completo para un plan de tratamiento personalizado
</p> </div> </div> <!-- CTA --> <div class="services-cta" id="servicesCta" data-astro-cid-yj4vnjpu> <a href="/servicios" class="services-btn" data-astro-cid-yj4vnjpu>
Ver todos los servicios
<svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yj4vnjpu> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-yj4vnjpu></path> </svg> </a> </div> </div> </section> ${renderScript($$result, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Services.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Services.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="blog" style="background:#ffffff;" data-astro-cid-kp7lqlmq> <div class="container" data-astro-cid-kp7lqlmq> <h2 class="section-title" data-astro-cid-kp7lqlmq>Educación dental</h2> <div class="grid-3" data-astro-cid-kp7lqlmq> <div class="card" data-astro-cid-kp7lqlmq><div style="height:200px; background:#ddd;" data-astro-cid-kp7lqlmq></div><div class="card-body" data-astro-cid-kp7lqlmq>¿Qué es un implante dental?</div></div> <div class="card" data-astro-cid-kp7lqlmq><div style="height:200px; background:#ddd;" data-astro-cid-kp7lqlmq></div><div class="card-body" data-astro-cid-kp7lqlmq>¿Qué es una prótesis híbrida?</div></div> <div class="card" data-astro-cid-kp7lqlmq><div style="height:200px; background:#ddd;" data-astro-cid-kp7lqlmq></div><div class="card-body" data-astro-cid-kp7lqlmq>Cuidados post cirugía</div></div> </div> <div style="margin-top:3rem;" data-astro-cid-kp7lqlmq><a href="#" class="btn" data-astro-cid-kp7lqlmq>Explorar el blog</a></div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Blog.astro", void 0);

const instaProfile = new Proxy({"src":"/_astro/insta-profile.AWFla3EI.jpg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/hero-slide/insta-profile.jpg";
							}
							
							return target[name];
						}
					});

const reels1Image = new Proxy({"src":"/_astro/reels1.Dc-wNLSO.jpg","width":1868,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/reels/reels1.jpg";
							}
							
							return target[name];
						}
					});

const reels2Image = new Proxy({"src":"/_astro/reels2.DErWsFpH.png","width":486,"height":648,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/reels/reels2.png";
							}
							
							return target[name];
						}
					});

const reels3Image = new Proxy({"src":"/_astro/reels3.CIhJ8jJu.png","width":647,"height":604,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/reels/reels3.png";
							}
							
							return target[name];
						}
					});

const reels4Image = new Proxy({"src":"/_astro/reels4.DsorMYau.png","width":483,"height":644,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/reels/reels4.png";
							}
							
							return target[name];
						}
					});

const $$Reels = createComponent(($$result, $$props, $$slots) => {
  const instagramPosts = [
    {
      id: "post1",
      url: "https://www.instagram.com/p/DRcWUy6EfYr/",
      image: reels1Image.src,
      alt: "Post cl\xEDnico del Dr. Jos\xE9 Tom\xE1s Rojas"
    },
    {
      id: "post2",
      url: "https://www.instagram.com/p/DQrtn5SgLBP/",
      image: reels2Image.src,
      alt: "Caso cl\xEDnico de implantolog\xEDa"
    },
    {
      id: "post3",
      url: "https://www.instagram.com/p/DSLt0ghkZR-/",
      image: reels3Image.src,
      alt: "Tratamiento de cirug\xEDa maxilofacial"
    },
    {
      id: "post4",
      url: "https://www.instagram.com/p/DNvbrrfXKox/",
      image: reels4Image.src,
      alt: "Procedimiento de implante dental"
    }
  ];
  const instagramProfileUrl = "https://instagram.com/docjosetomasrojas";
  return renderTemplate`${maybeRenderHead()}<section class="insta-section" data-astro-cid-aofjkcmf> <div class="insta-container" data-astro-cid-aofjkcmf> <div class="insta-section-header" data-astro-cid-aofjkcmf> <h2 class="insta-section-title" data-astro-cid-aofjkcmf>Presencia en redes</h2> <p class="insta-section-subtitle" data-astro-cid-aofjkcmf>
Comparto contenido clínico, educativo y casos reales para ayudarte a comprender mejor los
				tratamientos y el cuidado de tu salud oral.
</p> </div> <div class="insta-grid" data-astro-cid-aofjkcmf> ${instagramPosts.map((post) => renderTemplate`<a${addAttribute(post.url, "href")} target="_blank" rel="noopener noreferrer" class="insta-card"${addAttribute(post.id, "id")} data-astro-cid-aofjkcmf>  <div class="insta-card-header" data-astro-cid-aofjkcmf> <img${addAttribute(instaProfile.src, "src")} alt="Dr. José Tomás Rojas V." class="insta-card-avatar" data-astro-cid-aofjkcmf> <div class="insta-card-user" data-astro-cid-aofjkcmf> <div class="insta-card-username" data-astro-cid-aofjkcmf>docjosetomasrojas</div> <div class="insta-card-badge" data-astro-cid-aofjkcmf>Publicación</div> </div>  <svg class="insta-card-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-aofjkcmf> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-aofjkcmf></rect> <circle cx="12" cy="12" r="5" data-astro-cid-aofjkcmf></circle> <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" data-astro-cid-aofjkcmf></circle> </svg> </div>  <div class="insta-card-image-wrapper" data-astro-cid-aofjkcmf> <img${addAttribute(post.image, "src")}${addAttribute(post.alt, "alt")} class="insta-card-image" loading="lazy" data-astro-cid-aofjkcmf> <div class="insta-card-overlay" data-astro-cid-aofjkcmf> <div class="insta-overlay-icon" data-astro-cid-aofjkcmf>  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-aofjkcmf> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-aofjkcmf></path> <polyline points="15 3 21 3 21 9" data-astro-cid-aofjkcmf></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-aofjkcmf></line> </svg> </div> </div> </div>  <div class="insta-card-footer" data-astro-cid-aofjkcmf> <div class="insta-card-cta" data-astro-cid-aofjkcmf>
Ver en Instagram
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-aofjkcmf> <polyline points="9 18 15 12 9 6" data-astro-cid-aofjkcmf></polyline> </svg> </div> </div> </a>`)} </div> <div class="insta-cta-wrapper" data-astro-cid-aofjkcmf> <a${addAttribute(instagramProfileUrl, "href")} target="_blank" rel="noopener noreferrer" class="insta-cta-btn" data-astro-cid-aofjkcmf> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-aofjkcmf> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-aofjkcmf></rect> <circle cx="12" cy="12" r="5" data-astro-cid-aofjkcmf></circle> <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" data-astro-cid-aofjkcmf></circle> </svg>
Ver más en Instagram
</a> </div> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Reels.astro", void 0);

const $$Phrase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- FRASE CLAVE -->${maybeRenderHead()}<section style="background:#ffffff; padding:4.5rem 8vw;" data-astro-cid-7qsgvgl3> <div class="container" style="text-align:center;" data-astro-cid-7qsgvgl3> <p style="font-family:'Playfair Display',serif; font-size:1.6rem; color:var(--heading); line-height:1.5; max-width:900px; margin:0 auto;" data-astro-cid-7qsgvgl3>
“Cada tratamiento comienza con una buena evaluación y una decisión bien informada.”
</p> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Phrase.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section style="background:var(--bg-light); text-align:center;" data-astro-cid-whwqgfaf> <div class="container" data-astro-cid-whwqgfaf> <h2 class="section-title" data-astro-cid-whwqgfaf>Agenda tu evaluación</h2> <p style="max-width:700px; margin:0 auto 3rem auto; line-height:1.8;" data-astro-cid-whwqgfaf>
Si estás considerando un tratamiento implantológico, una rehabilitación oral o necesitas una
			evaluación profesional, puedes agendar directamente o contactarme para resolver tus dudas.
</p> <a href="/agendar" class="btn" data-astro-cid-whwqgfaf>Agendar hora</a> </div> </section>`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/components/Hero/Cta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": siteData.title, "description": siteData.description, "navStartStyle": "initial" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "Reels", $$Reels, {})} ${renderComponent($$result2, "Phrase", $$Phrase, {})} ${renderComponent($$result2, "Cta", $$Cta, {})}  ` })}`;
}, "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
