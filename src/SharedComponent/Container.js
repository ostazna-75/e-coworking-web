import React from "react";
import styled from "styled-components";

const Container = ({ ...props }) => {
	return <StyledContainer {...props} />;
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 100vh;
	margin: 0 10%;
`;

export default Container;
