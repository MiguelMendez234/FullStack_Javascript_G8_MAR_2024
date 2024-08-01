import fs from 'fs'
import dotenv from 'dotenv'
const verProductos = () => {
    dotenv.config()
    const baseDeDatos = process.env.BASE_DE_DATOS
    fs.readFile(baseDeDatos, (error, data) => {
        if(error) console.log(error)
        console.log(JSON.parse(data))
    })
}
verProductos()