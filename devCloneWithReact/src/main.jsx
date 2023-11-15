import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import  CreateAccComp  from './components/CreateAccComp.jsx';
import LoginComp from './components/LoginComp.jsx';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <App/>
      },
      {
        path: 'create-account',
        element: <CreateAccComp />
      },
      {
        path: 'login',
        element: <LoginComp />
      }
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
 
)
