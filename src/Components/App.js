import React from "react";
import styled from "styled-components";
import Header from "./Header";
import TextBlob from "./TextBlob";
import HeroImage from "./HeroImage";
import FeaturedProjects from "./FeaturedProjects";
import GetInTouchHeader from "./GetInTouch";
import Team from "./Team";

const AppContianerDiv = styled.div`
  height: 100vh;
  color: #BFBFBF;
`;

const App = () => {
  return (
    <AppContianerDiv>
      <Header />
      <TextBlob
        text="What we are & what we offer: 1-3 sentences that establish trust, confidence, and hint at the opportunity the client siezes by working with us. Bait the hook."
      />
      <HeroImage xRepeat="1" />
      <FeaturedProjects />
      <TextBlob
        text="What we are & what we offer: 1-3 sentences that establish trust, confidence, and hint at the opportunity the client siezes by working with us. Bait the hook."
      />
      <GetInTouchHeader />
      <Team />
    </AppContianerDiv>
  )
};

export default App;