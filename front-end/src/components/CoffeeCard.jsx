import React from "react";
import { StyledCoffeeCard } from "./styled";

const CoffeeCard = (id, title, ingredientIds, description, isInStock) => {

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