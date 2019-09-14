import React from "react";
import styled from "styled-components";

/* Logo E-co Working */
const Logo = () => {
  return (
    <LogoNav>
      <Eco>E</Eco>
      <span className="Tiré">-</span>
      <span className="Co">co</span>
      <span className="W">W</span>
      <span className="orking">orkING</span>
      <span class="dotLogo"></span>
    </LogoNav>
  );
};

const LogoNav = styled.div`
  color: white;
`;

const Eco = styled.span`
  font-family: "FallisComing";
  font-size: 24pt;
`;

export default Logo;
