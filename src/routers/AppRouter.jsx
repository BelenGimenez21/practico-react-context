import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthRoutes } from './AuthRoutes'
import { PrivateRoutes } from './PrivateRoutes'

//Rutas Públicas
import { Home } from '../pages/Home'

//Rutas de Autenticación
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

//Rutas Privadas de usuario
import { Profile } from '../pages/Profile'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/*' element={ 
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        } />

        <Route path='/login' element={
          <AuthRoutes>
            <Login/>
          </AuthRoutes>
        } />

        <Route path='/register' element={
          <AuthRoutes>
            <Register/>
          </AuthRoutes>
        } />

        <Route path='/profile' element={
          <PrivateRoutes>
            <Profile/>
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
