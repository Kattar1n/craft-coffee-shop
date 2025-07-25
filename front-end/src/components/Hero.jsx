import React from "react";
import heroImage from "/assets/main/hero.png";
import styled from "styled-components";
import { Link } from "react-router";

const StyledHeroWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 300px;
  display: flex;
  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;
const StyledHeroShadow = styled(Link)`
  position: absolute;
  top: 0;
  left: -20vw;
  width: 90vw;
  height: 120vw;
  rotate: -45deg;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  transition: 1s ease;

  &:hover {
    scale: 1.1;
  }
`;

const StyledHeroText = styled.h1`
  position: relative;
  line-height: 300px;
  left: 5%;
  font-size: 36px;
  color: #f5f0e6;
  z-index: 0;
`;

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroShadow to={"/coffee"}></StyledHeroShadow>
      <StyledHeroText>Craft Coffee Shop</StyledHeroText>
    </StyledHeroWrapper>
  );
};

export default Hero;
