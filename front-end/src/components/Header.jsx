import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CoffeeShopLogo from './CoffeeShopLogo';
import { useCurrency } from './context/CurrencyContext';

const HeaderContainer = styled.header`
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding: 0 20px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

  li {
    a {
      font-size: 1.1rem;
      font-weight: 500;
      transition: color 0.3s ease;
      &:hover {
        color: var(--color-secondary);
      }
    }
  }
`;

const CurrencyToggle = styled.button`
  background-color: var(--color-accent);
  color: var(--color-text-light);
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A0522D; /* Slightly darker Sienna */
  }
`;

const Header = () => {
  const { currency, setCurrency, loading, error } = useCurrency();

  const toggleCurrency = () => {
    setCurrency(prevCurrency => (prevCurrency === 'USD' ? 'GEL' : 'USD'));
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <CoffeeShopLogo />
      </Link>
      <Nav>
        <ul>
          <li><Link to="/coffees">Coffees</Link></li>
          <li><Link to="/ingredients">Ingredients</Link></li>
        </ul>
      </Nav>
      <CurrencyToggle onClick={toggleCurrency} disabled={loading}>
        {loading ? 'Loading...' : (error ? 'Error' : currency)}
      </CurrencyToggle>
    </HeaderContainer>
  );
};

export default Header;