import React from 'react'
import { NavLink } from 'react-router-dom'
// Corregir los estilos y modificar las etiquetas "NavLink" por los componentes NavLink 
// que provee react-router-dom
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Página de Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Registrarme</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                <li><hr className="dropdown-divider" hr/></li>
                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>Mi Perfil</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" input/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
