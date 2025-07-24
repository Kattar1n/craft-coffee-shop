import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  /* Add styling for main layout of homepage if needed */
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero />
      {/* You will add "Popular Coffees" section here later */}
    </HomePageContainer>
  );
};

export default HomePage;