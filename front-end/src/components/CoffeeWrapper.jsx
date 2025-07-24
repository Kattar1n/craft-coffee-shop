import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CoffeeCard from './CoffeeCard'

const StyledCoffeeWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const CoffeeWrapper = () => {

    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/coffees")
        .then(data => data.json())
        .then(res => setCoffees(res))
    }, [])

  return (
    <StyledCoffeeWrapper>
        {coffees.map((coffee) => <CoffeeCard key={coffee.id} id={coffee.id} title={coffee.title} ingredientIds={coffee.ingredientIds} description={coffee.description} isInStock={coffee.isInStock}/>)}
    </StyledCoffeeWrapper>
  )
}

export default CoffeeWrapper