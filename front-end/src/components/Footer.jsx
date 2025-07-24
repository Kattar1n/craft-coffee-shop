import React from 'react'
import styled from 'styled-components'

const StyledFooterWrapper = styled.div`
    background-color: #2E1C1C;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #FAF9F6;
    display: grid;
`

const Footer = () => {
  return (
    <StyledFooterWrapper>Footer</StyledFooterWrapper>
  )
}

export default Footer