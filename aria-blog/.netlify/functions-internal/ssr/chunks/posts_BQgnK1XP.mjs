/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { $ as $$PageHeading } from './page-heading_DAIHKk8S.mjs';
import { $ as $$PostsLoop } from './posts-loop_B9KcHxT6.mjs';
import { $ as $$Main } from './main_Czbsipki.mjs';

const $$Posts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "My Writing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "My Writing", "description": "Dive into my musings on life and tech in my latest posts; a blend of introspection and innovation. Keep an eye out for fresh insights and updates!" })} <div class="z-50 flex flex-col items-stretch w-full gap-5 my-8"> ${renderComponent($$result2, "PostsLoop", $$PostsLoop, { "count": "10" })} </div> </section> ` })}`;
}, "/Users/rjohnson/Documents/astro/aria-blog/src/pages/posts.astro", void 0);

const $$file = "/Users/rjohnson/Documents/astro/aria-blog/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };
