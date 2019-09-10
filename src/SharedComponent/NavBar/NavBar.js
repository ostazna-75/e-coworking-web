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

const Logo = () => {
  return (
    <divlogo className="Logo">
      <span className="Eco">E-co</span>
      <span className="Working">Working</span>
    </divlogo>
  );
};

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
    <button>
      <p>{title}</p>
    </button>
  );
};

export default NavBar;
