import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CoffeeContextProvider } from './contexts/CoffeeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <CoffeeContextProvider>
        <App />
    </CoffeeContextProvider>
)
