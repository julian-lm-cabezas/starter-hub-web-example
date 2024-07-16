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
