/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { $ as $$Post } from './post_D2LO3h5O.mjs';

const html = "<p><strong>Introduction</strong></p>\n<p>Hey there, fellow code wranglers and pixel pushers! 🌅 Ever felt that mid-morning slump, right when you’re diving deep into that new React component or finalizing a sleek UI design? Yeah, me too. But here’s the thing: I’ve discovered the magic potion – a killer morning routine. And no, it’s not just about brewing the perfect pour-over (though that’s a part of it).</p>\n<p><img src=\"/assets/images/posts/coffee.jpg\" alt=\"Coffee Pour-over\"></p>\n<p><strong>Why Morning Routines are the New Coffee</strong></p>\n<ol>\n<li><strong>Mindful Start</strong>: Before the barrage of Slack messages and GitHub notifications, there’s a serene space to set your intentions.</li>\n<li><strong>Boosted Creativity</strong>: Ever noticed how those genius ideas pop up when you’re most relaxed? Yep, that’s the morning magic.</li>\n<li><strong>Sustainable Energy</strong>: Forget the caffeine jitters; a solid routine gives you a steady energy flow.</li>\n</ol>\n<blockquote>\n<p>”Mornings are for coffee and contemplation.” - Chief Hopper, Stranger Things (because, why not?)</p>\n</blockquote>\n<p><strong>Crafting the Ultimate Morning Ritual</strong></p>\n<ul>\n<li><strong>Vinyl Vibes</strong>: Start with some chill beats. My go-to? A bit of Tame Impala or some lo-fi beats.</li>\n<li><strong>Brewed to Perfection</strong>: Ditch the instant coffee. Go for a French press or Chemex brew. Trust me, it’s worth the extra minutes.</li>\n<li><strong>Meditative Moments</strong>: Even just 5 minutes of mindfulness can set the tone. I use apps like Headspace or just some deep breathing exercises.</li>\n<li><strong>Analog Inspiration</strong>: Before diving into the digital, I jot down my thoughts in a Moleskine. Old school, I know, but it’s a game-changer.</li>\n</ul>\n<p><strong>Conclusion</strong></p>\n<p>Alright, fellow creatives, that’s my two cents (or should I say, two lines of code?) on morning routines. It’s not about rigid schedules; it’s about finding what vibes with you. So, whether you’re into sunrise yoga or just sipping that artisanal coffee, find your morning mojo and watch your day transform. Peace out and happy coding! ✌️</p>";

				const frontmatter = {"layout":"../../layouts/post.astro","title":"A Developer's Guide to Zen Mornings","description":"Dive into the zen world of a developer's morning, where vinyl beats meet artisanal brews, setting the tone for a day of inspired coding and design.","dateFormatted":"July 15th, 2023"};
				const file = "/Users/rjohnson/Documents/astro/aria-blog/src/pages/post/zen-mornings.md";
				const url = "/post/zen-mornings";
				function rawContent() {
					return "\n**Introduction**\n\nHey there, fellow code wranglers and pixel pushers! 🌅 Ever felt that mid-morning slump, right when you're diving deep into that new React component or finalizing a sleek UI design? Yeah, me too. But here's the thing: I've discovered the magic potion – a killer morning routine. And no, it's not just about brewing the perfect pour-over (though that's a part of it).\n\n![Coffee Pour-over](/assets/images/posts/coffee.jpg)\n\n**Why Morning Routines are the New Coffee**\n\n1. **Mindful Start**: Before the barrage of Slack messages and GitHub notifications, there's a serene space to set your intentions.\n2. **Boosted Creativity**: Ever noticed how those genius ideas pop up when you're most relaxed? Yep, that's the morning magic.\n3. **Sustainable Energy**: Forget the caffeine jitters; a solid routine gives you a steady energy flow.\n\n> \"Mornings are for coffee and contemplation.\" - Chief Hopper, Stranger Things (because, why not?)\n\n**Crafting the Ultimate Morning Ritual**\n\n- **Vinyl Vibes**: Start with some chill beats. My go-to? A bit of Tame Impala or some lo-fi beats.\n- **Brewed to Perfection**: Ditch the instant coffee. Go for a French press or Chemex brew. Trust me, it's worth the extra minutes.\n- **Meditative Moments**: Even just 5 minutes of mindfulness can set the tone. I use apps like Headspace or just some deep breathing exercises.\n- **Analog Inspiration**: Before diving into the digital, I jot down my thoughts in a Moleskine. Old school, I know, but it's a game-changer.\n\n**Conclusion**\n\nAlright, fellow creatives, that's my two cents (or should I say, two lines of code?) on morning routines. It's not about rigid schedules; it's about finding what vibes with you. So, whether you're into sunrise yoga or just sipping that artisanal coffee, find your morning mojo and watch your day transform. Peace out and happy coding! ✌️";
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
