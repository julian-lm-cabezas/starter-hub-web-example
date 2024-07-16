# starter-hub-bff-example


![version](https://badgen.net/badge/version/3.0.0/cyan)
![licence](https://badgen.net/badge/licence/MIT/gray)

VUE SPA web template

### Frameworks

![vue3](https://badgen.net/badge/vue/3.4.21/green)
![typescript](https://badgen.net/badge/typescript/5.4.0/#2d79c7)
![mozaic](https://badgen.net/badge/mozaic/0.64.0/purple)
![vitest](https://badgen.net/badge/vitest/1.4.0/red)

<a href="https://vuejs.org/guide/introduction.html" title="Vue3"><img src="https://hollowtree.gallerycdn.vsassets.io/extensions/hollowtree/vue-snippets/1.0.4/1606964762962/Microsoft.VisualStudio.Services.Icons.Default" width="60" height="60"/></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" width="50" height="50"/></a>
<a href="https://adeo.github.io/mozaic-vue" title="Mozaic"><img src="data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.35 51.26"><defs><style>.cls-1{font-size:32px;font-family:Alata-Regular, Alata;}.cls-2{font-size:16px;font-family:Karla-BoldItalic, Karla;font-weight:700;font-style:italic;}</style></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><polygon points="36 13.26 34 13.26 26 27.26 28 27.26 36 13.26"/><path d="M22,9.26H0v42H42v-42ZM5,19.76v-3.5H7v.35a3.39,3.39,0,0,1,3,0,3.5,3.5,0,0,1,1,.71,3.5,3.5,0,0,1,1-.71,3.39,3.39,0,0,1,3,0,3.49,3.49,0,0,1,2,3.15v4.5H15v-4.5a1.5,1.5,0,0,0-3,0v4.5H10v-4.5a1.5,1.5,0,0,0-3,0v4.5H5Zm15,29.5H2V44.59H20Zm0-6.67H2V37.93H20Zm0-6.66H2V31.26H20ZM40,49.26H22V44.2a5.12,5.12,0,0,0,8.08-2.92,5,5,0,0,1,9.92.87h0Zm0-11.93a7.07,7.07,0,0,0-10.46.51,6.42,6.42,0,0,0-1.4,2.93,3,3,0,0,1-3.05,2.51A3.08,3.08,0,0,1,22,40.23v-9H40Zm0-8.07H22v-18H40Z"/><text class="cls-1" transform="translate(54 27.76)">mozaic</text><text class="cls-2" transform="translate(55 45.76)">Vue.js</text></g></g></svg>" width="180" height="60"/></a>
<a href="https://vitejs.dev" title="Jest"><img src="https://vitejs.dev/logo-with-shadow.png" width="50" height="50"/></a>


##### Table of Contents  
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Common Setup](#common-setup)
  - [Installation](#installation)
  - [Run locally](#run-locally)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
- [Tests](#tests)
  - [Unit tests](#unit-tests)
- [Configuration](#configuration)
  - [Environment variables](#environment-variables)
  - [Customize configuration](#customize-configuration)
- [Contributors](#contributors)


## Requirements

- Node 20+
- Git

## Dependencies

- Vue 3
- Vite (web build)
- Typescript
- Mozaic (CSS framework)
- axios (Http library)
- sass (Css preprocessor for scss files)
- Vitest (unit tests)

## Common Setup

### Installation

- Clone the repo and install dependencies

```bash
npm install
```

### Run locally
```
npm start
```
* web served by default on http://localhost:8080
### Compiles and minifies for production
```
npm run build
```
* compiled by default in **dist** folder


## Tests

### Unit tests

Unit tests done with [Vitest](https://vitest.dev/guide/). 
Run your unit tests

```
npm test
```
* test reports generated in **lcov** format for sonar integration
* coverage generated locally in **/tests/coverage** folder

## Configuration

- Project dependencies found in package.json
- Docker configuration for kubernetes deploy found in DockerFile
- Nginx configuration found in /docker/nginx-default.conf
- Environment variables found in .env.production file

### Environment variables

| Variable                 | Definition                    |
|:-------------------------|:------------------------------|
| VITE_APP_URL             | Endpoint to backend           |


### Customize configuration
- See [Configuration Reference](https://vitejs.dev/config/).
- See [Test & coverage configuration](https://vitest.dev/config/)


## Contributors

<table>
    <tr>
        <td><h5>Architecture</h5></td>
        <td><h5>Developer</h5></td>
        <td><h5>Devops</h5></td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/javiergcres">
                <img src="https://avatars.githubusercontent.com/u/104139027?v=4" width="100px;" alt=""/>
                <br /><sub><b>Javier García Crespo</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/julian-lm-cabezas">
                <img src="https://avatars.githubusercontent.com/u/53000155?s=64&v=4?s=100" width="100px;" alt=""/>
                <br /><sub><b>Julián Cabezas</b></sub>
            </a>
        </td>
         <td align="center">
            <a href="https://github.com/DanielAlonsoArias">
                <img src="https://avatars.githubusercontent.com/u/130563206?v=4?s=100" width="100px;" alt=""/>
                <br /><sub><b>Javier Lopez</b></sub>
            </a>
        </td>
    </tr>
    <tr>
        <td colspan="2"><h5>Devops</h5></td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/jonefmc">
                <img src="https://avatars.githubusercontent.com/u/765320?v=4" width="100px;" alt=""/>
                <br /><sub><b>Juan Francisco Marcos</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/lcarlomagno-lmes">
                <img src="https://avatars.githubusercontent.com/u/89024866?v=4?s=100" width="100px;" alt=""/>
                <br /><sub><b>Luciano Carlomagno</b></sub>
            </a>
        </td>
    </tr>
</table>
