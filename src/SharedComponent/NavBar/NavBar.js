import React from "react";
import styled from "styled-components";
import NavButton from "./Components/NavButton";
import Logo from "../Logo";

const NavBar = () => {
  return (
    <NavStyleBar>
      {/* LOGO A GAUCHE  */}
      <Logo />
      {/* nav bar à droite */}
      <NavBarRight />
    </NavStyleBar>
  );
};

/* Navigation bar Droite  */
const NavBarRight = () => {
  return (
    <RightNav>
      <NavButton title="Espaces" />
      <NavButton title="Around Me" />
      <NavButton title="Sign UP" />
      <NavButton icon="Search" />
      <NavButton icon="Mail" title="Tovo" />

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
  margin-top: 1%;
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
`;

/* Discover and MAP */

export default NavBar;
