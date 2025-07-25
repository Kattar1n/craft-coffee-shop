import React, { useContext } from "react";
import styled from "styled-components";
import CoffeeCard from "./CoffeeCard";
import { StyledLoadingText } from "../pages/Styled";
import { CoffeeContext } from "../contexts/CoffeeContext";

const StyledWrapper = styled.div`
  text-align: center;
  position: relative;
  color: #3e2723;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const StyledCoffeeWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CoffeeWrapper = () => {
  const { coffees, loading } = useContext(CoffeeContext);

  if (loading) return <StyledLoadingText>იტვირთება...</StyledLoadingText>;
  return (
    <StyledWrapper>
      <h1>ყავის სია</h1>
      <StyledCoffeeWrapper>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            ingredientIds={coffee.ingredientIds}
            description={coffee.description}
            isInStock={coffee.isInStock}
            price={coffee.price}
          />
        ))}
      </StyledCoffeeWrapper>
    </StyledWrapper>
  );
};

export default CoffeeWrapper;
