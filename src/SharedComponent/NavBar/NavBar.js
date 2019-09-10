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
      <button>
        <p>Espaces</p>
      </button>
      <button>
        <p>Around Me</p>
      </button>
      <button>
        <p>Sign Up</p>
      </button>
      <button>
        <p>Search</p>
      </button>
      <button>
        <p>Mail</p>
      </button>
    </divrightnav>
  );
};

export default NavBar;
