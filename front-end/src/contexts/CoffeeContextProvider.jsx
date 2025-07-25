import { createContext, useEffect, useState } from "react";

export const CoffeeContext = createContext();

export const CoffeeContextProvider = ({ children }) => {
  const [coffees, setCoffees] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [coffeePrices, setCoffeePrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((data) => data.json())
      .then((res) => {
        setCoffees(res);
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
    const prices = [];
    coffees.forEach((coffee) => prices.push(coffee.id));
    setCoffeePrices(prices);
  }, [coffees, ingredients]);
  return (
    <CoffeeContext.Provider
      value={{ coffees, ingredients, coffeePrices, loading }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
