import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Layout from './layout/Layout';
import HomePage from './pages/HomePage'
import CoffeePage from './pages/CoffeePage';
import CoffeeDetailPage from './pages/CoffeeDetailPage';
import IngredientPage from './pages/IngredientPage';
import IngredientDetailPage from './pages/IngredientDetailPage';


function App() {

  return (
    <Layout>
      <Routes>
        <Route path={'/'} Component={HomePage}/>
        <Route path={'/coffees/'} Component={CoffeePage}/>
        {/* <Route path={'/coffees/'} Component={CoffeeDetailPage}/> */}
        <Route path={'/ingredients/'} Component={IngredientPage}/>
        {/* <Route path={'/ingredients/'} Component={IngredientDetailPage}/> */}
      </Routes>
    </Layout>
  )
}

export default App
