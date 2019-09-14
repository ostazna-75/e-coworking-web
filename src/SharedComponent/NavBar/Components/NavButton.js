import React from "react";
import styled from "styled-components";
import search from "../../../Assets/Images/search.png";
import mail from "../../../Assets/Images/mail.png";

const NavButton = ({ title = "", icon = "" }) => {
  if (icon !== "") {
    return (
      <div>
        <StyleIcon src={icon === "search" ? search : mail} />
        {/* ? : si icon est soarch sinon mail (if else) */}
      </div>
    );
  } else {
    return (
      <StyleButton>
        <p>{title}</p>
      </StyleButton>
    );
  }
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
const StyleIcon = styled.img`
  width: 20px;
  padding-left: 15px;
`;
/* si icone différent !=== "", alors on affiche icone n sinon le texte */

export default NavButton;
