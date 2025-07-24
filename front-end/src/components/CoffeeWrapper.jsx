import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CoffeeCard from './CoffeeCard'

const StyledWrapper = styled.div`
    color: #3E2723;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const StyledCoffeeWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
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
    <StyledWrapper>
        <h1>ყავის სია</h1>
        <StyledCoffeeWrapper>
            {coffees.map((coffee) => <CoffeeCard key={coffee.id} id={coffee.id} title={coffee.title} ingredientIds={coffee.ingredientIds} description={coffee.description} isInStock={coffee.isInStock}/>)}
        </StyledCoffeeWrapper>
    </StyledWrapper>
  )
}

export default CoffeeWrapper