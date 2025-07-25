import { useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { getCurrencySymbol } from "../utils/currency";

export const CoffeeContextProvider = ({ children }) => {
  const [coffeesWithoutPrices, setCoffeesWithoutPrices] = useState([]);
  const [coffees, setCoffees] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const [rate] = useLocalStorage("rate", "GEL");
  const exchangeRates = useExchangeRates();
  const symbol = getCurrencySymbol(rate);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((data) => data.json())
      .then((res) => {
        setCoffeesWithoutPrices(res);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((data) => data.json())
      .then((res) => {
        setIngredients(res);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
  if (
    coffeesWithoutPrices.length === 0 ||
    ingredients.length === 0 ||
    (rate !== "GEL" && !exchangeRates)
  )
    return;

  const conversionRate = rate === "GEL" ? 1 : exchangeRates?.[rate] || 1;

  const coffeesWithPrices = coffeesWithoutPrices.map((coffee) => {
    const totalPrice = coffee.ingredientIds.reduce((sum, id) => {
      const ingredient = ingredients.find((ing) => ing.id === id);
      return sum + (ingredient?.price || 0);
    }, 2);

    return {
      ...coffee,
      price: `${symbol} ${parseFloat((totalPrice * conversionRate).toFixed(2))}`,
    };
  });

  setCoffees(coffeesWithPrices);
}, [coffeesWithoutPrices, ingredients, exchangeRates, rate, symbol]);

  return (
    <CoffeeContext.Provider value={{ coffees, ingredients, loading }}>
      {children}
    </CoffeeContext.Provider>
  );
};
