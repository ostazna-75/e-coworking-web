import React from "react";
import "./App.css";
import NavBar from "./SharedComponent/NavBar/NavBar";

function App() {
	return (
		<div>
			<div className="SlideOne">
				<div className="MainContainer">
					<NavBar />
					{/* <p>salut</p> */}
					{/* slide E-Co WorkING - Ecriture SLide One */}
					<divlogoslide className="LogoSlide">
						<span className="Eslide">E</span>
						<span className="TiréSlide">-</span>
						<span className="CoSlide">co</span>
						<br />
						<span className="Wslide">W</span>
						<span className="OrkingSlide">orkING</span>
					</divlogoslide>
					{/* Fin slide E-Co WorkING - SLide One */}
					{/* Explication sous E-co Working SLIDE */}
					<divword className="wordeco">
						<p className="para-eco">
							Que vous soyez un élève,
							<br /> une startup , une association ou une grande
							<br />
							entreprise en développement, découvrez des espaces
							<br /> qui permettront de faire un travail qui a du sens et un
							impact.
						</p>
					</divword>
					{/* Explication sous E-co Working SLIDE */}
				</div>
			</div>

			<div className="SlideTwo">
				<div className="Laptop">
					<p className="TitleSlideTwo">
						Explorer tous les <br /> Coworking !!!! et devenez un <br /> E-co
						Worker
					</p>
					<button className="ButtonSlideTwo">Continue</button>
				</div>
			</div>
		</div>
	);
}

export default App;
