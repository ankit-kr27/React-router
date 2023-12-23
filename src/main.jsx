import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact Us/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {githubLoader} from './Components/Github/Github.jsx'

// One of the ways of routing
const router = createBrowserRouter(
  createRoutesFromElements(
    // Sandwich parent route
    <Route path='/' element={<Layout/>}>
      {/* self closing child route */}
      <Route path='' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About />} />  {/* the 'about' will come after the '/' as it is within the parent route */}
      <Route path='contact' element={<Contact/>} />
      <Route path='user' element={<User />}>
        <Route path=':userId' element={<User />} />
      </Route>
      {/* It does advance preprocessing before loading the page */}
      <Route 
        loader={githubLoader} 
        path='github' 
        element={<Github/>} 
      />
      <Route path='*' element ={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
