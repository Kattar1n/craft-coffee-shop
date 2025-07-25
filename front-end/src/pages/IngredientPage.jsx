import React from "react";
import { StyledMainSection, StyledPage } from "./Styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IngredientWrapper from "../components/IngredientWrapper";
// import styled from "styled-components";

const IngredientPage = () => {
  return (
    <StyledPage>
      <Header />
      <StyledMainSection>
        <IngredientWrapper />
      </StyledMainSection>
      <Footer />
    </StyledPage>
  );
};

export default IngredientPage;
