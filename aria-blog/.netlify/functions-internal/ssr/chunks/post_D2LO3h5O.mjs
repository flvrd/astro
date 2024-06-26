import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, e as renderSlot } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { $ as $$Main } from './main_Czbsipki.mjs';

const $$Astro = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative z-30 max-w-4xl pb-1 mx-auto mt-10 bg-white dark:bg-neutral-950 md:rounded-t-md text-neutral-900"> <div class="relative flex flex-col px-5 pt-6 border-t border-b-0 md:border-r md:border-l md:pt-20 lg:px-0 justify-stretch md:rounded-t-2xl border-neutral-200 dark:border-neutral-800"> <div class="absolute top-0 left-0 hidden w-px h-full mt-1 -translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div> <div class="absolute top-0 right-0 hidden w-px h-full mt-1 translate-x-px md:block bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div> <h1 class="w-full max-w-2xl mx-auto text-3xl font-bold leading-tight tracking-tighter text-left md:mb-12 md:text-4xl dark:text-neutral-100 lg:text-5xl md:leading-none"> ${frontmatter.title} </h1> </div> <article class="w-full max-w-2xl mx-auto mb-20 prose-sm prose px-7 lg:px-0 lg:prose-lg dark:prose-invert"> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/Users/rjohnson/Documents/astro/aria-blog/src/layouts/post.astro", void 0);

export { $$Post as $ };
