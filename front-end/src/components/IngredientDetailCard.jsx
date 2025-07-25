import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
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
  margin: 0 auto;
  min-width: 340px;
  max-width: 680px;
  min-height: 440px;
  background-color: #f0e5d8;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const StyledIngredientPicture = styled.div`
  margin: 20px;
  height: 400px;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-image: url(${(props) => props.$picture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledIngredientInformation = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const StyledIngredientName = styled.span`
  font-size: 32px;
  height: 100px;
  font-weight: bold;
`;
const StyledIngredientDescription = styled.span`
  font-size: 16px;
  height: 180px;
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
  color: #b76e37;
  font-weight: bold;
`;

const IngredientDetailCard = ({ id }) => {
  const {ingredients, loading} = useContext(CoffeeContext)
  const [ingredient, setIngredient] = useState({});
  useEffect(() => {
    setIngredient(ingredients.find(ing => ing.id == id))
  }, [ingredients, id]);

  if (loading) return <StyledLoadingText>იტვირთება...</StyledLoadingText>;

  return (
    <StyledDetailWrapper>
      <StyledIngredientPicture $picture={ingredient?.picture} />
      <StyledIngredientInformation>
        <StyledIngredientName>{ingredient?.name}</StyledIngredientName>
        <StyledIngredientDescription>
          აღწერა: {ingredient?.description}
        </StyledIngredientDescription>
        {(!!ingredient?.isInStock && (
          <InStock>
            <span>მარაგშია</span>
            <span>{ingredient?.price}</span>
          </InStock>
        )) || <NotInStock>არ არის მარაგში</NotInStock>}
      </StyledIngredientInformation>
    </StyledDetailWrapper>
  );
};

export default IngredientDetailCard;
