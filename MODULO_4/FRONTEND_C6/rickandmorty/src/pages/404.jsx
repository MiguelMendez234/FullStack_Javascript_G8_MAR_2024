import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
        <h2>Ooops, no encontramos lo que buscabas, prueba volver al inicio</h2>
        <Link to='/'>
            <button>
                Volver al inicio
            </button>
        </Link>
        </>
    )
}

export default NotFound