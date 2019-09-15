import React from "react";
import "./App.css";
import SlideOne from "./Views/1-Landing/SlideOne";
import SlideTwo from "./Views/2-Welcome/SlideTwo";
import NavBar from "./SharedComponent/NavBar/NavBar";
import Modal from "./SharedComponent/Modal";
import useModal from "./Hooks/useModal";
import SignUp from "./Views/8-SignUp/SignUp";

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div style={{ position: "relative" }}>
      <Modal isShowing={isShowing} hide={toggle}>
        <SignUp />
      </Modal>
      <NavBar />
      <SlideOne />
      <SlideTwo /> <button onClick={toggle}>ouiououoi</button>
    </div>
  );
}

export default App;
