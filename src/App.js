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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;
`;
const Logo = styled.img`
  height: 25px;
`;

const Burger = styled.img`
  position: fixed;
  left: 25px;
  top: 45px;
  width: 50px;
  z-index: 1000;
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
  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;
const ContentLogo = styled.img`
  margin-bottom: 15px;
`;
const Subtitle = styled.h2`
  font-weight: normal;
  @media (min-width: 1024px) {
    padding: 20px;
    left: -185px;
    position: relative;
    background: white;
  }
`;
const ExtraPadding = styled.div`
  @media (min-width: 1024px) {
    padding-top: 65px;
  }
`;
const Button = styled.div`
  background: url(/button.png);
  padding: 20px;
  color: white;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  z-index: 30;
  bottom: -60px;
  font-size: 13px;
  position: relative;
  /* @media (min-width: 1024px) {
    bottom: -160px;
  } */
`;
const SecondHero = styled.img`
  position: relative;
  @media (min-width: 1024px) {
    width: 50%;
    top: 52px;
    max-width: 500px;
  }

  z-index: 15;
  width: 100%;
`;
const ParagraphOnBlack = styled.p`
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 40px 10px;
  @media (min-width: 1024px) {
    padding: 150px;
    background: #0e0e0e;
    margin: 0;
  }
`;

const OfferWrapper = styled.div`
  position: relative;
  height: 400px;
`;
const OfferBg = styled.div`
  background: black url(/bg-offer.png);
  width: 100%;
  height: 93%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: top center;
`;
const OfferSubtitle = styled.h2`
  position: absolute;
  color: white;
  text-align: center;
  width: 100%;
  padding: 25px 0;
`;
const OfferParagraph = styled.p`
  text-align: center;
  position: absolute;
  color: white;
  padding: 100px 25px;
  font-weight: 600;
  @media (min-width: 1024px) {
    padding: 100px 110px;
  }
`;
const PlusButton = styled.div`
  background: url(/plus-btn.png) no-repeat top center;
  height: 64px;
  width: 100%;
  margin: 40px auto 0 auto;
  display: block;
  bottom: 0px;
  position: absolute;
`;
const ServicesWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Service = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
  background-color: ${(props) => (props.gray ? "#0e0e0e" : "black")};
  background-image: url(/serv-line.png);
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width: 1024px) {
    width: 33.33%;
  }
`;
const ServiceImage = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
const GoUp = styled.div`
  padding: 60px 0;
  background: url(/top.png) no-repeat center;
  position: relative;
  text-align: center;
`;
const GoUpText = styled.h2`
  display: inline-block;
  z-index: 400;
  text-align: center;
  color: white;
`;
const FooterWrapper = styled.div`
  text-align: center;
`;
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 40px;
`;
const Copyright = styled.h4`
  color: white;
  font-weight: 600;
  padding: 20px;
`;
const FlexFirstPart = styled.div`
  @media (min-width: 1024px) {
    justify-content: center;
    display: flex;
    flex-direction: row-reverse;
  }
`;
const SecondPart = styled.div`
  background: #0e0e0e;
`;
const GrayArea = styled.div`
  width: 100%;
  height: 50px;
  background: #0e0e0e;
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
      <FlexFirstPart>
        <Content>
          <ExtraPadding></ExtraPadding>
          <Subtitle>DO YOU KNOW</Subtitle>
          <ContentLogo src="content-logo.png" />
          <p>We Are Not Just Another Marketing Company</p>

          <p>
            We are more than just a marketing company. We know dentistry inside and out and we know
            how to market dental specialties. All of our services, consulting and continuing
            education are in-house but we do more than provide isolated marketing services. We are
            dedicated to creating targeted marketing campaigns, staff training and strategy around
            your practice goals and growth.
          </p>

          <p>
            Based in Montreal, Quebec, Starkad has client all across Canada. Do you want to growht
            your practice?
          </p>
          <p>Contact us for a complimentary session!</p>
          <Button>DISCOVER THE LEGEND STARKAD</Button>
        </Content>

        <SecondHero src="/hero2.png" />
      </FlexFirstPart>

      <SecondPart>
        <ParagraphOnBlack>
          OUR MISSION IS TO HELP DENTAL AND ORTHODONTIC CLINIC, TO INCREASE PROFITABILITY, TO MEET
          THEIR CHALLENGES AND TO FULFIL THEIR OBJECTIVES WITH EFFECTIVE STRATEGIES.
        </ParagraphOnBlack>

        <OfferWrapper>
          <OfferBg />
          <OfferSubtitle>
            THE <strong>STARKAD</strong> OFFER
          </OfferSubtitle>
          <OfferParagraph>
            Marketing innovations? <br></br>The means of communication change at breakneck speed. To
            reach your audience, you can no longer rely on one or two channels. Starkad offers more
            effective strategies that are customized to the needs of your business or campaign.
          </OfferParagraph>
          <PlusButton src="/plus-btn.png"></PlusButton>
        </OfferWrapper>
      </SecondPart>
      <GrayArea></GrayArea>

      <ServicesWrapper>
        <Service gray={false}>
          <ServiceImage src="/serv-icon-01.png"></ServiceImage>
        </Service>
        <Service gray={true}>
          <ServiceImage src="/serv-icon-02.png"></ServiceImage>
        </Service>
        <Service gray={false}>
          <ServiceImage src="/serv-icon-03.png"></ServiceImage>
        </Service>
        <Service gray={true}>
          <ServiceImage src="/serv-icon-04.png"></ServiceImage>
        </Service>
        <Service gray={false}>
          <ServiceImage src="/serv-icon-05.png"></ServiceImage>
        </Service>
      </ServicesWrapper>

      <GoUp>
        <GoUpText>Top</GoUpText>
      </GoUp>
      <FooterWrapper>
        <ContentLogo src="footer-logo.png" />

        <ContactWrapper>
          <img src="/phone.png" />
          <img src="/mail.png" />
          <div></div>
        </ContactWrapper>
        <Copyright>© 2017 StarKad</Copyright>
      </FooterWrapper>
    </Wrapper>
  );
};

export default App;
