import React from "react";
import { StyledMainSection, StyledPage } from "./Styled";
import CoffeeWrapper from "../components/CoffeeWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CoffeePage = () => {
  return (
    <StyledPage>
      <Header />
      <StyledMainSection>
        <CoffeeWrapper />
      </StyledMainSection>
      <Footer />
    </StyledPage>
  );
};

export default CoffeePage;
