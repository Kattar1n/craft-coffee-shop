import React from "react";
import { Link, Outlet } from "react-router";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";

const StyledHeaderWrapper = styled.header`
  position: relative;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  background: #3e2f2f;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
`;
const StyledLinkWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const StyledLink = styled(Link)`
  color: #faf9f6;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  transition: 250ms ease;

  &:hover {
    color: #b76e37;
  }
`;
const StyledCurrencyButton = styled.button`
  margin: 10px;
  height: 30px;
  background: #000;
  border: none;
  border-radius: 10px;
  color: #faf9f6;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: 100ms ease;

  &:hover {
    background: #333333;
    color: #b76e37;
  }
`;

const Header = () => {
  const [rate, setRate] = useLocalStorage("rate", "GEL");

  const changeRate = () => {
  if (rate === "GEL") setRate("USD");
  else if (rate === "USD") setRate("GEL");
  };

  return (
    <StyledHeaderWrapper>
      <StyledLinkWrapper>
        <StyledLink to={"/"}>მთავარი</StyledLink>
        <StyledLink to={"/coffee"}>ყავა</StyledLink>
        <StyledLink to={"/ingredients"}>ინგრედიენტები</StyledLink>
      </StyledLinkWrapper>
      <StyledCurrencyButton onClick={changeRate}>
        {rate}
      </StyledCurrencyButton>
    </StyledHeaderWrapper>
  );
};

export default Header;
