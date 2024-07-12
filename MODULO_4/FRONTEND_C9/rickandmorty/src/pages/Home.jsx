import Card from "../componentes/card"

const Home = (props) => {
    console.log(props.user)
    return (
        <>
            <h2>Hola soy el home</h2>
            <Card user={props.user} />
        </>
    )
}

export default Home