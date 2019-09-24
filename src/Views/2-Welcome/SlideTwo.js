import React from "react";
import styled from "styled-components";
import background from "./Image/LaptopDesktop.jpg";
import arrow from "./Image/arrow.png";

const SlideTwo = () => {
  return (
    <StyledSlide>
      <p>
        Explorer tous les <br /> Coworking et devenez un <br /> E-co Worker
      </p>

      <button onClick={() => {}}>
        <img src={arrow} alt="arrow" />
        <p>Continue</p>
      </button>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  height: 100vh;
  width: 100%;
  background-size: cover;
  p {
    font-family: "SFUIDisplay";
    color: #216151;
    font-size: 22pt;
    margin-top: 12%;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: start;
    align-items: center;
    /* style du bouton */
    border: none;
    margin-top: 30px;
    height: 40px;
    width: 200px;
    background-image: linear-gradient(to right, #1f5c4be1, #041316);
    img {
      height: 20px;
      padding-left: 20px;
    }
    p {
      /* flex buton Word + Arrow */
      font-family: "SFUIDisplay";
      font-size: 13pt;
      font-weight: bold;
      color: white;
      margin: auto;
    }
  }
`;

export default SlideTwo;
