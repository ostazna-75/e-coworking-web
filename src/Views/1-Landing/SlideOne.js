import React from "react";
import styled from "styled-components";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Container from "../../SharedComponent/Container";
import LandingButton from "./Components/LandingButton";

const SlideOne = () => {
  return (
    <div className="SlideOne">
      <Container>
        <NavBar />
        <divlogoslide className="LogoSlide">
          <span className="Eslide">E</span>
          <span className="TiréSlide">-</span>
          <span className="CoSlide">co</span>
          <br />
          <span className="Wslide">W</span>
          <span className="OrkingSlide">orkING</span>
          <span class="dot"></span>
        </divlogoslide>
        <Paragraph>
          <p>
            Que vous soyez un élève,
            <br /> une startup , une association ou une grande
            <br />
            entreprise en développement, découvrez des espaces
            <br /> qui permettront de faire un travail qui a du sens et un
            impact.
          </p>
        </Paragraph>
        <Buttons>
          <LandingButton title="Découvrez les Espaces" />
          <LandingButton title="Map" />
        </Buttons>
      </Container>

      <Poeme>
        <Parapoeme>
          « Les lieux sont aussi des liens. Et ils sont notre mémoire. »
        </Parapoeme>
        <Titlepoeme>Jospeh Joubert</Titlepoeme>
      </Poeme>
    </div>
  );
};

const Paragraph = styled.div`
  font-family: "SFUIDisplay";
  color: white;
  font-size: 17px;
`;

const Buttons = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 20px;
`;

const Poeme = styled.div`
  position: absolute;
  top: 100px;
  right: 120px;
`;

const Parapoeme = styled.p`
  width: 100px;
  color: white;
  font-family: Bradhitc;
`;

const Titlepoeme = styled.p`
  color: #ffe699;
  font-family: Ahroni;
  font-size: 10pt;
  margin-top: 5px;
`;

export default SlideOne;
