import { createContext, useState } from "react"

export const CoffeeContext = createContext()

export const CoffeeContextProvider = ({children}) => {
    const [coffees, setCoffees] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/coffees")
        .then(data => data.json())
        .then(res => {
            setCoffees(res)
            setLoading(false)
        })
    }, [])

    return (
        <CoffeeContext.Provider value={{coffees, loading}}>
            {children}
        </CoffeeContext.Provider>
    )
}