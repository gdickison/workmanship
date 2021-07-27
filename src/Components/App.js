import React from "react";
import styled from "styled-components";
import Header from "./Header";
import TextBlob from "./TextBlob";
import HeroImage from "./HeroImage";
import FeaturedProjects from "./FeaturedProjects";
import GetInTouchHeader from "./GetInTouch";
import Team from "./Team";
import BottomLine from "./BottomLine";

const AppContianerDiv = styled.div`
  height: 100vh;
  color: #BFBFBF;
`;

const App = () => {
  return (
    <AppContianerDiv>
      <Header />
      <TextBlob
        justification="justify"
        text="Workmanship crafts your brand. Our designs tell your story the same way you tell it to your family, your friends, and your customers. Look around our website. See what we've crafted for others, then let us craft a brand for you."
      />
      <HeroImage xRepeat="1" />
      <FeaturedProjects />
      <TextBlob
        justification="center"
        text="What we are & what we offer: 1-3 sentences that establish trust, confidence, and hint at the opportunity the client siezes by working with us. Bait the hook."
      />
      <GetInTouchHeader />
      <Team />
      <BottomLine />
    </AppContianerDiv>
  )
};

export default App;