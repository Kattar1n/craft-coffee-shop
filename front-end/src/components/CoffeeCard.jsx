import React from "react";
import styled from "styled-components";

const StyledCoffeeCard = styled.div`
    width: 200px;
    height: 300px;
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    color: black;
`

const CoffeeCard = ({id, title, ingredientIds, description, isInStock}) => {

return(
    <StyledCoffeeCard>
        <h2>{title}</h2>
        <span>{ingredientIds}</span>
        <span>{description}</span>
        <span>{isInStock}</span>
        <span>{id}</span>
    </StyledCoffeeCard>
)}

export default CoffeeCard