
function cargarDatos(){ 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {nombre: 'Juan', edad: 25},
        {nombre: 'Pedro', edad: 30},
      ])
    }, 2500)
  })
}
function LlamaAsincrona(){
  console.log('Cargando datos...')
  cargarDatos().then((datos) => {
    console.log(datos)
  })
}

// async function LlamaAsincrona(){
//   console.log('Cargando datos...')
//   const datos = await cargarDatos()
//   console.log(datos)
// }

LlamaAsincrona()











// import fs from 'fs'


// fs.readFile('./data.txt', (error, data) => {
//   console.log(data.toString())
// })

// fs.appendFile('./data.txt', "Hola esto es una prueba", (error) =>{
//   if(error) throw error

//   console.log('archivo actualizado')
// })

// fs.open('./data.txt', 'w', (error, file) => {
//   if(error) throw error

//   fs.write(file, 'Hola mundo', (error) => {
//     if(error) throw error
//     console.log('Archivo actualizado')
//   })
// })

// fs.writeFile('./data.txt',

//   `Hola Gente: 
//   esto es una prueba y hoy es: 
//   ${new Date().toLocaleDateString()}`, 
  
//   (error) => {
//     if(error) throw error
//     console.log('Archivo actualizado')
//   })

// fs.unlink('./data.txt', (error) => {
//   if(error) throw error
//   console.log('Archivo eliminado')
// })



// import {createReadStream} from 'fs'

// const DataToBuffer = Buffer.from('Hola mundo Hola mundo')

// console.log(DataToBuffer)
// console.log(DataToBuffer.toString())

// const readStream = createReadStream('./data.txt')

// readStream.on('readable', () =>{
//   setTimeout(() => {
//     const data = readStream.read(10)
//     console.log(data)
//   }, 1000)
// })

// readStream.on('data', (chunk) =>{
//   console.log('--------------------------------------')
//   console.log(chunk)
//   console.log('--------------------------------------')
// })

// readStream.on('open', () => {
//   console.log('Stream opened')
// })

// readStream.on('end', () => {
//   console.log('Stream closed')
// })