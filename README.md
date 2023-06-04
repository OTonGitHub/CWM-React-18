# Following CWM new React-18 Course

<h4>Environment Setup</h4>
- Required Node version > 16
- NVM
- For chocolatey installatin, refer to my other repo, CWP-Django Notes
- helpful links:
    - https://community.chocolatey.org/packages/nvm.install
    - https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- sudo powershell: choco install nvm.install -A
-

<h4>Project Commands</h4>
> choco install nvm.install -A
> nvm install current
> nvm use lts
> node -v
> npm create vite -y
    # npm gets installed with node
    - app-1
    # with vite create, can use any type of JS project, react, vue, Svelte, etc
    - React
    - Typescript
> cd app-1
> npm install | npm i
    # install dependencies
> npm run dev

<h4>Project Struct Explanation</h4>
- ./node_modules:
    - never touched, third party libraries and tools installed
- ./public:
    - videos, pictures, svg, etc
- tsconfig.json:
    - set typescript compiler parameters, how to compile to JS
- package.json:
    - project dependencies
    - dev dependencies is only in development
- index.html
    - entry point
    - has root app node
    - and `script` module link to main.tsx
- src/app.tsx
    - main app
    - different from main.tsx
- vite.config.ts
    - mostly untouched, just vite config
