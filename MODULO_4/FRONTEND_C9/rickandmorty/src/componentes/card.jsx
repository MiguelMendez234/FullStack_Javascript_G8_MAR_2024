import Titulo from "./Titulo"

const Card = ({user}) => {
    return (
        <>
            <h2>Soy una tarjeta</h2>
            <Titulo name={user.userName} />
        </>
    )
}

export default Card