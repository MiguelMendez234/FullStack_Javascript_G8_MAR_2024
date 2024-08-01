import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()
const baseDeDatos = process.env.BASE_DE_DATOS
const argumentos = process.argv.slice(2)

const productos = JSON.parse(fs.readFileSync(baseDeDatos))

const encontrarProducto = productos.filter(producto =>  producto.nombre.includes(argumentos[0]) )

console.log(encontrarProducto)