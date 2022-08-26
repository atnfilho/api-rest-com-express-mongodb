const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node JS',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url] || 'Rota nao encontrada');
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});