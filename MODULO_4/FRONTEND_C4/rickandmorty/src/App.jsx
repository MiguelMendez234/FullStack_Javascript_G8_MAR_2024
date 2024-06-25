import { useState, useEffect } from 'react'
import Card from './componentes/card'
import Iguana from './assets/iguana.jpg'
import Oso from './assets/oso.jpg'
import Animales from './animales.json'
import './App.css'

function App(){
  const [saldo, setSaldo] = useState(1000)
  const [pokemons, setPokemons] = useState()

  const [showAnimals, setShowAnimals] = useState(false)
  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])


  useEffect(() => {
    // Realizar una solicitud HTTP para obtener datos
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => setPokemons(data));
  }, []);
  return(
    <>
      <p>Tu saldo es: {saldo}</p>
      <button onClick={() => setSaldo(saldo + 100)}>Agregar saldo</button>
      {showAnimals && (
        <>
          <Card titulo="un titulo nuevo" imagen={Iguana} descripcion={Animales.iguana} />
          <Card titulo="otro titulo" imagen={Oso} descripcion={Animales.oso} />
        </>
      )}
      {pokemons && pokemons.results.map((pokemon) => (
        <h2 key={pokemon.name}>{pokemon.name}</h2>
      ))}
      <button onClick={() => setShowAnimals(!showAnimals)}>{showAnimals ? "Ocultar" : "Mostrar"} animales</button>
    </>
  )
}

// const Componente2 = () => {
//   return()
// }

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       saldo: 1000
//     }
//   }

//   componentDidMount(){
//     console.log('El componente se monto')
//   }
//   componentDidUpdate(){
//     console.log('el componente se actualizo')
//   }
//   componentWillUnmount(){
//     console.log('el componente se Desmonto')
//   }
//   cambiarSaldo = () => {
//     this.setState(prevState => ({
//       saldo: prevState.saldo + 100
//     }) )
//   }
//   render() {
//     return (
//       <div>
//         <p>tu saldo es: {this.state.saldo}</p>
//         <button onClick={this.cambiarSaldo}> Agregar Saldo </button>
//       </div>
//     )
//   }
// }


export default App
