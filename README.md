# Vue 3 + TypeScript + Vite

## Useful links
[I get inline svg icon from here](https://icons8.com/)
[Unit test using vitest](https://www.thisdot.co/blog/getting-started-with-vue-and-vitest)
[Indexeddb manipulation like firebase style](https://github.com/dannyconnell/localbase#with-npm)
[fake indexeddb for unit testing](https://www.npmjs.com/search?q=fake%20indexeddb)
[example unit testing indexeddb](https://dev.to/andyhaskell/testing-your-indexeddb-code-with-jest-2o17)
[Vue testing handbook](https://lmiller1990.github.io/vue-testing-handbook/)
[Find elemnt by class name in unit testing]([https://](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/find.html))

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
