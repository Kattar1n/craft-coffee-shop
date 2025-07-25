import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IngredientCard from './IngredientCard'

const StyledWrapper = styled.div`
    text-align: center;
    position: relative;
    color: #3E2723;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const StyledIngredientWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const IngredientWrapper = () => {

    const [ingredients, setIngredients] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:3000/ingredients")
        .then(data => data.json())
        .then(res => {
            setIngredients(res)
            setLoading(false)
        })
    }, [])

    if(loading) return <StyledLoadingText>იტვირთება...</StyledLoadingText>

  return (
    <StyledWrapper>
        <h1>ინგრედიენტების სია</h1>
        <StyledIngredientWrapper>
            {ingredients.map((ing) => <IngredientCard key={ing.id} id={ing.id} name={ing.name} price={ing.price} description={ing.description} picture={ing.picture} isInStock={ing.isInStock}/>)}
        </StyledIngredientWrapper>
    </StyledWrapper>
  )
}

export default IngredientWrapper