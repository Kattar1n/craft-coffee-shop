import { useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeContext";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { getCurrencySymbol } from "../utils/currency";
import useLocalStorageRate from "../hooks/useLocalStorageRate";

export const CoffeeContextProvider = ({ children }) => {
  const [coffeesWithoutPrices, setCoffeesWithoutPrices] = useState([]);
  const [coffees, setCoffees] = useState([]);
  const [rawIngredients, setRawIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const [rate, setRate] = useLocalStorageRate();
  const exchangeRates = useExchangeRates();
  const symbol = getCurrencySymbol(rate);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((data) => data.json())
      .then((res) => {
        setCoffeesWithoutPrices(res);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((data) => data.json())
      .then((res) => {
        setRawIngredients(res);
      });
  }, []);
  useEffect(() => {
    if (
      coffeesWithoutPrices.length === 0 ||
      rawIngredients.length === 0 ||
      (rate !== "GEL" && !exchangeRates)
    )
      return;

    const conversionRate = rate === "GEL" ? 1 : exchangeRates?.[rate] || 1;

    const coffeesWithPrices = coffeesWithoutPrices.map((coffee) => {
      const totalPrice = coffee.ingredientIds.reduce((sum, id) => {
        const ingredient = rawIngredients.find((ing) => ing.id === id);
        return sum + (ingredient?.price || 0);
      }, 2);

      return {
        ...coffee,
        price: `${symbol} ${parseFloat((totalPrice * conversionRate).toFixed(2))}`,
      };
    });

    const convertedIngredients = rawIngredients.map((ing) => {
      const ingredientPrice = ing.price;

      return {
        ...ing,
        price: `${symbol} ${parseFloat(ingredientPrice * conversionRate).toFixed(2)}`,
      };
    });

    setCoffees(coffeesWithPrices);
    setIngredients(convertedIngredients);
    setLoading(false);
  }, [rate, coffeesWithoutPrices, rawIngredients, exchangeRates, symbol]);

  return (
    <CoffeeContext.Provider
      value={{ coffees, ingredients, loading, rate, setRate }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
