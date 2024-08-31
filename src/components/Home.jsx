import React, { useState, useEffect } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import './Register.css'; // Asegúrate de importar el archivo CSS

const auth = getAuth(appFirebase);

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        entryDate: '',
        email: ''
    });

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Cargar usuarios del almacenamiento local al montar el componente
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
        setUsuarios(usuariosGuardados);
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, idNumber, entryDate, email } = formData;

        // Crear objeto usuario
        const nuevoUsuario = {
            firstName,
            lastName,
            idNumber,
            entryDate,
            email
        };

        // Obtener usuarios del almacenamiento local o inicializar array
        let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Añadir nuevo usuario al array
        usuariosGuardados.push(nuevoUsuario);

        // Guardar el array actualizado en el almacenamiento local
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

        // Actualizar el estado de usuarios
        setUsuarios(usuariosGuardados);

        // Limpiar el formulario después de registrar
        setFormData({
            firstName: '',
            lastName: '',
            idNumber: '',
            entryDate: '',
            email: ''
        });

        alert('Usuario registrado exitosamente.');
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
            alert('Has cerrado sesión exitosamente.');
            // Opcional: Redirigir a la página de inicio o login
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    };

    return (
        <div className="register-container">
            <div className="sidebar">
                <h2>Usuarios Registrados</h2>
                <ul>
                    {usuarios.map((usuario, index) => (
                        <li key={index}>{usuario.firstName} {usuario.lastName}</li>
                    ))}
                </ul>
            </div>
            <main className="content">
                <h1>Registro de Usuario</h1>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">
                        Nombre: <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese su nombre"
                    />

                    <label htmlFor="lastName">
                        Apellidos: <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese sus apellidos"
                    />

                    <label htmlFor="idNumber">
                        Cédula: <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese su cédula"
                    />

                    <label htmlFor="entryDate">
                        Fecha de Ingreso: <span className="required">*</span>
                    </label>
                    <input
                        type="date"
                        id="entryDate"
                        value={formData.entryDate}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">
                        Correo Electrónico: <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Ingrese su correo electrónico"
                    />

                    <button type="submit">Registrar</button>
                </form>
                <button className='btnout' onClick={handleSignOut}>Salir</button>
            </main>
        </div>
    );
};

export default Register;
