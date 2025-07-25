import React from 'react'
import { Link, Outlet } from 'react-router'
import styled from 'styled-components'

const StyledHeaderWrapper = styled.header`
height: 50px;
left: 0;
right: 0;
background: #3E2F2F;
display: flex;
justify-content: space-evenly;
line-height: 50px;
`
const StyledLink = styled(Link)`
color: #FAF9F6;
text-decoration: none;
margin: 0 10px;
`

const Header = () => {
  return (
    <StyledHeaderWrapper>
        <StyledLink to={'/'}>მთავარი</StyledLink>
        <StyledLink to={'/coffee'}>ყავა</StyledLink>
        <StyledLink to={'/ingredients'}>ინგრედიენტები</StyledLink>
    </StyledHeaderWrapper>
  )
}

export default Header