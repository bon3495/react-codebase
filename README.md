# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## **Core**

- **[React (Version 18)](https://react.dev/learn)**
- **[Vite](https://vitejs.dev/guide/)**
- **[React Query (Version 4)](https://tanstack.com/query/v4/docs/react/overview)**
- [**React Hook Form (Version 7)**](https://react-hook-form.com/docs)
- [**Zustand**](https://docs.pmnd.rs/zustand/getting-started/introduction)

## **UI & styling**

- [**Tailwindcss**](https://tailwindcss.com/docs/installation)
- [**Radix-UI**](https://www.radix-ui.com/themes/docs/overview/getting-started)
- [**Shadcn**](https://ui.shadcn.com/docs)

## **Static type checking & linting**

- [**Typescript**](https://www.typescriptlang.org/)
- [**ESLint**](https://eslint.org/docs/latest/use/getting-started)
- [**Prettier**](https://github.com/prettier/prettier)
- [**Husky**](https://github.com/typicode/husky)
- **[Commitlint](https://commitlint.js.org/#/)**

## Others

- [**class-variance-authority**](https://cva.style/docs/getting-started/installation)

1. Install the "Tailwind CSS IntelliSense" Visual Studio Code extension
2. Add the following to your settings.json(opens in a new tab):

```jsx
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

- [**Storybook**](https://storybook.js.org/docs/react/get-started/install/)

## **Repository setup**

- [**pnpm**](https://pnpm.io/installation)

1. `pnpm install` to install all dependencies
2. `pnpm run dev` to start development server
3. `pnpm run build` to compile for production
4. `pnpm run storybook` to open storybook on local

## **Source Version Control**

- [**Refer here**](https://github.com/dwarvesf/playbook/blob/master/engineering/git.md)

## Coding Convention

- [**Refer here**](https://github.com/dwarvesf/playbook/blob/master/engineering/frontend/code-style.md)

## Folder Structure

<!-- prettier-ignore -->
```jsx
src
|-- api
|-- assets
    |-- icons
        |-- index.tsx
    |-- images
|-- components
    |-- button
        |-- index.tsx
        |-- Button.stories.tsx
    |-- paragraph
        |-- index.tsx
        |-- Paragraph.stories.tsx
|-- hooks
|-- layouts
    |-- BlankLayout.tsx
    |-- VerticalLayout.tsx
|-- lib
    |-- utils.tsx
|-- router
    |-- routes
        |-- index.tsx
        |-- Authentication.tsx
        |-- Pages.tsx
    |-- Router.tsx
    |-- constant.tsx
|-- stories
|-- styles
    |-- global.css
|-- types
```
