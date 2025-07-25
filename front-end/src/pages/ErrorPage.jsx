import React from 'react'
import { StyledMainSection, StyledPage } from './Styled'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styled from 'styled-components'

const StyledErrorWrapper = styled.div`
    text-align: center;
    line-height: 30vh;
    font-size: 72px;
    color: red;
`


const ErrorPage = () => {
  return (
    <StyledPage>
        <Header/>
        <StyledMainSection>
            <StyledErrorWrapper>404<br/>გვერდი არ მოიძებნა</StyledErrorWrapper>
        </StyledMainSection>
        <Footer/>
    </StyledPage>
  )
}

export default ErrorPage