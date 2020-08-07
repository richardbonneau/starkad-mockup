import React from "react";
import styled from "styled-components";
import "./App.css";
import scrollToElement from "scroll-to-element";
import VisibilitySensor from "react-visibility-sensor";

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
  z-index: 20000;
  @media (min-width: 1024px) {
    height: 50px;
    width: 50px;
    left: 65px;
    top: 60px;
    position: absolute;
  }
`;
const Logo = styled.img`
  height: 25px;
  @media (min-width: 1024px) {
    height: 50px;
  }
`;

const Burger = styled.img`
  position: fixed;
  left: 25px;
  top: 45px;
  width: 50px;
  z-index: 15000;
  cursor: pointer;
  @media (min-width: 1024px) {
    left: 135px;
    top: 90px;
    width: 60px;
    position: absolute;
  }
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
  @media (min-width: 1024px) {
    height: 200%;
  }
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
  transition: all 2s linear 0s;
  opacity: ${(props) => (props.animation ? 1 : 0)};
  transform: ${(props) => (props.animation ? "translateY(-20px)" : "none")};
  @media (min-width: 1024px) {
    padding: 170px 150px 120px 150px;
    background: #0e0e0e;
    margin: 0;
    z-index: 10;
    position: relative;
  }
`;

const OfferWrapper = styled.div`
  position: relative;
  height: 400px;
  top: 500px;
  transition: all 2s linear 0s;
  transform: ${(props) => (props.animation ? "translateY(-500px)" : "none")};
  z-index: 9;
`;
const OfferBg = styled.div`
  background: black url(/bg-offer.png);
  width: 100%;
  height: 93%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 9;
`;
const OfferSubtitle = styled.h2`
  position: absolute;
  color: white;
  text-align: center;
  width: 100%;
  padding: 25px 0;
  z-index: 10;
  @media (min-width: 1024px) {
    padding: 90px 0;
  }
