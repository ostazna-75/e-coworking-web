import React from "react";

const NavBar = () => {
  return (
    <nav className="NavBar">
      {/* LOGO A GAUCHE  */}
      <Logo />
      {/* nav bar à droite */}
      <NavBarRight />
    </nav>
  );
};

/* Logo E-co Working */
const Logo = () => {
  return (
    <divlogo className="Logo">
      <span className="Eco">E</span>
      <span className="Tiré">-</span>
      <span className="Co">co</span>
      <span className="W">W</span>
      <span className="orking">orkING</span>
    </divlogo>
  );
};
/* Naigation bar Droite  */
const NavBarRight = () => {
  return (
    <divrightnav className="NavBarRight">
      <NavButton title="Espaces" />
      <NavButton title="Around Me" />
      <NavButton title="Sign UP" />
      <NavButton title="Search" />
      <NavButton title="Mail" />
      <NavButton />
    </divrightnav>
  );
};

const NavButton = ({ title = "" }) => {
  return (
    <button className="ButtonNavBar">
      <p>{title}</p>
    </button>
  );
};

export default NavBar;
