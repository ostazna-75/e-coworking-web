import React from "react";
import Container from "../../SharedComponent/Container";
import { useLocation, useHistory } from "react-router-dom";
import ContentImage from "./ContentImage";
import styled from "styled-components";
import espaces from "../4-Categories/Image/1-espaces.jpg";

const Presentation = () => {
  const location = useLocation();
  const history = useHistory();
  console.log({ location });

  return (
    <>
      <ContentImage />
      <Container style={{ marginTop: "100px" }}>
        <UpContainer>
          <LeftContent>
            {Cats.map(({ src }) => (
              /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
              /* card : les catégories */
              <Card
                src={src}
                onClick={() => history.push("/ProductCategories")}
              ></Card>
            ))}
          </LeftContent>
          <RightContent>
            <Option>Vous souhaitez plus d'options ?</Option>
            {/* FILTRE */}
            <FilterGroup>
              <Filter>
                {filter.map(({ title }) => (
                  /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
                  /* card : les catégories */
                  <TextFilt onClick={() => history.push("/ProductCategories")}>
                    {title}
                  </TextFilt>
                ))}
              </Filter>
              <Filter>
                {filter2.map(({ title }) => (
                  /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
                  /* card : les catégories */
                  <TextFilt onClick={() => history.push("/ProductCategories")}>
                    {title}
                  </TextFilt>
                ))}
              </Filter>
              <Filter>
                {filter3.map(({ title }) => (
                  /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
                  /* card : les catégories */
                  <TextFilt onClick={() => history.push("/ProductCategories")}>
                    {title}
                  </TextFilt>
                ))}
              </Filter>
            </FilterGroup>
          </RightContent>
        </UpContainer>
      </Container>
    </>
  );
};

const Cats = [{ src: espaces }];

/* catégorie filter */
const filter = [
  { title: "Gratuit" },
  { title: "Moins de 5 €/ heure" },
  { title: "Entre 5 et 10 € / heure" },
  { title: "+ de 10 € / heure" },
  { title: "+ 20 € / heure" }
];

const filter2 = [
  {
    title: "0 à 50 m² de surface"
  },
  {
    title: "50 à 100 m² de surface"
  },
  {
    title: "100 à 200 m² de surface"
  },
  {
    title: "+200 m² de surface"
  }
];

const filter3 = [
  {
    title: "Salle de réuinion"
  },
  {
    title: "24/7"
  },
  {
    title: "Ouvert le WeekEnd"
  }
];

const FilterGroup = styled.div``;

const Filter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const TextFilt = styled.div`
  font-family: "SFUIDisplay-Bold";
  font-size: 12pt;
  background-color: #f2f2f2;
  margin-right: 20px;
  padding: 10px 12px;
`;

const Card = styled.div`
/*   display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: "FallisComing"; */
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

const UpContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

const LeftContent = styled.div`
  height: 300px;
  width: 250px;
`;

const RightContent = styled.div`
  flex: 1;
`;

const Option = styled.p`
  font-family: "SFUIDisplay-Bold";
  font-size: 20pt;
`;

export default Presentation;
