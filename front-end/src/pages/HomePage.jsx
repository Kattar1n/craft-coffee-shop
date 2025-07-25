import React from 'react'
import { StyledPage } from './Styled'
// import styled from "styled-components";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import HomeCoffeeWrapper from '../components/HomeCoffeeWrapper'

const HomePage = () => {
  return (
    <StyledPage>
        <Header/>
        <main>
          <Hero/>
          <HomeCoffeeWrapper/>
        </main>
        <Footer/>
    </StyledPage>
  )
}

export default HomePage