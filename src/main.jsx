import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

// One of the ways of routing
const router = createBrowserRouter(
  createRoutesFromElements(
    // Sandwich parent route
    <Route path='/' element={<Layout/>}>
      {/* self closing child route */}
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About />} />  {/* the 'about' will come after the '/' as it is within the parent route */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
