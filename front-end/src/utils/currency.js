export function getCurrencySymbol(rate) {
  switch (rate) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GEL":
    default:
      return "₾";
  }
}
