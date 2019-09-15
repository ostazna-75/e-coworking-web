import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isShowing, hide, children }) =>
	isShowing
		? ReactDOM.createPortal(
				<StyledModal onClick={hide}>{children}</StyledModal>,
				document.body
		  )
		: null;

const StyledModal = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	background-color: red;
`;

export default Modal;
