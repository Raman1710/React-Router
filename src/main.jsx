import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

//old syntax
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },

//       {
//         path: "/about",
//         element : <About/>
//       },

//       {
//         path: "/contactus",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])


// new syntax 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = <Layout/>>
        <Route path='' element = <Home/> />
        <Route path='about' element = <About/> />
        <Route path='contactus' element = <ContactUs/> />
        <Route path='user/:userid' element = <User/> />
        <Route 
        loader = {githubInfoLoader}
        path='github' 
        element = <Github/> />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
