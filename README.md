# Following CWM new React-18 Course

<h4>Environment Setup</h4>
- Required Node version > 16
- NVM
- For chocolatey installatin, refer to my other repo, CWP-Django Notes
- helpful links:
    - https://community.chocolatey.org/packages/nvm.install
    - https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- sudo powershell: choco install nvm.install -A

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

<h4>Notes:</h4>
- creating components in src
- *.ts for plaing ts, and *.tsx for react components
- react components are jsx, js xml -> babeljs.io/repl to check
- hence, can return xml (html) in tsx components, in the end, its compiled to js
- boils down to React.createElement('', 'h1', null, 'stuff');
- can react entire app like this, instead of react tags
    - some projects like H? can't recall, look into it.
- functions use Pascal Casing:
    - because when used as react elements, they use pascal, unlike html elements, to diffrentiate
- Previously, before react 18, classes used for react components:
    - more info in first Mosh course.
    - now functions are used, like in this project
- Vite runs HMR (hot module replacement): file change monitor and update
- when importing, using .tsx append to file name, no real issue noticed yet, but strange first behaviour

- to my understanding, it seems, app is the entry point, main app,
- and main.tsx is what is called by index, which is an association between app and index,
- main .tsx binds to the root element of DOM and renders app in there.
- perhaps can render multiple apps in one DOM.
- virtual dom is in memory, when changes happen, compared with actual DOM and changes applies

  - these changes added by reactDOM,
  - react it self platform agnostic, if using react components on mobile, translation done by reactNative, etc

- inside {} in tags, anything that returns a value can be placed
- react builds User interfaces, unlike Angular or Vue, react is a library, not a framework (tool to toolset)
- react: dynamic & interactive user interfaces
- for actual apps, need other components besides UI (React), such as
  - routing: mapping,
  - HTTP calls,
  - state management,
  - internalization,
  - form validation,
  - animations
- React good, because not set, which library to use for the other parts, depends on project
- this project focus on just react, other tools for later
