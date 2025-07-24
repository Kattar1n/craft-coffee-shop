import React from "react";
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
`

const CoffeeCard = ({id, title, ingredientIds, description, isInStock}) => {

return(
    <StyledLink to={`/coffee/${id}`}>
    <StyledCoffeeCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledInfo>
        <span>აღწერა: {description}</span>
        <span>ინგრედიენტები: {ingredientIds}</span>
        </StyledInfo>
    </StyledCoffeeCard>
    </StyledLink>
)}

export default CoffeeCard