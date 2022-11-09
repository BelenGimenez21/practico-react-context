import React from 'react'
import { NavBar } from '../ui/NavBar'
import { useState } from 'react'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor

export const Login = () => {

  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      }
  }

  const [state, setState] = useState({
      email: '',
      password: ''
  })

  const { email, password } = state;

  const handleInputChange = ({ target }) => {
      setState({
          ...state,
          [target.name]: target.value
      })
  };

  const handleSubmit = (e) => {
      e.preventDefault();


      (async () => {
          options.body = JSON.stringify({ email, password })

          const resp = await fetch('http://localhost:3000/loginUser', options)

          if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');

          const data = await resp.json()
          console.log(data);

      })()
  };


  return (
    <div className='row'>
      <NavBar/>
      <center><h1>Iniciar Sesión</h1></center>
      <div className="col-md-5 mx-auto align-self-center col-lg-3 col-sm-6 col-sx-12">
        <form
            onSubmit={handleSubmit}
            className='border p-4 rounded bg-white'
        >
            <label htmlFor='email'>Email:</label>
            <input
                type='text'
                name='email'
                autoComplete='off'
                className='form-control mb-3'
                onChange={handleInputChange}
                value={email}
                autoFocus={true}
            />

            <label htmlFor="password">Contraseña:</label>
            <input
                type='password'
                name='password'
                autoComplete='off'
                className='form-control'
                onChange={handleInputChange}
                value={password}
            />

            <button
                type='submit'
                className='btn btn-sm btn-primary mt-4'
            >
                Ingresar
            </button>
        </form>
      </div>
    </div>
  )
}
