import CoffeePage from "./pages/CoffeePage";
import HomePage from "./pages/HomePage";

const router = [
    {
        element: <HomePage/>,
        path: '/'
    },
    {
        element: <CoffeePage/>,
        path: '/coffees'
    }
]

export default router