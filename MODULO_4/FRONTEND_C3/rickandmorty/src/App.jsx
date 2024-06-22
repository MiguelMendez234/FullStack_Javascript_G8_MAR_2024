import { useState, useEffect } from 'react'
import Card from './componentes/card'
import './App.css'

function App(){
  const [saldo, setSaldo] = useState(1000)
  useEffect(() => {
    console.log('se actualizo el saldo')
  }, [saldo])

  return(
    <>
      <p>Tu saldo es: {saldo}</p>
      <button onClick={() => setSaldo(saldo + 100)}>Agregar saldo</button>
      <Card titulo="un titulo nuevo" />
      <Card />
      <Card />
      <Card titulo="otro titulo"/>
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
