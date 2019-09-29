import React from "react";
import styled from "styled-components";
import Working from "./Working";

/* Logo E-co Working */

const Logo = ({ big, onClick }) => {
  return (
    <LogoNav big={big} onClick={onClick}>
      <Eco big={big}>E</Eco>
      <Tire big={big}>-</Tire>
      <Co big={big}>co</Co>
      {big && <br />}
      <Working big={big} />
    </LogoNav>
  );
};

const LogoNav = styled.div`
  color: white;
  margin-top: ${props => props.big && `6%`};
  cursor: ${props => props.onClick && `pointer`};
`;

const Eco = styled.span`
  font-family: "FallisComing";
  font-size: ${props => (props.big ? "54pt" : "24pt")};
`;

const Tire = styled.span`
  font-family: "FallisComing";
  font-size: ${props => (props.big ? "44pt" : "24pt")};
  color: #ffe699;
  font-weight: bold;
`;

const Co = styled.span`
  font-family: "FallisComing";
  font-size: ${props => (props.big ? "64pt" : "28pt")};
  margin-left: 2px;
  font-weight: bold;
`;

export default Logo;
