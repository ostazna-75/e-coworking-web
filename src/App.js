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
import ProductCategories from "./Views/4-Categories/ProductCategories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const { isShowing, toggle } = useModal();
  const [user, setUser] = useState({ username: "" });

  return (
    <div style={{ position: "relative" }}>
      {/* en dehors du router */}
      <Modal isShowing={isShowing}>
        <SignUp hide={toggle} setUser={setUser} />
      </Modal>
      <NavBar toggle={toggle} username={user.username} />
      {/* la ou on va mettre les pages: pages 1, pages 2, pages3, pages4 */}
      <Router>
        <Switch>
          <Route path="/">
            <Landing toggle={toggle} username={user.username} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Landing = (toggle, username) => {
  return (
    <>
      <SlideOne toggle={toggle} username={username} />
      <SlideTwo />
      <SlideThree />
      <ProductCategories />
    </>
  );
};

export default App;
