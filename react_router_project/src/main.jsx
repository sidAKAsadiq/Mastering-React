import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About_us from './components/About_us/About_us.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { github_data_loader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children: [
//       {
//         path : '',
//         element: <Home />
//       },
//       {
//         path : 'About-us',
//         element: <About_us />
//       },
//       {
//         path : 'Contact',
//         element : <Contact />
//       },
//       {
//         path : 'Github',
//         element : <Github />
//       }
//     ]
//   }
// ])

//another syntax
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path= "" element = {<Home />} />
      <Route path= "About-us" element = {<About_us />} />
      <Route path= "Contact" element = {<Contact />} />
      <Route path= "user/:user_id" element = {<User />} />
      <Route 
      loader = {github_data_loader}
      path= "Github/:github_id" 
      element = {<Github />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
