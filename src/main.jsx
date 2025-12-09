import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Shop from './Shop.jsx'

const routerProvider= createBrowserRouter([
  {
    path: "/about",
    element : <About/>,
  },
  {
    path: "shop",
    element: <Shop/>

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider}/>
  </StrictMode>,
)
