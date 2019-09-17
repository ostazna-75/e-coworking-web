import React from "react";
import styled from "styled-components";
import Container from "../../SharedComponent/Container";
import LandingButton from "./Components/LandingButton";
import Logo from "../../SharedComponent/Logo";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import { Paragraph } from "../../SharedComponent/WithStyle";
/* dans le fichier withstyle, il recherche un export Paragraph */

const SlideOne = () => {
  return (
    <div className="SlideOne">
      <NavBar slide={true} />

      <Container>
        <Logo big />
        <Paragraph>
          <p>
            Que vous soyez un élève,
            <br /> une startup , une association ou une grande
            <br />
            entreprise en développement, découvrez des
            <br /> espaces qui permettront de faire un travail qui a <br />
            du sens et un impact.
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
