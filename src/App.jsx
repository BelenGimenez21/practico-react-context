import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'

const { Provider } = AuthContext

function App() {
  const user = {
    isLogged: false,
    username: 'belen'
  }

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <Provider value={{
      user,
      tasks
    }}>
      <AppRouter />
    </Provider>
  )
}

export default App
