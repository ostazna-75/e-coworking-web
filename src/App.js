import React from "react";
import "./App.css";
import SlideOne from "./Views/1-Landing/SlideOne";
import SlideTwo from "./Views/2-Welcome/SlideTwo";
import SlideThree from "./Views/3-Download/SlideThree";
import NavBar from "./SharedComponent/NavBar/NavBar";
import Modal from "./SharedComponent/Modal";
import useModal from "./Hooks/useModal";
import SignUp from "./Views/8-SignUp/SignUp";
import { useState, useEffect } from "react";
import ProductCategories from "./Views/4-Categories/ProductCategories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

// url de base pour toutes les requetes axios
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
	const { isShowing, toggle } = useModal();
	const { user, setUser } = useUser();

	return (
		<div style={{ position: "relative" }}>
			{/* en dehors du router */}
			<Modal isShowing={isShowing}>
				<SignUp hide={toggle} setUser={setUser} />
			</Modal>
			<NavBar toggle={toggle} username={user.username} setUser={setUser} />
			{/* la ou on va mettre les pages: pages 1, pages 2, pages3, pages4 */}
			<Router>
				<Switch>
					<Route path="/">
						<Landing
							toggle={toggle}
							username={user.username}
							setUser={setUser}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

const useUser = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("User")) || { username: "" }
	);
	const verifyToken = async () => {
		// do the axios, await the response
		try {
			await axios.post("user/verification", {
				email: user.email,
				token: user.token
			});
			// ensuite if "c'est bon frère" => on fait rien
		} catch (error) {
			// else if "y'a carotte" => on se déconnecte
			if (user.username !== "") setUser({ username: "" });
		}
	};

	useEffect(() => {
		localStorage.setItem("User", JSON.stringify(user));
		verifyToken();
		return () => {};
	}, [user]);

	return { user, setUser };
};

const Landing = ({ toggle, username, setUser }) => {
	return (
		<>
			<SlideOne toggle={toggle} username={username} setUser={setUser} />
			<SlideTwo />
			<SlideThree />
			<ProductCategories />
		</>
	);
};

export default App;
