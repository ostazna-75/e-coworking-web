import React from "react";
import styled from "styled-components";

const NavButton = ({ title = "", icon = "" }) => {
  let text = null;
  if (icon !== "") {
    text = icon;
  } else {
    text = title;
  }
  return (
    <StyleButton>
      <p>{text}</p>
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

/* style des icones */

/* si icone différent !=== "", alors on affiche icone n sinon le texte */

export default NavButton;
