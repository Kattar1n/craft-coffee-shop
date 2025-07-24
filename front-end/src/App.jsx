export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoffeesPage from './pages/CoffeesPage'; // You'll implement this next
import IngredientsPage from './pages/IngredientsPage'; // You'll implement this later
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1; /* Ensures content takes available space */
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coffees" element={<CoffeesPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            {/* Add routes here as you build out pages */}
          </Routes>
        </MainContent>
        {/* Potentially a Footer here later */}
      </AppContainer>
    </Router>
  );
};


function App() {

  return (
    <>
    <HomePage/>
    </>
  )
}