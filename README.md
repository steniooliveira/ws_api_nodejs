Projeto API Node.js

0. Baixar e instalar a última versão estável do Node.js:
    a. URL: https://nodejs.org/en/

1. Criar diretório

2. Abrir terminal:
    a. Comando: npm init

3. Aguardar...

4. Definir as características do projeto

5. Abrir package.json

6. Criar esse arquivo README.md

7. Instalar o Express para gerenciar requisições, rotas e URLs, dentre outras funcionalidades:
    a. Comando: npm install express 

8. Aguardar...

9. Instalar o Nodemon:
    a. Comando: npm i -g nodemon 
    ou
    b. Comando: npm install -D nodemon

    Caso ocorra erro como o Nodemon abra o PowerShell como administrador
    Powershell como administrador:
        a. Comando: Set-ExecutionPolicy RemoteSigned

10. Instalar o Joi (opcional):
    a. Comando: npm install joi

11. Primeiras linhas de código

<!-- 
const express = require('express'); //Declara uma constante que herda elementos do pacote Express
const Joi = require('joi');         //Declara uma constante que utiliza o módulo joi para validação de um objeto JavaScript (opcional)
const app = express();              //Declara uma constante que herda elementos da função express()
app.use(express.json());            //A constante app utiliza a função use para chamar a função json do express 
-->

12. Declarar um array de elementos JSON

<!--
const books = [ {id: 1, title: 'Game of Thrones'}, {id: 2, title: 'Blizzard'}, {id: 3, title: 'Legion'}, {id: 4, title: 'Tom & Jerry'} ]
-->

13. Defina uma requisição GET para a rota de retorno com mensagem de saudação
<!--
//Requisição GET para página principal ou home
app.get('/', (req, res) => {
    res.send('Bem vindo ao API REST com Node.js e Express ;D');
});
-->

14. Defina uma requisição GET para a rota de retorno com os dados do array
<!--
//Requisição GET para a rota /api/livros
app.get('/api/livros', (req,res)=> {
    res.send(livros);
});
-->


15. Defina a porta de escuta da aplicação e ative a instrução de ativação da aplicação
<!--
//Definição da porta 
const port = process.env.PORT || 8888;

//Ativando a aplicação na porta configurada
app.listen(port, () => console.log(`Escutando na porta ${port}..`));
-->

16. No terminal, execute a aplicação com o node ou nodemon

    Usando node:
        a. node app.js

    Usando nodemon:
        a. nodemon app.js

17. Abra o Insomina para testar a API

18. Crie uma nova collection

19. Crie uma nova request GET apontando para a URL abaixo:
    URL: http://localhost:8888

20. Crie uma nova request GET apontando para a URL e rota abaixo:
    URL: http://localhost:8888/api/livros
 
