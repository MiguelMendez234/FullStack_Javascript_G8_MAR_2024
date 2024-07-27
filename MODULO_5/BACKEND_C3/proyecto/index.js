import { writeFile } from 'fs/promises';

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
    return `Wrote data to ${fileName}`;
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}
writeToFile('notasNode.txt', `Hola, soy un archivo de texto creado con Node.js
    Jorge: 9
    Rodrigo 9.5
    `);


