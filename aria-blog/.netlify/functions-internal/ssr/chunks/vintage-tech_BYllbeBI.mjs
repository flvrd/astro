/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_D2LO3h5O.mjs';

const html = "<p><img src=\"/assets/images/posts/vintage-tech-01.jpg\" alt=\"Vintage Tech\"></p>\n<p><strong>Introduction</strong></p>\n<p>Hey, digital nomads and pixel perfectionists! 🌌 In our quest for the sleekest UIs and the most efficient algorithms, have we forgotten the tactile joy of analog tech? Let’s take a nostalgic trip down memory lane and explore why vintage tech is making a comeback in our hyper-digital age.</p>\n<p><strong>The Allure of Analog</strong></p>\n<ol>\n<li><strong>Tactile Satisfaction</strong>: There’s something undeniably satisfying about the clack of a typewriter or the whir of a rotary phone.</li>\n<li><strong>Digital Detox</strong>: Vintage tech offers a break from the constant pings and notifications of our modern devices.</li>\n<li><strong>Aesthetic Appeal</strong>: Let’s be honest, a vinyl record player just looks cooler than a Bluetooth speaker.</li>\n</ol>\n<p><img src=\"/assets/images/posts/vintage-tech-02.jpg\" alt=\"Vintage Tech\"></p>\n<blockquote>\n<p>”In our rush to the future, we often forget the beauty of the past.” - Yours Truly</p>\n</blockquote>\n<p><strong>Why Developers and Designers are Embracing the Past</strong></p>\n<ul>\n<li><strong>Inspiration</strong>: Old tech brings a fresh perspective, sparking creativity in unexpected ways.</li>\n<li><strong>Mindfulness</strong>: Analog devices, devoid of distractions, promote a more focused and intentional work ethic.</li>\n<li><strong>Nostalgia</strong>: For those of us who grew up in the 90s, there’s a comforting familiarity in the tech of yesteryears.</li>\n</ul>\n<p><strong>Conclusion</strong></p>\n<p>So, next time you’re stuck in a coding rut or facing designer’s block, maybe swap out the MacBook for a typewriter, or trade Spotify for a vinyl spin. Sometimes, the past holds the key to unlocking our future creativity. Stay groovy and keep designing outside the box! 🚀</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"The Revival of Vintage Tech","description":"Embark on a nostalgic journey exploring the charm of vintage tech and its unexpected resurgence among modern developers and designers.","dateFormatted":"July 27th, 2023"};
				const file = "/Users/rjohnson/Documents/astro/aria-blog/src/pages/post/vintage-tech.md";
				const url = "/post/vintage-tech";
				function rawContent() {
					return "\n![Vintage Tech](/assets/images/posts/vintage-tech-01.jpg)\n\n**Introduction**\n\nHey, digital nomads and pixel perfectionists! 🌌 In our quest for the sleekest UIs and the most efficient algorithms, have we forgotten the tactile joy of analog tech? Let's take a nostalgic trip down memory lane and explore why vintage tech is making a comeback in our hyper-digital age.\n\n**The Allure of Analog**\n\n1. **Tactile Satisfaction**: There's something undeniably satisfying about the clack of a typewriter or the whir of a rotary phone.\n2. **Digital Detox**: Vintage tech offers a break from the constant pings and notifications of our modern devices.\n3. **Aesthetic Appeal**: Let's be honest, a vinyl record player just looks cooler than a Bluetooth speaker.\n\n![Vintage Tech](/assets/images/posts/vintage-tech-02.jpg)\n\n> \"In our rush to the future, we often forget the beauty of the past.\" - Yours Truly\n\n**Why Developers and Designers are Embracing the Past**\n\n- **Inspiration**: Old tech brings a fresh perspective, sparking creativity in unexpected ways.\n- **Mindfulness**: Analog devices, devoid of distractions, promote a more focused and intentional work ethic.\n- **Nostalgia**: For those of us who grew up in the 90s, there's a comforting familiarity in the tech of yesteryears.\n\n**Conclusion**\n\nSo, next time you're stuck in a coding rut or facing designer's block, maybe swap out the MacBook for a typewriter, or trade Spotify for a vinyl spin. Sometimes, the past holds the key to unlocking our future creativity. Stay groovy and keep designing outside the box! 🚀";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
