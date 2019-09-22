import React from "react";
import "./App.css";
import SlideOne from "./Views/1-Landing/SlideOne";
import SlideTwo from "./Views/2-Welcome/SlideTwo";
import SlideThree from "./Views/3-Download/SlideThree";
import NavBar from "./SharedComponent/NavBar/NavBar";
import Modal from "./SharedComponent/Modal";
import useModal from "./Hooks/useModal";
import SignUp from "./Views/8-SignUp/SignUp";

function App() {
	const { isShowing, toggle } = useModal();

	return (
		<div style={{ position: "relative" }}>
			<Modal isShowing={isShowing}>
				<SignUp hide={toggle} />
			</Modal>
			<NavBar toggle={toggle} />
			<SlideOne toggle={toggle} />
			<SlideTwo />
			<SlideThree />
		</div>
	);
}

export default App;
