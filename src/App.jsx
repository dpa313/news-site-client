import { RouterProvider } from 'react-router-dom'
import './App.css'
// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from 'react-hot-toast'
import { routes } from './routes/Routes/Routes'

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
      {/* <Toaster/> */}
      <Toaster/>
    </>
  )
}

export default App
