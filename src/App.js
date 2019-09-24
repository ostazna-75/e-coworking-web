import React from "react";
import "./App.css";
import SlideOne from "./Views/1-Landing/SlideOne";
import SlideTwo from "./Views/2-Welcome/SlideTwo";
import SlideThree from "./Views/3-Download/SlideThree";
import NavBar from "./SharedComponent/NavBar/NavBar";
import Modal from "./SharedComponent/Modal";
import useModal from "./Hooks/useModal";
import SignUp from "./Views/8-SignUp/SignUp";
import { useState } from "react";

function App() {
  const { isShowing, toggle } = useModal();
  const [user, setUser] = useState({ username: "" });

  return (
    <div style={{ position: "relative" }}>
      <Modal isShowing={isShowing}>
        <SignUp hide={toggle} setUser={setUser} />
      </Modal>
      <NavBar toggle={toggle} username={user.username} />
      <SlideOne toggle={toggle} username={user.username} />
      <SlideTwo />
      <SlideThree />
    </div>
  );
}

export default App;
