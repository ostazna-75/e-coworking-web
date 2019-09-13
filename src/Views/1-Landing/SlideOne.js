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
        {/* <p>salut</p> */}
        {/* slide E-Co WorkING - Ecriture SLide One */}
        <divlogoslide className="LogoSlide">
          <span className="Eslide">E</span>
          <span className="TiréSlide">-</span>
          <span className="CoSlide">co</span>
          <br />
          <span className="Wslide">W</span>
          <span className="OrkingSlide">orkING</span>
        </divlogoslide>
        {/* Fin slide E-Co WorkING - SLide One */}
        {/* Explication sous E-co Working SLIDE */}
        <divword className="wordeco">
          <p className="para-eco">
            Que vous soyez un élève,
            <br /> une startup , une association ou une grande
            <br />
            entreprise en développement, découvrez des espaces
            <br /> qui permettront de faire un travail qui a du sens et un
            impact.
          </p>
        </divword>

        <Buttons>
          <LandingButton title="Découvrez les Espaces" />
          <LandingButton title="Map" />
        </Buttons>
      </Container>
      {/* Explication sous E-co Working SLIDE */}
    </div>
  );
};

const Buttons = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-column-gap: 20px;
`;

export default SlideOne;
