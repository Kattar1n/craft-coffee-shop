import React from 'react'
import styled from 'styled-components'

const StyledFooterWrapper = styled.footer`
    background-color: #2E1C1C;
    position: relative;
    margin-top: 10px;
    top: 100%;
    left: 0;
    right: 0;
    color: #FAF9F6;
    display: grid;
    height: 50px;
`
const StyledCopyrightText = styled.span`
  font-size: 12px;
  margin: 10px;
  width: calc(100% - 20px);
`

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledCopyrightText>
      © 2025 Craft Coffee Shop. All rights reserved. <br />
      Unauthorized use, reproduction, or distribution of any content, images, or materials from Craft Coffee Shop is strictly prohibited without prior written permission
    </StyledCopyrightText>
</StyledFooterWrapper>
)}

export default Footer