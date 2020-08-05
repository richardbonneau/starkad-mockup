import React from "react";
import styled from "styled-components";
import "./App.css";
const Wrapper = styled.div``;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Hero = styled.img`
  position: relative;
  top: 0;
  width: 100%;
  margin-bottom: 20px;
`;
const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
const HeroLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

const LogoContainer = styled.a`
  background: black;
  height: 25px;
  padding: 15px;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;
const Logo = styled.img`
  height: 25px;
`;

const Burger = styled.img`
  position: absolute;
  left: 25px;
  top: 45px;
  width: 50px;
  z-index: 9;
`;

const Background = styled.div`
  background: transparent url(/bg.png);
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  background-position: top;
  z-index: 5;
  margin-top: 21%;
`;
const Content = styled.div`
  background: white;
  z-index: 20;
  padding: 25px 10px;
  position: relative;
`;
const ContentLogo = styled.img`
  margin-bottom: 15px;
`;
const Subtitle = styled.h2`
  font-weight: normal;
`;
const Button = styled.div`
  background: url(/button.png);
  padding: 20px;
  color: white;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  z-index: 30;
  top: -30px;
  font-size: 13px;
  position: relative;
`;
const SecondHero = styled.img`
  position: relative;
  z-index: 20;
  top: -58px;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Background />

      <HeroWrapper>
        <HeroOverlay />
        <HeroLogo src="/logo-hero.png"></HeroLogo>
        <Hero src="/hero.jpg"></Hero>
      </HeroWrapper>
      <LogoContainer>
        <Logo src="/logo.png" />
      </LogoContainer>
      <Burger src="/burg.png" />

      <Content>
        <Subtitle>DO YOU KNOW</Subtitle>
        <ContentLogo src="content-logo.png" />
        <p>We Are Not Just Another Marketing Company</p>

        <p>
          We are more than just a marketing company. We know dentistry inside and out and we know
          how to market dental specialties. All of our services, consulting and continuing education
          are in-house but we do more than provide isolated marketing services. We are dedicated to
          creating targeted marketing campaigns, staff training and strategy around your practice
          goals and growth.
        </p>

        <p>
          Based in Montreal, Quebec, Starkad has client all across Canada. Do you want to growht
          your practice?
        </p>
        <p>Contact us for a complimentary session!</p>
      </Content>
      <Button>DISCOVER THE LEGEND STARKAD</Button>
      {/* <HeroWrapper> */}
      <SecondHero src="/hero2.png" />
      {/* </HeroWrapper> */}
    </Wrapper>
  );
};

export default App;
