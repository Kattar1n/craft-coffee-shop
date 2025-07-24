import React from 'react'
import { StyledPage } from './Styled'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router'
import CoffeeDetailCard from '../components/CoffeeDetailCard'

// import styled from "styled-components";

const CoffeeDetailPage = () => {
    const { coffeeId } = useParams()

  return (
    <StyledPage>
        <Header/>
        <CoffeeDetailCard key={coffeeId} id={coffeeId}/>
        <Footer/>
    </StyledPage>
  )
}

export default CoffeeDetailPage