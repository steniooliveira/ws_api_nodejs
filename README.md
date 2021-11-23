# API Node.js
Projeto simples utilizando Node.js

## IDE
Baixar e instalar a IDE Microsoft Visual Studio Code

[VSCode](https://code.visualstudio.com/)

## Node.js 
Baixar e instalar a última versão estável do Node.js.

[Node.js](https://nodejs.org/en/)


## Insomnia 
Baixar e instalar o Insomnia para testar a API.

[Insominia](https://insomnia.rest/download)

## Projeto
Criar diretório

Abrir terminal e digitar:

```bash
npm init
```

Instalar o Express para gerenciar requisições, rotas e URLs, dentre outras funcionalidades.
```bash
npm install express
```
Instalar o Nodemon
```bash
npm i -g nodemon 
```
ou
```bash
npm install -D nodemon
```

Caso ocorra erro como o Nodemon abra o PowerShell como administrador e digite:
```powershell
Set-ExecutionPolicy RemoteSigned
```

## Utilizando a aplicação
```powershell
node app.js
```

## Utilizando a aplicação com Nodemon
```powershell
nodemon app.js
```

## Utilizando o Insominia
- Abra o Insomina para testar a API.
- Crie uma nova collection
- Crie uma nova request GET apontando para a URL abaixo:

  [http://localhost:8888](http://localhost:8888)

- Crie uma nova request GET apontando para a URL e rota abaixo: 

  [http://localhost:8888/api/livros](http://localhost:8888/api/livros)
