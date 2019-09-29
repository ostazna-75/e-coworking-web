import React from "react";
import styled from "styled-components";

const Working = ({ big }) => {
  return (
    <Title>
      <W big={big}>W</W>
      <Orking big={big}>orkING</Orking>
      <Dot big={big} />
    </Title>
  );
};

const Title = styled.span`
  color: white;
  align-items: baseline;
`;

const W = styled.span`
  font-family: "Mont-HeavyDEMO";
  font-size: ${props => (props.big ? "65pt" : "18pt")};
  margin-left: ${props => (props.big ? "" : "4px")};
`;

const Orking = styled.span`
  font-family: "Mont-HeavyDEMO";
  font-size: ${props => (props.big ? "60pt" : "18pt")};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffe699;
  margin-left: ${props => (props.big ? "-2%" : "-4%")};
  letter-spacing: ${props => props.big && `-3px`};
`;

const Dot = styled.span`
  height: ${props => (props.big ? "13px" : "5px")};
  width: ${props => (props.big ? "13px" : "5px")};
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #ffe699;
`;
export default Working;
