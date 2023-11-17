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
import RelevantPage from './components/RelevantPage.jsx';
import Latestpage from './components/Latestpage.jsx';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <App/>,
        children: [
          {
            path: '',
            element: <RelevantPage />
          },
          {
            path: '/latest',
            element: <Latestpage />
          }
        ]
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
