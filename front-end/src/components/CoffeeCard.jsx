import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledCoffeeCard = styled.div`
    color: #3E2723;
    width: 300px;
    height: 300px;
    background: #F5F0E6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`

const StyledTitle = styled.span`
    text-align: center;
    margin: 10px auto;
    font-size: 24px;
    font-weight: bold;
`
const StyledInfo = styled.div`
    margin: 10px auto;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    text-align: start;
`

const InStock = styled.span`
    font-size: 20px;
    color: #8E9775;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const NotInStock = styled.span`
    font-size: 20px;
    color: #B76E37;
    font-weight: bold;
`

const CoffeeCard = ({id, title, ingredientIds, description, isInStock}) => {

    const [ingredients, setIngredients] = useState([])
    const [usedIngredients, setUsedIngredients] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/ingredients")
        .then(data => data.json())
        .then(res => setIngredients(res))
        .then(() => setUsedIngredients(ingredients.filter(ing => ingredientIds.includes(ing.id))))

    }, [])

    let price = 0
    for(let i = 0; i < usedIngredients.length; i++){
        price += usedIngredients[i].price
    }
    price = price.toFixed(2)
return(
    <StyledLink to={`/coffee/${id}`}>
    <StyledCoffeeCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledInfo>
        <span>აღწერა: {description}</span>
        <span>ინგრედიენტები: {usedIngredients.map((ing) => ing.name).join(', ')}</span>
        {!!isInStock && <InStock><span>მარაგშია</span><span>{price}</span></InStock> || <NotInStock>არ არის მარაგში</NotInStock>}
        </StyledInfo>
    </StyledCoffeeCard>
    </StyledLink>
)}

export default CoffeeCard