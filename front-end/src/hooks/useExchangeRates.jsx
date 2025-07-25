import { useState, useEffect } from "react";

const API_KEY = "e95810a480335d3fd4d4b0cc";

export const useExchangeRates = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/GEL`
        );
        const data = await response.json();

        if (data.result !== "success") throw new Error(data["error-type"]);

        setRates({
          GEL: 1,
          USD: data.conversion_rates.USD,
          EUR: data.conversion_rates.EUR,
        });
      } catch (err) {
        console.error("Failed to fetch exchange rates:", err);

        setRates({
          GEL: 1,
          USD: 0.36,
          EUR: 0.34,
        });
      }
    };

    fetchRates();
  }, []);

  return rates;
};

// შემთხვევით ინფინიტ ლუპში მოვხვდი და ტოკენის გამოყენების რაოდენობა ამომეწურა მგონი
