export const checkProductosMiddleware = (req, res, next) => {
    if(
        req.body.name && req.body.price && req.body.id && req.body.category
        && typeof req.body.name === 'string' && typeof req.body.price === 'number'
        && typeof req.body.id === 'number' && typeof req.body.category === 'string'
    ) {
        next()
    }else{
        res.send('Datos incorrectos, los productos deben tener: name, price, id y category, poner atencion en los tipos ')
    }
}

export const otroMiddleware = (req, res, next) => {
    console.log('Este es otro middleware')
    next()
}