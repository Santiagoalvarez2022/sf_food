import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:(
      <Home />
    )
  },
  {
    path:'/map',
    element:(
      <Map />
    )
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
