/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_D2LO3h5O.mjs';

const html = "<p><img src=\"/assets/images/posts/perfect-coffee.jpg\" alt=\"Coffee and Code\"></p>\n<p><strong>Introduction</strong></p>\n<p>Greetings, fellow keyboard warriors and design dreamers! ☕️ Ever wondered why coffee shops are the unofficial office of developers and designers worldwide? Let’s dive deep into the aromatic world of coffee and its symbiotic relationship with our craft.</p>\n<p><strong>Why Coffee and Coding Go Hand in Hand</strong></p>\n<ol>\n<li><strong>Caffeine Boost</strong>: That gentle nudge of alertness can be the difference between a bug and a breakthrough.</li>\n<li><strong>Ritualistic Zen</strong>: The process of brewing, the aroma, the first sip—it’s a ritual that centers the mind.</li>\n<li><strong>Ambient Vibes</strong>: The soft hum of conversations, the clinking of cups—it’s the perfect white noise for concentration.</li>\n</ol>\n<p><img src=\"/assets/images/posts/pour-over.jpg\" alt=\"Pour Over\"></p>\n<blockquote>\n<p>”Coffee is the common man’s gold, and like gold, it brings to every person the feeling of luxury and nobility.” - Sheik-Abd-al-Kadir</p>\n</blockquote>\n<p><strong>Crafting the Perfect Coffee for Coding Sessions</strong></p>\n<ul>\n<li><strong>Beans Matter</strong>: Opt for single-origin, freshly roasted beans. The flavor profile can be a journey in itself.</li>\n<li><strong>Brewing Techniques</strong>: Whether it’s Aeropress, French press, or pour-over, find what tickles your taste buds and suits your coding rhythm.</li>\n<li><strong>Mind the Time</strong>: Don’t brew just before a deep debugging session; you don’t want to be jittery when tracing that elusive bug.</li>\n<li><strong>Stay Hydrated</strong>: Remember, for every cup of coffee, drink a glass of water. Balance is key.</li>\n</ul>\n<p><strong>Conclusion</strong></p>\n<p>Coffee isn’t just a beverage; for many of us, it’s a lifeline, a muse, and a silent partner in our coding escapades. So, whether you’re a latte lover or an espresso enthusiast, here’s to the brew that fuels our passion. Code on and keep sipping! 🖤</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"The Perfect Brew for Optimal Productivity","description":"This is a post about how creating and developing a blog for yourself can be beneficial","dateFormatted":"July 7th, 2023"};
				const file = "/Users/rjohnson/Documents/astro/aria-blog/src/pages/post/the-perfect-brew.md";
				const url = "/post/the-perfect-brew";
				function rawContent() {
					return "\n![Coffee and Code](/assets/images/posts/perfect-coffee.jpg)\n\n**Introduction**\n\nGreetings, fellow keyboard warriors and design dreamers! ☕️ Ever wondered why coffee shops are the unofficial office of developers and designers worldwide? Let's dive deep into the aromatic world of coffee and its symbiotic relationship with our craft.\n\n**Why Coffee and Coding Go Hand in Hand**\n\n1. **Caffeine Boost**: That gentle nudge of alertness can be the difference between a bug and a breakthrough.\n2. **Ritualistic Zen**: The process of brewing, the aroma, the first sip—it's a ritual that centers the mind.\n3. **Ambient Vibes**: The soft hum of conversations, the clinking of cups—it's the perfect white noise for concentration.\n\n![Pour Over](/assets/images/posts/pour-over.jpg)\n\n> \"Coffee is the common man’s gold, and like gold, it brings to every person the feeling of luxury and nobility.\" - Sheik-Abd-al-Kadir\n\n**Crafting the Perfect Coffee for Coding Sessions**\n\n- **Beans Matter**: Opt for single-origin, freshly roasted beans. The flavor profile can be a journey in itself.\n- **Brewing Techniques**: Whether it's Aeropress, French press, or pour-over, find what tickles your taste buds and suits your coding rhythm.\n- **Mind the Time**: Don't brew just before a deep debugging session; you don't want to be jittery when tracing that elusive bug.\n- **Stay Hydrated**: Remember, for every cup of coffee, drink a glass of water. Balance is key.\n\n**Conclusion**\n\nCoffee isn't just a beverage; for many of us, it's a lifeline, a muse, and a silent partner in our coding escapades. So, whether you're a latte lover or an espresso enthusiast, here's to the brew that fuels our passion. Code on and keep sipping! 🖤";
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
