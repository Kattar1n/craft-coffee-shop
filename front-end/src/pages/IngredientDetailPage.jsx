import React from 'react'
import { StyledPage } from './Styled'
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
        <main>
            <IngredientDetailCard key={ingredientId} id={ingredientId}/>
        </main>
        <Footer/>
    </StyledPage>
  )
}

export default IngredientDetailPage