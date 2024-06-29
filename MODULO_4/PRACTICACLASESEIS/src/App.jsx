
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [pokemons, setPokemons] = useState()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((data) => data.json())
      .then((pokemonsData) => setPokemons(pokemonsData))
  }, [offset])

  const totalPages = pokemons && pokemons.count / 20
  const actualPage = offset / 20 + 1

  const changeNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setOffset(offset + 20)
  }
  const changePrevPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setOffset(offset - 20)
  }

  return (
    <>
      <h2>Lista de Pokemones</h2>
      {pokemons && pokemons.results.map((pokemon, index) => (
        <h2 key={index}>{ pokemon.name}</h2>
      ))}
      <p>total de Paginas: {Math.ceil(totalPages)}</p>
      <button disabled={offset === 0} onClick={changePrevPage}>Anterior Pagina</button>
      {actualPage}
      <button onClick={changeNextPage}>Siguiente Pagina</button>
    </>
  )
}

export default App
