import React from 'react'
import heroImage from '../assets/hero.png'
import styled from 'styled-components'

const StyledHeroWrapper = styled.div`
width: 100%;
height: 300px;
display: flex;
background-image: url(${heroImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;
`
const StyledHeroShadow = styled.div`
position: relative;
top: 0;
left: -20vw;
width: 90vw;
height: 120vw;
rotate: -45deg;
background: rgba(0, 0, 0, 0.3);
z-index: 0;
`

const StyledHeroText = styled.h1`
position: relative;
font-size: 3vw;
color: #F5F0E6;
z-index: 2;
`

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroShadow></StyledHeroShadow>
      <StyledHeroText>Craft Coffee Shop</StyledHeroText>
    </StyledHeroWrapper>
  )
}

export default Hero