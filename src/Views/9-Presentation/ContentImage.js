import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Container from "../../SharedComponent/Container";
import CoworkImg from "./Image/ContentCowork.png";
import CoffeeImg from "./Image/ContentCoffee.png";
import AtelierImg from "./Image/ContentAtelier.png";
import HotelsImg from "./Image/ContentHotels.png";
import styled from "styled-components";
import Working from "../../SharedComponent/Working";

const ContentImage = () => {
  const location = useLocation();
  const weAreHere = location && location.pathname.split("/")[2];

  return (
    <CoworkStyle src={Content[weAreHere]}>
      <Container>
        <SpaceWord>Espaces</SpaceWord>
        <Working big={true} />
      </Container>
    </CoworkStyle>
  );
};

const Content = {
  Espaces: CoworkImg,
  Café: CoffeeImg,
  Hôtels: HotelsImg,
  Atelier: AtelierImg,
  Brasserie: AtelierImg
};
const CoworkStyle = styled.div`
  background-image: url(${props => props.src});
  height: 100vh;
  background-size: cover;
`;

const SpaceWord = styled.div`
  font-family: "FallisComing";
  color: #ffe699;
  font-size: 50pt;
  margin-top: 14%;
  margin-bottom: -0.3%;
`;

export default ContentImage;
