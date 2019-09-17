import React, { useState, useEffect } from "react";
import styled from "styled-components";
import template from "./Image/template.png";
import Logo from "../../SharedComponent/Logo";
import Facebook from "../8-SignUp/Image/facebook.png";
import Google from "../8-SignUp/Image/Google.png";
import IconMail from "../8-SignUp/Image/emailGrey.png";
import Padlock from "../8-SignUp/Image/padlock.png";
import Eye from "../8-SignUp/Image/eye.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newinfo, setNewinfo] = useState(false);

  return (
    <>
      <TemplateSign>
        {/* goupe Sign Up  */}
        <WordingSignGroup>
          <Signword>Sign</Signword>
          <Upword>Up</Upword>
        </WordingSignGroup>
        {/* Countainer 2 bloc SignUp */}
        <ContainSignUP>
          {/* CONTAINER PARTIE GAUCHE */}
          <ContainLeft>
            <WordUp>
              <Salut>SALUT</Salut>
              <CompteEco>
                Vous pouvez vous connectez à votre compte E-co Working ici
              </CompteEco>
              {/*  SOCIAL CLICK  */}
              <Social>
                <FacebookContain>
                  <FacebookClic>
                    <img src={Facebook} alt="icon Facebook" />
                    Se connecter avec ...
                  </FacebookClic>
                </FacebookContain>
                <GoogleContain>
                  <GoogleClic>
                    <img src={Google} alt="icon Facebook" />
                    Connectez - vous avec ...
                  </GoogleClic>
                </GoogleContain>
              </Social>
              {/* ------OU-----  */}
              <SectionOr>
                {/*  <LignOne></LignOne> */}
                <Or>ou</Or>
                {/*  <LignTwo></LignTwo> */}
              </SectionOr>
              {/* -------------- */}

              {/* ----------------------- */}
              {/* ----Deux container----- */}
              {/* ----Email and PAss----- */}
              <Containers>
                <ContainerOne>
                  <img src={IconMail} alt="Icon e-mail" />
                  <p>Adresse E-mail</p>
                </ContainerOne>
                <ContainerTwo>
                  <img src={Padlock} alt="PAdlock Icon" />
                  <p>Mot de Passe</p>
                  <EyePass src={Eye} alt="Eye for lock" />
                </ContainerTwo>
              </Containers>
              {/* ------------------------*/}
              {/* --Mot de passe oublié-- */}
              <WordPass>Mot de passe oublié ?</WordPass>
              {/* la partie blanche de gauche */}

              <IdentifyWord>
                <p>S'identifier</p>
              </IdentifyWord>
            </WordUp>
          </ContainLeft>
          {/* CONTAINER PARTIE DROITE  */}
          <ContainRight>
            <NewHere>NOUVEAU ICI ?</NewHere>
            <RegisterOrder>Inscrivez-vous</RegisterOrder>
            <div>
              <Adhere>S’inscrire</Adhere>
            </div>
            {/* Incorporer le logo ici */}
            <LogoDown>
              <Logo />
            </LogoDown>
          </ContainRight>
        </ContainSignUP>
      </TemplateSign>
    </>
  );
};

/* ------------------------------------ */
/* ------------- STYLE --------------  */
/* ---------------------------------- */

const TemplateSign = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${template});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;
const WordingSignGroup = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;
const Signword = styled.p`
  font-family: "SFUIDisplayLight";
  font-weight: bold;
  color: black;
  font-size: 66pt;
`;
const Upword = styled.p`
  margin-top: -10px;
  font-family: "SFUIDisplayMedium";
  font-weight: bold;
  color: #2d836c;
  font-size: 110pt;
  text-shadow: -1px -1px 0 #ffe699, 1px -1px 0 #ffe699, -1px 1px 0 #ffe699,
    1px 1px 0 #ffe699;
`;
/* Container SINGUP */
const ContainSignUP = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 40px;
  height: 620px;
  width: 1030px;
`;
/* INTERIEUR CONTAINER PARTIE GAUCHE BLANC  */
const ContainLeft = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 650px;
  -webkit-box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
  box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
  /*   border: 1px solid grey; */
`;

const WordUp = styled.div`
  text-align: center;
`;

const Salut = styled.p`
  font-family: SFUIDisplayMedium;
  font-size: 30pt;
  font-weight: 750;
  color: #5cbf98;
  margin-top: 10%;
`;

const CompteEco = styled.p`
  font-family: SFUIDisplayLight;
  font-size: 10.5pt;
  letter-spacing: 0.4px;
  font-weight: 800;
  color: #757985;
  margin-top: 5%;
`;

