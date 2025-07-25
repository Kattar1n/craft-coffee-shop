import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import cardImage from "/assets/main/coffeeCard.jpg";
import { CoffeeContext } from "../contexts/CoffeeContext";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCoffeeCard = styled.div`
  color: #3e2723;
  width: 300px;
  height: 400px;
  background: #f5f0e6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  transition: 300ms ease;

  &:hover {
    background: #f0e5d8;
  }
`;

const StyledTitle = styled.span`
  text-align: center;
  margin: 10px auto;
  font-size: 24px;
  font-weight: bold;
`;
const StyledImage = styled.div`
  margin: 10px;
  min-height: 160px;
  min-width: 280px;
  background-image: url(${cardImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledInfo = styled.div`
  margin: 10px auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  text-align: start;
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

const CoffeeCard = ({
  id,
  title,
  ingredientIds,
  description,
  isInStock,
  price,
}) => {
  const { ingredients, loading } = useContext(CoffeeContext);
  const [usedIngredients, setUsedIngredients] = useState([]);

  useEffect(() => {
    setUsedIngredients(
      ingredients.filter((ing) => ingredientIds.includes(ing.id))
    );
  }, [ingredients, ingredientIds]);

  if (loading)
    return (
      <StyledCoffeeCard>
        <StyledTitle>იტვირთება...</StyledTitle>
      </StyledCoffeeCard>
    );

  return (
    <StyledLink to={`/coffee/${id}`}>
      <StyledCoffeeCard>
        <StyledTitle>
          {title} <br />
          <StyledImage></StyledImage>
        </StyledTitle>
        <StyledInfo>
          <span>აღწერა: {description}</span>
          <span>
            ინგრედიენტები: {usedIngredients.map((ing) => ing.name).join(", ")}
          </span>
          {(!!isInStock && (
            <InStock>
              <span>მარაგშია</span>
              <span>{price}</span>
            </InStock>
          )) || <NotInStock>არ არის მარაგში</NotInStock>}
        </StyledInfo>
      </StyledCoffeeCard>
    </StyledLink>
  );
};

export default CoffeeCard;
