import { useContext } from "react"
import { useEffect, useState } from "react"
import MyContext from "../contexts/MyContext"

const Form = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')
    const {globalState} = useContext(MyContext)
    useEffect(() => {
        setTimeout(() => {
            setErrors('')
            setSuccess('')
        }, 5000)
    }, [success, errors])

    const handleLogin = (e) => {
        e.preventDefault()
        if(!username || !password) return setErrors('el campo usuario/password es obligatorio')
        if(username.length < 9) return setErrors('tu usuario debe ser mayor a 8 caracteres')
        if(password.length < 8) return setErrors('tu contrasena debe ser mayor a 8')
        setErrors('')
        setSuccess('tu formulario fue enviado')
    }
    return (
        <div>
            <p>Inicio de sesion</p>
            <h3>Mi pokemon es {globalState.pokemon.name}</h3>
            {errors && (
                <p style={{padding: '1rem', borderRadius: '1rem', background: '#ccc', color: 'red'}}>{errors}</p>
            )}
            {success && (
                <p style={{padding: '1rem', borderRadius: '1rem', background: 'green',}}>{success}</p>
            )}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Nombre usuario:</label>
                    <input
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)} 
                        type='text' 
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Form

    // const enterMessage = (e) => {
    //     console.log(e.code)
    //     if(e.code === 'Enter'){
    //        setEstado('valor')
    //     }
    // }
    // El onKeyDown debe ir en el input que quieren oir el valor de las teclas presionadas
    // onKeyDown={enterMessage} 