import express from 'express'

const app = express()

const port = 3000
app.use(express.json())

app.use((req, res, next) => {
    console.log(
        `New Request: ${req.method} | ${req.originalUrl} | ${new Date().toISOString()}`
    )
    next()
})
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

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.json({
        status: 200,
        message: 'Book created successfully',
        data: req.body
    })
})

app.get('/books', (req, res) => {
    res.send({
        status: 200,
        message: 'Query Executed successfully',
        data: books
    })
})


app.get('/gender/:gender/author/:author', (req, res) => {
    const result = books.filter((book) => 
        book.gender === req.params.gender && book.author === req.params.author )
    res.send({
        status: 200,
        message: 'Query Executed successfully',
        data: result
    })
})

app.get('/booksQuery', (req, res) => {
    res.send('hola')
})



app.get('/books/:bookName', (req, res) => {
    const result = books.filter((book) => book.name.includes(req.params.bookName))
    res.send({
        status: 200,
        message: 'Query Executed successfully',
        data: result
    })
})

// app.get('/books/:bookId', (req, res) => {
//     console.log(req.params)
//     const result = books.find((book) => book.bookId === parseInt(req.params.bookId)  )
//     res.send({
//         status: 200,
//         message: 'Query Executed successfully',
//         data: result
//     })
// })

app.listen(port, () => {
    console.log(`Servidor esta escuchando en el puerto ${port}`)
})