/* social Icon FACEBOOK & GOOGLE PLAY */
const Social = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: space-around;
`;

/* contain FACEBOOK & GOOGLE */
/* -----Facebook----------- */

const FacebookContain = styled.div`
  margin-right: 7%;
`;

const GoogleContain = styled.div`
  margin-left: 0%;
`;

const FacebookClic = styled.div`
  display: flex;
  /*   flex-direction: row; */
  justify-content: space-around;
  align-items: center;
  font-family: SFUIDisplay;
  color: #757985;
  background-color: transparent;
  font-size: 10pt;
  min-width: 230px;
  min-height: 40px;
  border-radius: 25px;
  border: 2px solid #e6e7f0;
  img {
    width: 20px;
  }
  :hover {
    cursor: pointer;
    background-color: #f2fcff;
  }
`;

/* -----GOOGLE--- */
const GoogleClic = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: SFUIDisplay;
  color: #757985;
  background-color: transparent;
  font-size: 10pt;
  min-width: 230px;
  min-height: 40px;
  border-radius: 25px;
  border: 2px solid #e6e7f0;
  img {
    width: 20px;
  }
  :hover {
    background-color: white;
    cursor: pointer;
    background-color: #fff7f7;
  }
`;

/* ---------BAR & mot Ou ---------- */
/* --------- Section Or -----------*/
const SectionOr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 6%;
`;

const Or = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "SFUIDisplay";
  font-size: 10pt;
  color: #d8dae3;
  :before,
  :after {
    content: "";
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }
  :after {
    margin: 0 0 0 20px;
  }
`;

/* ------------------------------ */
/* CONATINER E-MAIL AND PASSWORD */
/* ------------------------------------ */
/* style container EMAIL AND PASSWORD */
const Containers = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-top: 4%;
  color: #9499a7;
  font-family: SFUIDisplayLight;
  font-size: 10pt;
  word-spacing: 3px;
  letter-spacing: 1px;
`;

const ContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 3%;
  padding-left: 2%;
  height: 60px;
  width: 500px;
  border-radius: 8px;
  border: 2px solid #ffe699;
  background-color: #f4f5f9;
  img {
    width: 15px;
  }
  p {
    padding-left: 4%;
  }
`;

const EyePass = styled.img`
  padding-left: 68%;
`;

const ContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 3%;
  padding-left: 2%;
  height: 60px;
  width: 500px;
  border-radius: 8px;
  border: 2px solid #ffe699;
  background-color: #f4f5f9;
  img {
    width: 15px;
  }
  p {
    padding-left: 4%;
  }
`;

const WordPass = styled.div`
  color: #9499a7;
  font-family: SFUIDisplayLight;
  letter-spacing: 0.3px;
  font-weight: 550;
  font-size: 11pt;
  margin-top: 5%;
`;

/*Fin de page container gauche BLANC */
/* ---------S'identifier----------- */
const IdentifyWord = styled.button`
  text-align: center;
  color: #5cbf98;
  font-size: 12pt;
  font-weight: 600;
  min-width: 300px;
  min-height: 50px;
  background-color: transparent;
  border-radius: 25px;
  border: 2px solid #5cbf98;
  :hover {
    background-color: white;
    color: white;
    cursor: pointer;
    background-image: linear-gradient(to right, #55efc3e5, #04161a);
  }
  margin-top: 7%;
`;

/* ----------------------------------- */
/* INTERIEUR CONTAINER PARTIE DROITE */
const ContainRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  background-image: linear-gradient(to bottom, #55efc3e5, #04161a);
  -webkit-box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
  box-shadow: -1px 1px 20px -4px rgba(0, 0, 0, 0.3);
`;

const NewHere = styled.p`
  font-family: SFUIDisplayMedium;
  color: white;
  margin-top: 60%;
  font-size: 28pt;
  font-weight: 900;
  text-shadow: 1px 1px 1px black;
  text-align: center;
  /*   padding-top: 60%; */
`;
const RegisterOrder = styled.p`
  font-family: SFUIDisplayMedium;
  color: white;
  font-size: 16pt;
  text-align: center;
  padding-top: 3%;
`;

const Adhere = styled.button`
  text-align: center;
  color: white;
  font-size: 11pt;
  font-weight: 600;
  min-width: 120px;
  min-height: 40px;
  background-color: transparent;
  border-radius: 25px;
  border: 2px solid #ffe699;
  :hover {
    background-color: white;
    color: #bf9000;
    cursor: pointer;
    background-color: white;
    color: #bf9000;
  }
  margin-top: 10%;
  margin-left: 35%;
  margin-right: 35%;
`;

/* Logo partie droite */
const LogoDown = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 45%;
`;

export default SignUp;
