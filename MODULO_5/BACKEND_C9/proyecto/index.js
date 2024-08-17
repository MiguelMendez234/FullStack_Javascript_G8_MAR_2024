import express from 'express';

const app = express();
const port = 3000;

app.use(express.json()) // Middleware para que express pueda entender JSON



// CRUD: Create = POST, Read = GET, Update = PUT/PATCH, Delete = DELETE
const productos = [
    {
        id: 1,
        Nombre: 'Arroz',
        Precio: 1000
    },
    {
        id: 2,
        Nombre: 'Papa',
        Precio: 500
    },
    {
        id: 3,
        Nombre: 'Leche',
        Precio: 2000
    },
    {
        id: 4,
        Nombre: 'Huevos',
        Precio: 3000
    }
]
const permisos = [
    {user: 'user', permiso: 'lectura'},
]
const middleware = (req, res, next) => {
    console.log('esto es un middleware')
    next()
}
const validate = (req, res, next) => {
    const { Nombre, Precio } = req.body
    if(!Nombre || !Precio){
        res.status(400).send('Faltan campos')
    }else{
      next()
    }
}
const authMiddleware = (req, res, next) => {
    // token = req.headers.authorization || req.headers.token
    const user = req.headers.user
    const password = req.headers.password
    if(user !== 'user' || password !== '123'){
        res.status(401).send('usuario no autorizado')
    }else {
      next()
    }
    console.log({user, password})
}

app.get('/productos', middleware, (req, res) => {
    res.send(productos)
})


app.get('/productos/:id', (req, res) => {
    const id = req.params.id

    const resultado = productos.find((producto) => producto.id === parseInt(id))
    if(!resultado){
        res.send('Producto no encontrado')
    }
    res.send(resultado)
})

app.post('/productos', [authMiddleware, validate], (req, res) => {
    const producto = req.body
    console.log(producto)
    productos.push(producto)
    res.send({
        mensaje: 'Producto creado',
        producto: producto
    })
})


app.put('/productos/:id', validate, (req,res) => {
    const id = req.params.id
    const producto = req.body

    const index = productos.findIndex((producto) => producto.id === parseInt(id))
    productos[index] = producto

    res.send({
        mensaje: 'Producto actualizado',
        producto: producto
    })
})

app.delete('/productos/:id', (req, res) => {
    const id = req.params.id

    const index = productos.findIndex((producto) => producto.id === parseInt(id))
    productos.splice(index, 1)

    res.send({
        mensaje: 'Producto eliminado'
    })
})

app.listen(port, () => {
    console.log(`El Servidor esta corriendo en el puerto ${port}`)
})