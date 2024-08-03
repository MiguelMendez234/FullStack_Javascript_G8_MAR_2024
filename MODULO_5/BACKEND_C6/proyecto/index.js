import http from 'http';

const port = 3000;

const books = [
    {title: 'The Alchemist', author: 'Paulo Coelho', year: 1988},
    {title: 'The Prophet', author: 'Kahlil Gibran', year: 1923},
]
const authors = [
    {name: 'Paulo Coelho', country: 'Brazil', yearOfBirth: 1947},
    {name: 'Kahlil Gibran', country: 'Lebanon', yearOfBirth: 1883},
]

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(req.url)
    // res.write('<h1>Hola Mundo</h1>');
    switch(req.url){
        case '/books':
            res.end(JSON.stringify(books))
            break
        case '/authors':
            res.end(JSON.stringify(authors))
            break
        default:
            res.writeHead(404)
            res.end(JSON.stringify({error: 'Ruta no encontrada'}))
    }
})

server.listen(port, () => {
    console.log(`El Servidor se inicio con exito en el puerto ${port}`)
})