`;
const OfferParagraph = styled.p`
  text-align: center;
  position: absolute;
  color: white;
  padding: 100px 25px;
  z-index: 10;
  font-weight: 600;
  @media (min-width: 1024px) {
    padding: 180px 110px;
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
  z-index: 10;
`;
const ServicesWrapper = styled.div`
  @media (min-width: 1024px) {
    padding-top: 55px;
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
  transition: all 0.4s linear 0s;
  overflow: hidden;
  cursor: pointer;

  .count {
    color: ${(props) => (props.gray ? "black" : "#0e0e0e")};
    font-size: 115px;
    text-align: center;
    font-weight: 800;
    bottom: -58px;
    position: absolute;
    left: 0;
    right: 0;
  }
  .text {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 33.33%;
  }
  &:hover {
    background-image: url(/serv-bg-red.png);

    & > .count {
      display: none;
    }
    & > .text {
      display: block;
      color: white;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 10%;
      z-index: 300;
      font-size: 17px;
    }
    & > .subtitle {
      margin: 20px;
    }
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
  cursor: pointer;
  transition: all 0.4s linear 0s;
  &:hover {
    color: red;
  }
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
const ServiceSubtitle = styled.h3`
  color: white;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 10%;
  z-index: 300;
`;
const Count = styled.div``;

const Row = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;
const Text = styled.div``;
const GoDown = styled.img``;
const GoDownWrapper = styled.div`
  display: none;
  color: white;
  z-index: 4000;

  position: absolute;
  bottom: 70px;
  width: 100%;
  text-align: center;
  transition: all 0.4s linear 0s;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: block;
  }
  .godowntext {
    padding-top: 10px;
  }
  &:hover {
    color: red;
  }
`;
const Menu = styled.div`
  transition: all 0.4s linear 0s;
  opacity: ${(props) => (props.menuOpened ? 1 : 0)};
  z-index: 10000;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: black url(/menu-bg.png) no-repeat top center;
`;
const MenuContent = styled.div`
  padding: 115px 82px;
  @media (min-width: 1024px) {
    padding: 200px 100px;
    display: flex;
    justify-content: space-around;
  }
`;
const MenuElement = styled.h2`
  color: white;
  font-size: 32px;
  margin: 10px;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;
const MenuIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const IconSeparation = styled.div`
  width: 30px;
`;
const MenuContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 18px;
    text-align: center;
    .contact{
      margin-bottom: 30px;
      font-weight: 600;}
    .phone{
      margin-top: 30px;
      font-weight: 600;}
    .email{
      font-weight: 600;
    }
}
`;
const App = () => {
  const [animation, startAnimation] = React.useState(false);
  const [menuOpened, setMenuOpened] = React.useState(false);

  return (
    <Wrapper>
      <Menu menuOpened={menuOpened}>
        <MenuContent>
          <MenuIcons>
            <img src="/phone.png" />
            <IconSeparation></IconSeparation>
            <img src="/mail.png" />
          </MenuIcons>
          <div>
            <MenuElement>Home</MenuElement>
            <MenuElement>Services</MenuElement>
            <MenuElement>Blog</MenuElement>
            <MenuElement>Contact Us</MenuElement>
            <MenuElement>Français</MenuElement>
          </div>
          <MenuContacts>
            <div className="contact">CONTACT</div>
            <div className="email">EMAIL</div>
            <div>info@starkad.ca</div>
            <div className="phone">PHONE</div>
            <div>514-206-2100</div>
          </MenuContacts>
        </MenuContent>
      </Menu>
      <Background />

      <HeroWrapper className="hero">
        <HeroOverlay />
        <HeroLogo src="/logo-hero.png"></HeroLogo>
        <Hero src="/hero.jpg"></Hero>
        <GoDownWrapper
          onClick={() => {
            scrollToElement(".white", {
              offset: 0,
              ease: "linear",
              duration: 750,
            });
          }}
        >
          <GoDown src="/godown.png" />
          <div className="godowntext">
            Go <strong>down</strong>
          </div>
        </GoDownWrapper>
      </HeroWrapper>
      <LogoContainer>
        <Logo src="/logo.png" />
      </LogoContainer>
      <Burger
        src={menuOpened ? "/close.png" : "/burg.png"}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      <FlexFirstPart className="white">
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
            Based in Montreal, Quebec, Starkad has clients all across Canada. Do you want to grow
            your practice?
          </p>
          <p>Contact us for a complimentary session!</p>
          <Button>DISCOVER THE LEGEND STARKAD</Button>
        </Content>

        <SecondHero src="/hero2.png" />
      </FlexFirstPart>

      <SecondPart>
        <VisibilitySensor
          delayedCall={true}
          onChange={(isVisible) => {
            if (isVisible) {
              startAnimation(true);
            }
          }}
        >
          <ParagraphOnBlack animation={animation}>
            OUR MISSION IS TO HELP DENTAL AND ORTHODONTIC CLINIC, TO INCREASE PROFITABILITY, TO MEET
            THEIR CHALLENGES AND TO FULFIL THEIR OBJECTIVES WITH EFFECTIVE STRATEGIES.
          </ParagraphOnBlack>
        </VisibilitySensor>
        {/* <VisibilitySensor
          delayedCall={true}
          onChange={(isVisible) => {
            if (isVisible) {
              startAnimationOffer(true);
            }
          }}
        > */}
        <OfferWrapper animation={animation}>
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
        {/* </VisibilitySensor> */}
      </SecondPart>
      <GrayArea></GrayArea>

      <ServicesWrapper>
        <Row second={false}>
          <Service gray={false}>
            <ServiceSubtitle className="subtitle">Personas and Performance</ServiceSubtitle>
            <ServiceImage src="/serv-icon-01.png"></ServiceImage>
            <Text className="text">Know your audience to communicate more effectively</Text>
            <Count className="count">01</Count>
          </Service>

          <Service gray={true}>
            <ServiceSubtitle className="subtitle">Social Media</ServiceSubtitle>
            <ServiceImage src="/serv-icon-02.png"></ServiceImage>
            <Text className="text">Bring new patients and build your brand</Text>
            <Count className="count">02</Count>
          </Service>

          <Service gray={false}>
            <ServiceSubtitle className="subtitle">Invisalign production day</ServiceSubtitle>
            <ServiceImage src="/serv-icon-03.png"></ServiceImage>
            <Text className="text">IPD, VIP patient, reference</Text>
            <Count className="count">03</Count>
          </Service>
        </Row>

        <Row second={true}>
          <Service gray={true}>
            <ServiceSubtitle className="subtitle">Brand management</ServiceSubtitle>
            <ServiceImage src="/serv-icon-04.png"></ServiceImage>
            <Text className="text">Print, Radio and more</Text>
            <Count className="count">04</Count>
          </Service>

          <Service gray={false}>
            <ServiceSubtitle className="subtitle">Consulting and Training</ServiceSubtitle>
            <ServiceImage src="/serv-icon-05.png"></ServiceImage>
            <Text className="text">Constantly improve for sustainability</Text>
            <Count className="count">05</Count>
          </Service>
        </Row>
      </ServicesWrapper>

      <GoUp>
        <GoUpText
          onClick={() => {
            scrollToElement(".hero", {
              offset: 0,
              ease: "linear",
              duration: 750,
            });
          }}
        >
          Top
        </GoUpText>
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
