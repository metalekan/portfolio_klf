import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Logo from './components/Logo.jsx';
import BookCover from './components/BookCover.jsx';
import Products from './components/Products.jsx';

import './index.css'
import App from './App.jsx';
import Portfolio from './components/Portfolio.jsx';
import Fliers from './components/Fliers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />
      }
    ]
  }
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   < RouterProvider router={router}/>
  </React.StrictMode>,
)
