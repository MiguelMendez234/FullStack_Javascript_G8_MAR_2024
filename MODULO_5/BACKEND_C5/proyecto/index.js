import fs from 'fs'
import dotenv from 'dotenv'
const agregarProductos = async () => {

  dotenv.config()

  const argumentos = process.argv.slice(2)
  const baseDeDatos = process.env.BASE_DE_DATOS

  console.log(baseDeDatos)

  const productos = JSON.parse(fs.readFileSync(baseDeDatos))

  productos.push({
    id: productos.length + 1,
    nombre: argumentos[0],
    precio: parseFloat(argumentos[1])
  })
    fs.writeFile('./productos.json', JSON.stringify(productos), (error) => {
      if(error) throw error
      console.log('Archivo actualizado')
    })
}

agregarProductos()
