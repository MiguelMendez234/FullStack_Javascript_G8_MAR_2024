import { useContext } from "react"
import MyContext from "../contexts/MyContext"

const TituloContext = () => {

    const {globalState} = useContext(MyContext)
    return (
        <h2>{globalState.userName}</h2>
    )
}

export default TituloContext