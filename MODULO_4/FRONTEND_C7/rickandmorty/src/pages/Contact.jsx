import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Contact = () => {
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()
    const urlData = useLocation()
    const queryParams = new URLSearchParams(urlData.search)
    const idPokemon = queryParams.get('idPokemon') || 1

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .then((data) => data.json())
            .then((pokemon) => setPokemon(pokemon))
    }, [idPokemon])
    const cambiarPokemon = (id) => {
        navigate(`/contacto?idPokemon=${id}`)
    }
    return (
        <>
          {pokemon && (
            <>
                <h2>informacion del pokemon {pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} />
            </>
          )}
          <button disabled={parseInt(idPokemon) === 1} onClick={() => cambiarPokemon(parseInt(idPokemon) - 1)}>Anterior</button>
          <button disabled={parseInt(idPokemon) === 1025} onClick={() => cambiarPokemon(parseInt(idPokemon) + 1)}>Siguiente</button>
        </>
    )
}

export default Contact