import { useEffect, useState } from "react";

export function useExchangeRates(
  baseCurrency = "GEL",
  targetCurrencies = ["USD"],
) {
  const [rates, setRates] = useState({});
  const [loadingPrice, setLoadingPrice] = useState(true);

  const API_KEY = "184708e7058f2283c0d757e3";

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const selected = {};
        targetCurrencies.forEach((cur) => {
          selected[cur] = data.conversion_rates[cur];
        });
        setRates(selected);
        setLoadingPrice(false);
      });
  }, [baseCurrency, targetCurrencies]);

  const convert = (amount, currency) => {
    if (!rates[currency]) return null;
    return amount * rates[currency];
  };

  return { convert, loadingPrice, rates };
}
