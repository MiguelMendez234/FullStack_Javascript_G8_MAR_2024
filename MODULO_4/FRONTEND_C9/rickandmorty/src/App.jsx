import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/404'
import MyContext from './contexts/MyContext'
import { useEffect, useState } from 'react'

function App(){

  const [globalState, setGlobalState] = useState({})
  useEffect(() => {
    setGlobalState({
      userName: 'Daniel test',
      password: 'fsdfsd',
      date: '01/09/2023',
      pokemon: {},
    })
  }, [])

  return(
    <MyContext.Provider value={{globalState, setGlobalState}} >
    <Router>
      <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/contacto'>
            <button>
              Contacto
            </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home user={globalState} />} />
        <Route path='/login' element={<Form />} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
    </MyContext.Provider>
  )
}


export default App
