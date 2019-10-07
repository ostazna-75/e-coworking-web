import React, { useState, useEffect } from "react";
import Container from "../../SharedComponent/Container";
import { useLocation, useHistory } from "react-router-dom";
import ContentImage from "./ContentImage";
import styled from "styled-components";
import espaces from "../4-Categories/Image/1-espaces.jpg";
import avatar from "./Image/Icons/avatar.png";
import iconlocation from "./Image/Icons/location.png";
import DraftCowork from "./Image/draft.jpg";
import axios from "axios";

const Presentation = () => {
  const location = useLocation();
  const history = useHistory();
  console.log({ location });

  const { list } = useData();

  console.log("list", list);

  return (
    <>
      <ContentImage />
      <Container>
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
              {filters.map(f => (
                <Filter>
                  {f.map(({ title }) => (
                    /* METTRE LE ONCLICK DANS LE CARD VERS PRESENTATION */
                    /* card : les catégories */
                    <TextFilt
                      onClick={() => history.push("/ProductCategories")}
                    >
                      {title}
                    </TextFilt>
                  ))}
                </Filter>
              ))}
            </FilterGroup>
          </RightContent>
        </UpContainer>
        <SpaceWorking>
          <Space>Espaces</Space>
          <Working>WorkING.</Working>
        </SpaceWorking>
        <SpaceListing>
          {/* list.map : permet de récupérer les donée de l'api */}
          {/* paramètre name etc.. , les objets à récupérer  */}
          {list.map(({ name, squaremeters: surface, type }) => (
            <Cowork>
              {/* DRaftCowork est l'image */}
              <Image src={DraftCowork} />
              <Description>
                <Name>{name}</Name>

                <Adress>
                  <img src={iconlocation} /> {type}
                </Adress>
                <Capacity>
                  <img src={avatar} />
                  {surface}
                </Capacity>
              </Description>
            </Cowork>
          ))}
        </SpaceListing>
      </Container>
    </>
  );
};

const useData = () => {
  const [list, setList] = useState([]);
  /* nouvelle fonction pour custom Hooks */
  const getList = async () => {
    let response = {};
    /* getList : lire la liste du titre cowork */

    try {
      response = await axios.get(`cowork/list`);
      // toujours mettre sur le code front axios.get avec http au début

      setList(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return { list };
};

/* ----------------------- */
/* Style Presentation Page */
/* ----------------------- */

/* SpaceListing container sous Espace WorkING. */
const SpaceListing = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Cowork = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  width: 250px;
  border: 1px solid #ffe699;
  border-radius: 5%;
  /* background-color: orange; */
  margin-top: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 155px;
  width: 250px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-family: "SFUIDisplayMedium";
  font-size: 12pt;
  margin-top: 15px;
  margin-left: 10px;
  color: #359b80;
`;

const Adress = styled.div`
  display: flex;
  align-items: center;
  font-family: "SFUIDisplayMedium";
  font-size: 9pt;
  margin-top: 15px;
  margin-left: 10px;
  color: #236857;
  font-weight: bold;
  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;

const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-family: "SFUIDisplayMedium";
  font-size: 9pt;
  margin-top: 10px;
  margin-left: 10px;
  color: #7f6000;
  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;

/* ----------------------------------------------- */
/* Catégorie src espaces */
const Cats = [{ src: espaces }];

/* catégorie filter */
const filters = [
  [
    { title: "Gratuit" },
    { title: "Moins de 5 €/ heure" },
    { title: "Entre 5 et 10 € / heure" },
    { title: "+ de 10 € / heure" },
    { title: "+ 20 € / heure" }
  ],
  [
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
  ],

  [
    {
      title: "Salle de réuinion"
    },
    {
      title: "24/7"
    },
    {
      title: "Ouvert le WeekEnd"
    }
  ]
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
  /*  flex-grow: 1; */
  flex-direction: row;
  margin-top: 80px;
`;

const LeftContent = styled.div`
  width: 250px;
`;

const RightContent = styled.div`
  flex: 1;
`;

const Option = styled.p`
  font-family: "SFUIDisplay-Bold";
  font-size: 20pt;
`;

/* Logo une fois catégorie Afficher */
const SpaceWorking = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  /*   flex: 1; */
`;

const Space = styled.span`
  font-family: "FallisComing";
  color: #236857;
  font-weight: bold;
  font-size: 20pt;
`;

const Working = styled.span`
  font-family: "Mont-HeavyDEMO";
  margin-left: 3px;
  letter-spacing: -1.3px;
  color: #236857;
  font-size: 23pt;
`;
/* ------------------------------------ */

export default Presentation;
