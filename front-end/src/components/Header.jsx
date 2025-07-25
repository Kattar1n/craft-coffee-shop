import React from 'react'
import { Link, Outlet } from 'react-router'
import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'

const StyledHeaderWrapper = styled.header`
height: 50px;
left: 0;
right: 0;
background: #3E2F2F;
display: flex;
justify-content: space-between;
line-height: 50px;
`
const StyledLinkWrapper = styled.header`
display: flex;
justify-content: space-evenly;
width: 100%;
`
const StyledLink = styled(Link)`
color: #FAF9F6;
text-decoration: none;
margin: 0 10px;
font-weight: bold;
transition: 250ms ease;

&:hover{
  color: #B76E37;
}
`
const StyledCurrencyButton = styled.button`
margin: 10px;
height: 30px;
background: #000;
border: none;
border-radius: 10px;
color: #FAF9F6;
text-decoration: none;
font-weight: bold;
cursor: pointer;
transition: 100ms ease;

&:hover{
  background: #333333;
  color: #B76E37;
}
`

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLinkWrapper>
        <StyledLink to={'/'}>მთავარი</StyledLink>
        <StyledLink to={'/coffee'}>ყავა</StyledLink>
        <StyledLink to={'/ingredients'}>ინგრედიენტები</StyledLink>
      </StyledLinkWrapper>
      <StyledCurrencyButton>GEL</StyledCurrencyButton>
    </StyledHeaderWrapper>
  )
}

export default Header