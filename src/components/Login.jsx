import React, { useState } from 'react'
import Imagen from "../assets/logoSC.png";


import appFirebase from '../credenciales';
import { getAuth,signInWithEmailAndPassword  } from 'firebase/auth';
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functionAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña)
        } catch (error) {
          alert("El correo o la contraseña son incorrectos")
        }
        
    }
      
    

  return (
    <div className='conteiner'>
      <h2 className='text-center'>Evidencia GA7-220501096-AA4-EV03 </h2>
        <h3 className='text-center'> Registro de Usuarios</h3>
      <div className='row'> 
        {/*columna mas pequeña */}
        <div className='col-md-4'>
          <div className="padre">
            <div className="card card-body shadow-lg" >
              <h5>Ingrese correo y contraseña para iniciar</h5>
              <form onSubmit={functionAutenticacion}>
                  
                <input type='text' placeholder='Ingresar Email' className='cajatexto' id='email' />
                <input type='password' placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
                <button className='btnform'>Iniciar</button>
              </form>
            </div>
          </div>
        </div>
          {/*columna mas pequeña */}
        <div className='col-md-8'>
              <div className='texto-inferior'>
                <p>Correo: calderon.sa@gmail.com</p>
                 <p>Contraseña: Calderon12345</p>
             </div>
          
          <img src={Imagen} alt='' className='tamaño-imagen' />
    

          
        </div>
      </div>
    </div>
  )
}

export default Login
