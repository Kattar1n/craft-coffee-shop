import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router';
import './app.css'


// import Layout from './layout/Layout';
// import HomePage from './pages/HomePage'
// import CoffeePage from './pages/CoffeePage';
// import CoffeeDetailPage from './pages/CoffeeDetailPage';
// import IngredientPage from './pages/IngredientPage';
// import IngredientDetailPage from './pages/IngredientDetailPage';


function App() {

  return (
    <>
      <RouterProvider router={createBrowserRouter(router)}/>
    </>
  )
}

export default App
