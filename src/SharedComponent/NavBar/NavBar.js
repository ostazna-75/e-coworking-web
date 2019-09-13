import React from "react";
import styled from "styled-components";
import NavButton from "./Components/NavButton";

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

/* Logo E-co Working */
const Logo = () => {
  return (
    <LogoNav>
      <Eco>E</Eco>
      <span className="Tiré">-</span>
      <span className="Co">co</span>
      <span className="W">W</span>
      <span className="orking">orkING</span>
    </LogoNav>
  );
};

/* Navigation bar Droite  */
const NavBarRight = () => {
  return (
    <RightNav>
      <NavButton title="Espaces" />
      <NavButton title="Around Me" />
      <NavButton title="Sign UP" />
      <NavButton title="Search" />
      <NavButton title="Mail" />

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
const LogoNav = styled.div`
  color: white;
`;

const Eco = styled.span`
  font-family: "FallisComing";
  font-size: 24pt;
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
`;

/* Discover and MAP */

export default NavBar;
