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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 150px;
  border-radius: 5px;
  font-family: "SFUIDisplay";
  color: white;
  font-size: 13pt;
  background-color: transparent;
  border: 1px solid #ffe699;
  :hover {
    background-color: white;
    color: #bf9000;
    cursor: pointer;
  }
`;

export default LandingButton;
