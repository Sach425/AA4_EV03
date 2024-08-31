import { useState } from 'react'

//importado los modulos de Firebase
import appFirebase from '../src/credenciales'
//Detectar el estado del Login en la aplicación
import {getAuth, onAuthStateChanged} from 'firebase/auth'  
const auth = getAuth(appFirebase)

//importando los componentes
import Login from "./components/Login";
import Home from "./components/Home";


import './App.css'

function App() {
  
  const [usuario, setUsuario] = useState (null)
  
  //confirma si hay alguien logiado
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })

  return (
   <div>
      {usuario ? <Home correoUSuario = {usuario.email} /> : <Login/> }
   </div>
  )
}

export default App
