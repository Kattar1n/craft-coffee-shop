import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CoffeeCard from './CoffeeCard'

const StyledWrapper = styled.div`
    text-align: center;
    position: relative;
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
    justify-content: center;
`

const HomeCoffeeWrapper = () => {

    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/coffees")
        .then(data => data.json())
        .then(res => setCoffees(res))
    }, [])

  return (
    <StyledWrapper>
        <h1>შემოთავაზებული ყავები</h1>
        <StyledCoffeeWrapper>
            {coffees.filter(coffee => coffee.isInStock).slice(0,4).map((coffee) => <CoffeeCard key={coffee.id} id={coffee.id} title={coffee.title} ingredientIds={coffee.ingredientIds} description={coffee.description} isInStock={coffee.isInStock}/>)}
        </StyledCoffeeWrapper>
    </StyledWrapper>
  )
}

export default HomeCoffeeWrapper