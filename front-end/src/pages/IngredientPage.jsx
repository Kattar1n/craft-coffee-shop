import React from 'react'
import { StyledPage } from './Styled'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IngredientWrapper from '../components/IngredientWrapper'
// import styled from "styled-components";

const IngredientPage = () => {
  return (
    <StyledPage>
      <Header/>
      <main>
        <IngredientWrapper/>
      </main>
      <Footer/>
    </StyledPage>
  )
}

export default IngredientPage