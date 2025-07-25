import Header from "./components/Header";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";
import CoffeePage from "./pages/CoffeePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import IngredientDetailPage from "./pages/IngredientDetailPage";
import IngredientPage from "./pages/IngredientPage";

const router = [
  {
    element: <HomePage />,
    errorElement: <ErrorPage />,
    index: "/",
  },
  {
    element: <CoffeePage />,
    errorElement: <ErrorPage />,
    path: "/coffee",
  },
  {
    element: <IngredientPage />,
    errorElement: <ErrorPage />,
    path: "/ingredients",
  },
  {
    element: <CoffeeDetailPage />,
    errorElement: <ErrorPage />,
    path: "/coffee/:coffeeId",
  },
  {
    element: <IngredientDetailPage />,
    errorElement: <ErrorPage />,
    path: "/ingredients/:ingredientId",
  },
  {
    path: "",
    errorElement: <ErrorPage />,
  },
];

export default router;
