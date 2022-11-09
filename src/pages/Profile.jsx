import { useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { NavBar } from '../ui/NavBar'

export const Profile = () => {

    const { user } = useContext(AuthContext)

  return (
    <div className='row'>
        <NavBar/>
        <center><h1>Perfil de {user.username} </h1></center>
    </div>
  )
}
