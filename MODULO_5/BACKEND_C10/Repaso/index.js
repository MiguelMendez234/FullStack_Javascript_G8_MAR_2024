import express from 'express'
import fs from 'fs'
import { checkProductosMiddleware, otroMiddleware} from './middlewares/index.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.post('/productos', [checkProductosMiddleware, otroMiddleware], (req, res) => {
    const productos = JSON.parse(fs.readFileSync('db.json'))
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    fs.writeFileSync('db.json', JSON.stringify(productos))
    res.send('Producto agregado')
})
app.get('/productos/:id', otroMiddleware, (req, res) => {
    const productos = JSON.parse(fs.readFileSync('db.json'))
    const id = req.params.id
    const respuesta = productos.find((producto) => producto.id === parseInt(id))
    res.send(respuesta)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})