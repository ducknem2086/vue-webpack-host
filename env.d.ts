/// <reference types="webpack-env" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// If you import Module Federation remotes, declare them too:
// declare module "products/*" { export default any; }
declare module "remote1/*" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
