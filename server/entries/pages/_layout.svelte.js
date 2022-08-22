import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-pbuywl{width:80%;margin:auto;height:100vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"container svelte-pbuywl"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
