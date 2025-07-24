import React from "react";
import { StyledPage } from './Styled'
import CoffeeWrapper from "../components/CoffeeWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CoffeePage = () => {

return(
    <StyledPage>
        <Header/>
        <CoffeeWrapper/>
        <Footer/>
    </StyledPage>
)}

export default CoffeePage