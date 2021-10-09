# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Steps
- 1. init
```bash
npm init vite@latest vue3-nav--template vue-ts --registry http://registry.npm.taobao.org
```  

- 2. 添加相关依赖
```bash
yarn add ant-design-vue@next  # 组件库
yarn add vue-router@4 # 路由
yarn add vuex@next # vuex 状态管理
```

- 3. 配置
  - vscode编辑器配置
  - ant-design-vue组件注册
  - vite.config配置
  - 路由配置