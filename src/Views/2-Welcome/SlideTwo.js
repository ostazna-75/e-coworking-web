import React from "react";
import styled from "styled-components";
import background from "./LaptopDesktop.jpg";

const SlideTwo = () => {
	return (
		<StyledSlide>
			<p className="TitleSlideTwo">
				Explorer tous les <br /> Coworking et devenez un <br /> E-co Worker
			</p>
			<button>Continue</button>
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
		text-align: center;
	}
	button {
		/* style du bouton */
	}
`;

export default SlideTwo;
