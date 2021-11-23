const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const livros = [ {id: 1, title: 'Game of Thrones'}, {id: 2, title: 'Blizzard'}, {id: 3, title: 'Legion'}, {id: 4, title: 'Tom & Jerry'} ]

//Requisição GET para página principal ou home
app.get('/', (req, res) => {
    res.send('Bem vindo ao API REST com Node.js e Express ;D');
});

//Requisição GET para a rota /api/livros
app.get('/api/livros', (req,res)=> {
    res.send(livros);
});

//Requisição GET para a rota /api/livros passando id como parâmetro
app.get('/api/livros/:id', (req, res) => {
    const livro = livros.find(c => c.id === parseInt(req.params.id));

if (!livro) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Livro não encontrado.</h2>');
    res.send(livro);
});
    
//Requisição POST para a rota /api/livros com dados para um novo elemento 
app.post('/api/livros', (req, res)=> {
    //const { error } = validaLivro(req.body);
    
    /*
    if (error){
        res.status(400).send(error.details[0].message)
        return;
    }
    */
   
    const livro = {
        id: livros.length + 1,
        title: req.body.title
    };

    livros.push(livro);
    res.send(livro);
});

//Requisição PUT para a rota /api/livros passando id como parâmetro 
app.put('/api/livros/:id', (req, res) => {
    const livro = livros.find(c=> c.id === parseInt(req.params.id));

    if (!livro) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Não encontrado</h2>');
     
    const { error } = validaLivro(req.body);
    
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
     
    livro.title = req.body.title;
    res.send(livro);
});
    

//Requisição DELETE para a rota /api/livros passando id como parâmetro
app.delete('/api/livros/:id', (req, res) => {
    const livro = livros.find( c=> c.id === parseInt(req.params.id));

    if(!livro) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Não encontrado</h2>');
     
    const index = livros.indexOf(livro);
    livros.splice(index,1);
     
    res.send(livro);
});
     
//Função que valida o objeto livro 
function validaLivro(livro) {
    const schema = {
        id: Joi.string().min(3).required(),
        title: Joi.string().min(3).required()
    };

    return Joi.valid(livro, schema);
     
}

//========================================
//Configurando e ativando a aplicação
//========================================

//Definição da porta 
const port = process.env.PORT || 8888;

//Ativando a aplicação na porta configurada
app.listen(port, () => console.log(`Escutando na porta ${port}..`));

//========================================