import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import MapContainer from './pages/Map.jsx';
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
      <MapContainer />
    )
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
