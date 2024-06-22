
// pueden usar la palabra export antes de la palabra const para 
// exportar multiples componentes desde un mismo archivo 
// ejemplo export const Card = () => {}

    const estilos = {
        border: 'solid',
        margin: '1rem'
    }
const Card = (props)=> {
    return (
        <div style={estilos}>
            <h2>{props.titulo ?? "titulo"}</h2>
        </div>
    )
}
// recomiendo usar el export default en los componentes
// para solo exportar un solo elemento y mantener los componentes pequenios
export default Card