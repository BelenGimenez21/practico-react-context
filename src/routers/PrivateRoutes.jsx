import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  // Colocar el context creado en el archivo 'AuthContext.jsx'
  const { user } = useContext(AuthContext);

  return !user.isLogged
          ? <Navigate to='/login' />
          : children
}
