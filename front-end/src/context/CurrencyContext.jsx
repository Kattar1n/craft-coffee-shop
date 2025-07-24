import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_KEY = 'e95810a480335d3fd4d4b0cc';
  const API_URL = `https://v6.exchangerate-api.com/v6/e95810a480335d3fd4d4b0cc/latest/USD`;

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.result === 'success') {
          setExchangeRates(response.data.conversion_rates);
        } else {
          setError('Failed to fetch exchange rates: ' + response.data['error-type']);
        }
      } catch (err) {
        console.error("Error fetching exchange rates:", err);
        setError('Error fetching exchange rates. Please check your API key and network connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertPrice = (priceInUSD) => {
    if (!exchangeRates || currency === 'USD') {
      return priceInUSD;
    }
    const rate = exchangeRates[currency];
    return priceInUSD * (rate || 1);
  };

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'GEL':
        return '₾';
    
      default:
        return '$';
    }
  };

  const formattedPrice = (priceInUSD) => {
    const converted = convertPrice(priceInUSD);
    const symbol = getCurrencySymbol();

    return `${symbol} ${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        formattedPrice,
        exchangeRates,
        loading,
        error,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};