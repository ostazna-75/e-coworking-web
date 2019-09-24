import React from "react";
import styled from "styled-components";
import Logo from "../../SharedComponent/Logo";
import Ios from "../3-Download/Image/Ios.png";
import Android from "../3-Download/Image/Android.png";
import { Paragraph } from "../../SharedComponent/WithStyle";
import Iphone from "../3-Download/Image/Iphone.png";

const SlideThree = () => {
	return (
		<ContainSlideThree>
			<GreenBackground>
				<InteriorGreen>
					<FirstRow>
						<Logo big />
						<Paragraph>
							Télécharger l’application <br /> qui vous permettra de <br />
							trouver tous les <br /> coworking proche de vous. <br /> Good
							Joooobbb !!!
						</Paragraph>
						<Download>
							<StoreContain>
								<img src={Ios} alt="icon Iso" />
							</StoreContain>
							<StoreContain>
								<img src={Android} alt="icon icon Iso" />
							</StoreContain>
						</Download>
					</FirstRow>

					<Smartphone>
						<img src={Iphone} alt="icon Iso" />
					</Smartphone>
				</InteriorGreen>
			</GreenBackground>

			<WhiteBackground />
		</ContainSlideThree>
	);
};

/* Style Slide 3 Download */

const ContainSlideThree = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

const GreenBackground = styled.div`
	background-image: linear-gradient(
		to right,
		#1f5c4b,
		#1f5c4b,
		#04161a,
		#04161a,
		#04161a
	);
	min-height: 70vh;
`;

const InteriorGreen = styled.div`
	padding: 0 10%;
	margin-top: 10vh;
	display: flex;
	flex-direction: row;
`;

const Download = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 3%;
`;

const WhiteBackground = styled.div`
	background-color: white;
	width: 100%;
`;

const StoreContain = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 11pt;
	font-weight: 600;
	min-width: 120px;
	min-height: 40px;
	background-color: black;
	border-radius: 25px;
	border: 2px solid #ffe699;
	margin-right: 3%;
`;

const FirstRow = styled.div`
	display: flex;
	flex-direction: column;
`;

const Smartphone = styled.div`
	flex: 1;
	position: relative;
	height: 100%;
	img {
		margin-top: 100px;
		margin-left: 25%;
		position: absolute;
		max-width: 500px;
		max-height: 550px;
	}
`;

export default SlideThree;
