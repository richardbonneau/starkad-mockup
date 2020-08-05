import React from "react";
import styled from "styled-components";
import "./App.css";
const Wrapper = styled.div``;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const HeroOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Hero = styled.div`
  background: url(/hero.jpg);
  height: 246px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* position: absolute; */
  top: 0;
`;

const LogoContainer = styled.a`
  background: black;
  height: 50px;
  padding: 15px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;
const Logo = styled.img``;

const Burger = styled.img`
  width: 60px;
  position: absolute;
  left: 45px;
  top: 70px;
  width: 60px;
`;

const App = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <HeroOverlay src="/logo-hero.png"></HeroOverlay>
        <Hero></Hero>
      </HeroWrapper>
      <LogoContainer>
        <Logo src="/logo.png" />
      </LogoContainer>
      <Burger src="/burg.png" />
    </Wrapper>
  );
};

export default App;
