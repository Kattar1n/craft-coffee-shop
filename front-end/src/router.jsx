import Header from "./components/Header";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";
import CoffeePage from "./pages/CoffeePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import IngredientDetailPage from "./pages/IngredientDetailPage";
import IngredientPage from "./pages/IngredientPage";

const router = [
    {
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
        index: '/'
    },
    {
        element: <CoffeePage/>,
        path: '/coffee'
    },
    {
        element: <IngredientPage/>,
        path: '/ingredients'
    },
    {
        element: <CoffeeDetailPage/>,
        path: '/coffee/:coffeeId'
    },
    {
        element: <IngredientDetailPage/>,
        path: '/ingredients/:ingredientId'
    },
    {
        errorElement: <ErrorPage/>
    },
]

export default router