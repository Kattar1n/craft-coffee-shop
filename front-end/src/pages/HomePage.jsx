import React from "react";
import { StyledMainSection, StyledPage } from "./Styled";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeCoffeeWrapper from "../components/HomeCoffeeWrapper";

const HomePage = () => {
  return (
    <StyledPage>
      <Header />
      <StyledMainSection>
        <Hero />
        <HomeCoffeeWrapper />
      </StyledMainSection>
      <Footer />
    </StyledPage>
  );
};

export default HomePage;
