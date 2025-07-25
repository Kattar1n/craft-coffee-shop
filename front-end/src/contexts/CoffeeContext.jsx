import { createContext } from "react";

export const CoffeeContext = createContext({
  coffees: [],
  ingredients: [],
  loading: true,
  rate: "USD",
  setRate: () => {},
});
