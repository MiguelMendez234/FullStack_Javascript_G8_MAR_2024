import axios from 'axios';

console.log("estoy haciendo una peticion")
try {
    const results = await axios.get('https://swapi.dev/api/people/40')
    if(results.status === 200){
    console.log(results.data)
    }
} catch (error) {
    console.error(error)
    console.warn("hubo un error")
}

