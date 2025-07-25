import React from 'react'
import { StyledMainSection, StyledPage } from './Styled'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IngredientDetailCard from '../components/IngredientDetailCard'
// import styled from "styled-components";

const IngredientDetailPage = () => {
  const { ingredientId } = useParams()

  return (
    <StyledPage>
        <Header/>
        <StyledMainSection>
            <IngredientDetailCard key={ingredientId} id={ingredientId}/>
        </StyledMainSection>
        <Footer/>
    </StyledPage>
  )
}

export default IngredientDetailPage