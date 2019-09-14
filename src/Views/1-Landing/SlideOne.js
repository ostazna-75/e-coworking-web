import React from "react";
import styled from "styled-components";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Container from "../../SharedComponent/Container";
import LandingButton from "./Components/LandingButton";

const SlideOne = () => {
	return (
		<div className="SlideOne">
			<Container>
				<NavBar />
				<divlogoslide className="LogoSlide">
					<span className="Eslide">E</span>
					<span className="TiréSlide">-</span>
					<span className="CoSlide">co</span>
					<br />
					<span className="Wslide">W</span>
					<span className="OrkingSlide">orkING</span>
				</divlogoslide>
				<Paragraph>
					<p>
						Que vous soyez un élève,
						<br /> une startup , une association ou une grande
						<br />
						entreprise en développement, découvrez des espaces
						<br /> qui permettront de faire un travail qui a du sens et un
						impact.
					</p>
				</Paragraph>
				<Buttons>
					<LandingButton title="Découvrez les Espaces" />
					<LandingButton title="Map" />
				</Buttons>
			</Container>
		</div>
	);
};

const Paragraph = styled.div`
	font-family: "SFUIDisplay";
	color: white;
	font-size: 17px;
`;

const Buttons = styled.div`
	margin-top: 40px;
	display: grid;
	grid-template-columns: auto auto 1fr;
	grid-column-gap: 20px;
`;

export default SlideOne;
