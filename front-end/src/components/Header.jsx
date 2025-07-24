import React from 'react'
import styled from 'styled-components'

const StyledHeaderWrapper = styled.div`
height: 100px;
width: 100%;
background: black;
`

const Header = () => {
  return (
    <StyledHeaderWrapper>
        <a href="/">Home</a>
        <a href="/coffees">Coffees</a>
    </StyledHeaderWrapper>
  )
}

export default Header