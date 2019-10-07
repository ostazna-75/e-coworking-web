import React from "react";
import styled from "styled-components";
import Container from "../../SharedComponent/Container";
import espaces from "./Image/1-espaces.jpg";
import coffee from "./Image/2-coffee.jpg";
import hotels from "./Image/3-hotels.png";
import atelier from "./Image/4-atelier.jpg";
import brasserie from "./Image/5-brasserie.jpg";
import { useHistory } from "react-router-dom";

const ProductCategories = () => {
  const history = useHistory();
  const wtf = "yoyoyo";
  return (
    <Container>
      <Text size="24pt">Choisis ta catégorie</Text>
      <Categories>
        {/* .map: permet de lire tous ce qu'il y'a dans le tableau. */}
        {Cats.map(({ src, title }) => (
          /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
          /* card : les catégories */
          <Card
            src={src}
            onClick={() => history.push("/presentation/" + title)}
          >
            {title}
          </Card>
        ))}
      </Categories>
      <Text size="32pt">
        Découvre tous les <br /> E-co WorkING autour de toi.
      </Text>
    </Container>
  );
};
/* cats n'est pas dynamique alors on peut le 
mettre en dehors du composent */
const Cats = [
  { src: espaces, title: "Espaces" },
  { src: coffee, title: "Café" },
  { src: hotels, title: "Hôtels" },
  { src: atelier, title: "Atelier" },
  { src: brasserie, title: "Brasserie" }
];

const Text = styled.div`
  font-family: "Mont-HeavyDEMO";
  font-size: ${props => props.size};
  text-align: center;
  margin-top: 10%;
`;
const Categories = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  /* ... */
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: "FallisComing";
  font-size: 24pt;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #ffe699;
    border: solid 3px #ffe699;
   -webkit-box-shadow: 7px 4px 58px -41px rgba(0,0,0,0.75);
-moz-box-shadow: 7px 4px 58px -41px rgba(0,0,0,0.75);
box-shadow: 7px 4px 58px -41px rgba(0,0,0,0.75);
  }
  padding-bottom: 2%;
  /* borderbox, permet de garder
   toute les tailles dans la sdiv    */
  box-sizing: border-box;
  /* bloc  */
  width: 220px;
  height: 200px;
  border-radius: 5%;
  border: solid 2px white;
  color: white;
  text-shadow: 2px -1px 2px rgba(206,89,55,0.29);
  background-image: linear-gradient(
      to top,
      #0a9fa5,
      #0ed3af7e,
      rgba(255, 255, 255, 0.199),
      rgba(255, 255, 255, 0.199)
    ),
    /* url(${espaces}) */
    url(${props => props.src});
  /* ... */
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
`;

export default ProductCategories;
