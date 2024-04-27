import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Main from './layout/Main'
import { routes } from './routes/Routes/Routes'

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
