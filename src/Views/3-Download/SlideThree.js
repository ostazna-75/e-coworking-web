import React from "react";
import styled from "styled-components";
import Logo from "../../SharedComponent/Logo";
import Ios from "../3-Download/Image/Ios.png";
import Android from "../3-Download/Image/Android.png";
import { Paragraph } from "../../SharedComponent/WithStyle";
import Iphone from "../3-Download/Image/Iphone.png";

const SlideThree = () => {
  return (
    <ContainSlideThree>
      <GreenBackground>
        <InteriorGreen>
          <Logo big />

          <Paragraph>
            Télécharger l’application <br /> qui vous permettra de <br />
            trouver tous les <br /> coworking proche de vous. <br /> Good
            Joooobbb !!!
          </Paragraph>

          <Download>
            <IosContain>
              <img src={Ios} alt="icon Iso" />
            </IosContain>
            <AndroidContain>
              <img src={Android} alt="icon icon Iso" />
            </AndroidContain>
          </Download>
          <Smartphone>
            <img src={Iphone} alt="icon Iso" />
          </Smartphone>
        </InteriorGreen>
      </GreenBackground>
      <WhiteBackground></WhiteBackground>
    </ContainSlideThree>
  );
};

/* Style Slide 3 Download */

const ContainSlideThree = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const GreenBackground = styled.div`
  background-image: linear-gradient(
    to right,
    #1f5c4b,
    #1f5c4b,
    #04161a,
    #04161a,
    #04161a
  );
  height: 500px;
`;

const InteriorGreen = styled.div`
  padding: 0 10%;
`;

const Download = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
`;

const WhiteBackground = styled.div`
  background-color: white;
  width: 100%;
`;

const IosContain = styled.div`
  font-size: 11pt;
  font-weight: 600;
  min-width: 120px;
  min-height: 40px;
  background-color: black;
  border-radius: 25px;
  border: 2px solid #ffe699;
`;

const AndroidContain = styled.div`
  font-size: 11pt;
  font-weight: 600;
  min-width: 120px;
  min-height: 40px;
  background-color: black;
  border-radius: 25px;
  border: 2px solid #ffe699;
  margin-left: 1%;
`;

const Smartphone = styled.div`
  margin-top: -380px;
  margin-left: 48%;
  img {
    max-width: 500px;
    max-height: 550px;
  }
`;

export default SlideThree;
