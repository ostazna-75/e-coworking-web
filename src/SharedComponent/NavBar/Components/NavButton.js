import React from "react";
import styled from "styled-components";

const NavButton = ({ title = "" }) => {
  return (
    <StyleButton>
      <p>{title}</p>
    </StyleButton>
  );
};

/* style des button */

const StyleButton = styled.button`
  font-family: "SFUIDisplay";
  color: white;
  background-color: transparent;
  border: transparent;
  p:hover {
    color: #ffe699;
    cursor: pointer;
  }
`;

export default NavButton;
