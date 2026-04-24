const profileImage = new Proxy({"src":"/_astro/JoSlideMobile2.D3gYvUy4.png","width":3815,"height":7572,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC_EMETEL/Proyectos/DocJoseTomasRojas/docjosetomasrojas/src/assets/images/hero-slide/JoSlideMobile2.png";
							}
							
							return target[name];
						}
					});

export { profileImage as p };
