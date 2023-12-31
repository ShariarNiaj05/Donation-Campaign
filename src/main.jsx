import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import MyCreatedRoute from './Router/Route.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={MyCreatedRoute} />
  </React.StrictMode>,
)
