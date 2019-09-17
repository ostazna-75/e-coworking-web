import React from "react";
import styled from "styled-components";
import NavButton from "./Components/NavButton";
import Logo from "../Logo";
import Modal from "../Modal";
import SignUp from "../../Views/8-SignUp/SignUp";
import useModal from "../../Hooks/useModal";

const NavBar = ({ slide = false }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <NavStyleBar slide={slide}>
        {/* LOGO A GAUCHE  */}
        <Logo />
        {/* nav bar à droite */}
        <NavBarRight showSignUp={toggle} />
      </NavStyleBar>
      <Modal isShowing={isShowing} hide={toggle}>
        <SignUp />
      </Modal>
    </>
  );
};

/* Navigation bar Droite  */
const NavBarRight = ({ showSignUp }) => {
  return (
    <RightNav>
      <NavButton title="Espaces" />
      <NavButton title="Around Me" />
      <NavButton title="Sign UP" action={showSignUp} />
      <NavButton icon="search" />
      <NavButton icon="mail" />

      <NavButton />
    </RightNav>
  );
};

/* STYLE CSS Nouvelle méthode : styled.component */
/* bar de navigation droite */
const NavStyleBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  top: 0;
  left: 0;
  flex: 1;
  padding: 0 10%;
  position: ${props => (props.slide ? "relative" : "fixed")};
  width: 100%;
  box-sizing: border-box;
  /* lineargradient */
  background-image: ${props =>
    props.slide
      ? ""
      : `
  linear-gradient(
    to right,
#1f5c4be1,
#04161ac9,
#04161a,
#04161a00,
#04161a00,
#04161a00
  )`};

  background-color: ${props => (props.slide ? "transparent" : "#031517")};
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* Discover and MAP */

export default NavBar;
