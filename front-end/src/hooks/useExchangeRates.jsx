import { useEffect, useState } from 'react'

export function useExchangeRates(baseCurrency = 'GEL', targetCurrencies = ['USD']) {
  const [rates, setRates] = useState({})
  const [loading, setLoading] = useState(true)

  const API_KEY = 'YOUR_API_KEY'

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`)
      .then(res => res.json())
      .then(data => {
        const selected = {}
        targetCurrencies.forEach(cur => {
          selected[cur] = data.conversion_rates[cur]
        })
        setRates(selected)
        setLoading(false)
      })
  }, [baseCurrency])

  const convert = (amount, currency) => {
    if (!rates[currency]) return null
    return amount * rates[currency]
  }

  return { convert, loading, rates }
}