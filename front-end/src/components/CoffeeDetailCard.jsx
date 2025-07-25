import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import cardImage from "/assets/main/coffeeDetail.jpg";
import { StyledLoadingText } from "../pages/Styled";
import { CoffeeContext } from "../contexts/CoffeeContext";

const StyledLink = styled(Link)`
  color: #3e2723;
  text-decoration: none;
  margin: 0 10px;
`;

const StyledDetailWrapper = styled.div`
  color: #3e2723;
  border-radius: 20px;
  margin: 20px auto;
  min-width: 340px;
  max-width: 680px;
  min-height: 440px;
  background-color: #f0e5d8;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const StyledCoffeePicture = styled.div`
  margin: 20px;
  height: 400px;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-image: url(${cardImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledCoffeeInformation = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledCoffeeTitle = styled.span`
  font-size: 32px;
  height: 100px;
  font-weight: bold;
`;
const StyledCoffeeDescription = styled.span`
  font-size: 16px;
  height: 180px;
`;
const StyledCoffeeIngredients = styled.span`
  font-size: 16px;
  height: 100px;
`;
const InStock = styled.span`
  font-size: 20px;
  color: #8e9775;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NotInStock = styled.span`
  font-size: 20px;
  color: #b76e37;
  font-weight: bold;
`;

const CoffeeDetailCard = ({ id }) => {
  const { coffees, ingredients, loading } = useContext(CoffeeContext);
  const [coffee, setCoffee] = useState({});
  const [usedIngredients, setUsedIngredients] = useState([]);
  useEffect(() => {
    setCoffee(coffees.find((coffee) => coffee.id == id));
  }, [coffees, id]);
  useEffect(() => {
    if (!coffee?.ingredientIds) return;

    setUsedIngredients(
      ingredients.filter((ing) => coffee.ingredientIds.includes(ing.id)),
    );
  }, [ingredients, coffee]);

  if (loading) return <StyledLoadingText>იტვირთება...</StyledLoadingText>;

  return (
    <StyledDetailWrapper>
      <StyledCoffeePicture></StyledCoffeePicture>
      <StyledCoffeeInformation>
        <StyledCoffeeTitle>{coffee?.title}</StyledCoffeeTitle>
        <StyledCoffeeDescription>
          აღწერა: {coffee?.description}
        </StyledCoffeeDescription>
        <StyledCoffeeIngredients>
          ინგრედიენტები: {usedIngredients.map((ing) => ing.name).join(", ")}
        </StyledCoffeeIngredients>
        {(!!coffee?.isInStock && (
          <InStock>
            <span>მარაგშია</span>
            <span>{coffee?.price}</span>
          </InStock>
        )) || <NotInStock>არ არის მარაგში</NotInStock>}
      </StyledCoffeeInformation>
    </StyledDetailWrapper>
  );
};

export default CoffeeDetailCard;
