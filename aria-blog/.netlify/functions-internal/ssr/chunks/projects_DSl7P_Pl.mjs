/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_B2sFbQH5.mjs';
import 'kleur/colors';
import { p as projects, $ as $$Project } from './project_DWu-zlLP.mjs';
import { $ as $$PageHeading } from './page-heading_DAIHKk8S.mjs';
import { $ as $$Main } from './main_Czbsipki.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "My Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "My Projects", "description": "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!" })} <div class="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2"> ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "name": project.name, "description": project.description, "image": project.image, "url": project.url })}`;
  })} </div> </section> ` })}`;
}, "/Users/rjohnson/Documents/astro/aria-blog/src/pages/projects.astro", void 0);

const $$file = "/Users/rjohnson/Documents/astro/aria-blog/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
