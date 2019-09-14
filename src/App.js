import React from "react";
import "./App.css";
import SlideOne from "./Views/1-Landing/SlideOne";
import SlideTwo from "./Views/2-Welcome/SlideTwo";
import NavBar from "./SharedComponent/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <SlideOne />
      <SlideTwo />
    </>
  );
}

export default App;
