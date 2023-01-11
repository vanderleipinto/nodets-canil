# nodets-canil

Aulas de NodeJS, Typescript. Projeto simples com express e mustache.

### Pré requisitos globais

'npm i -g nodemon typescript ts-node

### instalação

'npm install'

### para rodar o projeto

'npm run start-dev'

### Anotações da aula

nodemon, typescript e tsnode já devem estar instaladas globalmente na máquina
(npm install -g nodemon typescript ts-node) .

1 - Primeiramente iniciar o node no projeto.
Na pasta do projeto:
npm init -y

2 - Segundamente criar o arquivo de configuração do typescript
tsc --init

3 - no arquivo de configuração tsconfig.json

"target": "es6",
"rootDir": "./src",
"outDir": "./dist",
"moduleResolution": "node",

4 - Instalar dependências

npm install express mustache-express dotenv

Instala o express (rotas e servidor), mustache (integração das views), e dotenv para gerar variáveis de ambiente.

5 - Instalação das dependências de desenvolvimentos (types)

npm install --save-dev @types/express @types/mustache-express @types/node

O dotenv já vem com types dentro dele então não precisa instalar sua dependência

6 - Dentro de package.json, em scripts deve-se adicionar o comando para rodar o projeto e deixá-lo na escuta.

"start-dev": "nodemon -e ts,json,mustache src/server.ts"

Para rodar o projeto:

npm run start-dev
