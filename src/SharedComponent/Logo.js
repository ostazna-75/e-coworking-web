import React from "react";
import styled from "styled-components";

/* Logo E-co Working */
const Logo = ({ big }) => {
	return (
		<LogoNav big={big}>
			<Eco big={big}>E</Eco>
			<Tire big={big}>-</Tire>
			<Co big={big}>co</Co>
			{big && <br />}
			<W big={big}>W</W>
			<Orking big={big}>orkING</Orking>
			<Dot big={big} />
		</LogoNav>
	);
};

const LogoNav = styled.div`
	color: white;
	margin-top: ${props => props.big && `6%`};
`;

const Eco = styled.span`
	font-family: "FallisComing";
	font-size: ${props => (props.big ? "54pt" : "24pt")};
`;

const Tire = styled.span`
	font-family: "FallisComing";
	font-size: ${props => (props.big ? "44pt" : "24pt")};
	color: #ffe699;
	font-weight: bold;
`;

const Co = styled.span`
	font-family: "FallisComing";
	font-size: ${props => (props.big ? "64pt" : "28pt")};
	margin-left: 2px;
	font-weight: bold;
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

export default Logo;
