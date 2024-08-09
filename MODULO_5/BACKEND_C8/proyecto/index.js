import express from 'express'

// CRUD  Create = Post, Read = Get, Update = Put, Delete = Delete

const app = express()
const port = 3000

// middlewares
app.use(express.json())


// end middleware



const books = [
    {
      bookId: 1,
      author: "Perano",
      name: "The hapiness book",
      gender: "Self Care",
    },
    {
      bookId: 2,
      author: "Sultano",
      name: "The blue man",
      gender: "Fantasy",
    },
    {
      bookId: 3,
      author: "Mendano",
      name: "How to build habits",
      gender: "Self Care",
    },
    {
      bookId: 4,
      author: "Mendano",
      name: "How to be rich",
      gender: "Self Care",
    },
  ];

app.get('/test', (req, res) => {
    res.send('Hola mundo')
})
app.get('/books', (req, res) => {
    res.send({
        status: 200,
        message: 'Query Executed successfully',
        data: books
    })
})
app.get('/books/:bookName', (req, res) => {
    console.log(req.params)

    const result = books.filter((book) => book.name.includes(req.params.bookName))
    if(result.length === 0){
        res.status(404)
        res.send({
            status: 404,
            message: 'Book not found'
        })
    }
    res.send({
        status: 200,
        message: 'Query Executed successfully',
        data: result
    })
})

app.post('/books', (req, res) => {
    console.log(req.body)
    books.push(req.body)
    res.json({
        status: 200,
        message: 'Book created successfully',
        data: req.body
    })
})

app.put('/books/:bookId', (req, res) => {
    const booksIndex = books.findIndex((book) => book.bookId === parseInt(req.params.bookId))
    if(booksIndex === -1){
        res.status(404)
        res.send({
            status: 404,
            message: 'Book not found'
        })
    }
    books[booksIndex] = req.body

    res.send({
        status: 200,
        message: 'Book updated successfully',
        data: req.body
    })
})

app.delete('/books/:bookId', (req, res) => {
    const booksIndex = books.findIndex((book) => book.bookId === parseInt(req.params.bookId))
    if(booksIndex === -1){
        res.status(404)
        res.send({
            status: 404,
            message: 'Book not found'
        })
    }
    books.splice(booksIndex, 1)
    
    res.send({
        status: 200,
        message: 'Book deleted successfully'
    })
})



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})