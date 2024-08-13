import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Contatos from './pages/Contatos'
import Produtos from './pages/Produtos'
import ProductView from './pages/ProductView'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "contato",
    element: <Contatos />
  },
  {
    path: "produtos",
    element: <Produtos/>,
  },
  {
    path: "produtos/:productId",
    element: <ProductView/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
