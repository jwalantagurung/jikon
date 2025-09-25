import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import About from './pages/About.jsx'
import Anime_details from './pages/Anime_details.jsx'


const router= createBrowserRouter([{
  path:'/',
  element:<App/>, 
  errorElement: <NotFoundPage/>
},

{
  path:'/Contact',
  element: <Contact/>,
},
{
path:'/about',
element:<About/>
},
{
  path:'/Anime_details',
  element:<Anime_details/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)
