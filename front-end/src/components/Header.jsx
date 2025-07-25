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
`;
const StyledLinkWrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const StyledLinkText = styled.span`
  line-height: 30px;
`
const StyledHomeLinkWrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  width: min-content;
`;
const StyledLink = styled(Link)`
  color: #faf9f6;
  text-decoration: none;
  margin: 10px 10px;
  font-weight: bold;
  transition: 250ms ease;

  &:hover {
    color: #b76e37;
  }
`;
const StyledLogo = styled.div`
  height: 30px;
  width: 30px;
  background-image: url('/assets/main/icon.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`
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
      <StyledLink to={"/"}>
        <StyledHomeLinkWrapper>
          <StyledLogo/><StyledLinkText>მთავარი</StyledLinkText>
        </StyledHomeLinkWrapper>
      </StyledLink>
      <StyledLinkWrapper>
        <StyledLink to={"/coffee"}><StyledLinkText>ყავა</StyledLinkText></StyledLink>
        <StyledLink to={"/ingredients"}><StyledLinkText>ინგრედიენტები</StyledLinkText></StyledLink>
      </StyledLinkWrapper>
      <StyledCurrencyButton onClick={changeRate}>
        {rate}
      </StyledCurrencyButton>
    </StyledHeaderWrapper>
  );
};

export default Header;
