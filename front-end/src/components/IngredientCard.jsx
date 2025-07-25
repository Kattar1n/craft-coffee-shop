import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledIngredientCard = styled.div`
    color: #3E2723;
    width: 300px;
    height: 400px;
    background: #F5F0E6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`

const StyledName = styled.span`
    text-align: center;
    margin: 10px auto;
    font-size: 24px;
    font-weight: bold;
`
const StyledImage = styled.div`
    min-height: 160px;
    min-width: 280px;
    background-image: url();
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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

const IngredientCard = ({id, name, price, description, picture, isInStock}) => {
    console.log(picture)

return(
    <StyledLink to={`/ingredients/${id}`}>
    <StyledIngredientCard>
        <StyledName>{name}</StyledName>
        <StyledImage></StyledImage>
        <StyledInfo>
        <span>აღწერა: {description}</span>
        {!!isInStock && <InStock><span>მარაგშია</span><span>{price}</span></InStock> || <NotInStock>არ არის მარაგში</NotInStock>}
        </StyledInfo>
    </StyledIngredientCard>
    </StyledLink>
)}

export default IngredientCard