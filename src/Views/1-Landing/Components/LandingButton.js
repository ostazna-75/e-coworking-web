import React from "react";
import styled from "styled-components";

const LandingButton = ({ title = "" }) => {
  return (
    <StyleButton>
      <p>{title}</p>
    </StyleButton>
  );
};

/* style des buttons */

const StyleButton = styled.button`
  font-family: "SFUIDisplay";
  color: white;
  font-size: 13pt;
  height: 45px;
  background-color: transparent;
  border: 1px solid #ffe699;
  :hover {
    background-color: white;
    color: #bf9000;
    cursor: pointer;
  }
`;

export default LandingButton;
