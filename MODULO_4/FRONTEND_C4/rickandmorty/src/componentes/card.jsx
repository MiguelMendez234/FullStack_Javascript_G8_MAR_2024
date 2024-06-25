
// pueden usar la palabra export antes de la palabra const para 
// exportar multiples componentes desde un mismo archivo 
// ejemplo export const Card = () => {}

import Imagen from "./imagen"

    const estilos = {
        border: 'solid',
        margin: '1rem'
    }
const Card = (props)=> {
    return (
        <div style={estilos}>
            <Imagen imagen={props.imagen} alt={props.titulo} />
            {/* <img src={props.imagen} alt={props.titulo} /> */}
            <h2>{props.titulo ?? "titulo"}</h2>
            <p>{props.descripcion}</p>
        </div>
    )
}
// recomiendo usar el export default en los componentes
// para solo exportar un solo elemento y mantener los componentes pequenios
export default Card