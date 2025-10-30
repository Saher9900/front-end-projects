import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import '@fontsource/cairo'
import 'bootstrap/dist/css/bootstrap.min.css'

// import components

import Layout from './Layout'
import NaveBar from './shared/NaveBar/NaveBar'
import NewProducts from './pages/NewProducts/NewProducts'
import AllBooks from './pages/AllBooks/AllBooks'
import Notebooks from './pages/Notebooks/Notebooks'
import Reviews from './pages/Reviews/Reviews'
import Home from './pages/Home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {index: true, element: <Home />},
        {path: '/allbooks', element: <AllBooks />},
        {path: '/newproducts', element: <NewProducts />},
        {path: 'notebooks', element: <Notebooks />},
        {path: 'reviews', element: <Reviews />},
      ]
    }
  ], {basename: '/front-end-projects'});
  return (
    <RouterProvider router={router} />
  )
}

export default App
