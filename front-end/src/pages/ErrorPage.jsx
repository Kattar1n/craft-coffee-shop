import React from 'react'
import { StyledPage } from './Styled'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styled from 'styled-components'

const StyledErrorWrapper = styled.div`
    text-align: center;
    line-height: 30vh;
    font-size: 72px;
`


const ErrorPage = () => {
  return (
    <StyledPage>
        <Header/>
        <StyledErrorWrapper>404<br/>გვერდი არ მოიძებნა</StyledErrorWrapper>
        <Footer/>
    </StyledPage>
  )
}

export default ErrorPage