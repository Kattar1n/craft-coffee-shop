import React from 'react'
import { StyledPage } from './Styled'
// import styled from "styled-components";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CoffeeWrapper from '../components/CoffeeWrapper'

const HomePage = () => {
  return (
    <StyledPage>
        <Header/>
        <main>
          <Hero/>
          <CoffeeWrapper/>
        </main>
        <Footer/>
    </StyledPage>
  )
}

export default HomePage