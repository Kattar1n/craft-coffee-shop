import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import cardImage from '/assets/main/coffeeCard.jpg'
import { useExchangeRates } from "../hooks/useExchangeRates";
import useLocalStorage from "../hooks/useLocalStorage";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledCoffeeCard = styled.div`
    color: #3E2723;
    width: 300px;
    height: 400px;
    background: #F5F0E6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    transition: 300ms ease;

    &:hover{
        background: #F0E5D8;
    }
`

const StyledTitle = styled.span`
    text-align: center;
    margin: 10px auto;
    font-size: 24px;
    font-weight: bold;
`
const StyledImage = styled.div`
    margin: 10px;
    min-height: 160px;
    min-width: 280px;
    background-image: url(${cardImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const StyledInfo = styled.div`
    margin: 10px auto;
    width: 280px;
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
    
    const [exchangeRate, setExchangeRate] = useLocalStorage('rate', "GEL")

    const [ingredients, setIngredients] = useState([])
    const [usedIngredients, setUsedIngredients] = useState([])
    const [coffeePrice, setCoffeePrice] = useState(0)

    useEffect(() => {
        fetch("http://localhost:3000/ingredients")
        .then(data => data.json())
        .then(res => setIngredients(res))
    }, [])

    useEffect(() => {
        setUsedIngredients(ingredients.filter(ing => ingredientIds.includes(ing.id)))
    }, [ingredients, ingredientIds])

    useEffect(() => {
        const total = usedIngredients.reduce((sum, ing) => sum + ing.price, 2)
        setCoffeePrice(total.toFixed(2))
    }, [usedIngredients])


return(
    <StyledLink to={`/coffee/${id}`}>
    <StyledCoffeeCard>
        <StyledTitle>{title} <br />
        <StyledImage></StyledImage>
        </StyledTitle>
        <StyledInfo>
        <span>აღწერა: {description}</span>
        <span>ინგრედიენტები: {usedIngredients.map((ing) => ing.name).join(', ')}</span>
        {!!isInStock && <InStock><span>მარაგშია</span><span>₾{coffeePrice}</span></InStock> || <NotInStock>არ არის მარაგში</NotInStock>}
        </StyledInfo>
    </StyledCoffeeCard>
    </StyledLink>
)}

export default CoffeeCard