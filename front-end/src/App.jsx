import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router';
import './app.css'

function App() {

  return (
    <>
      <RouterProvider router={createBrowserRouter(router)}/>
    </>
  )
}

export default App
