import React from "react";
import Container from "../../SharedComponent/Container";
import { useLocation, useHistory } from "react-router-dom";
import ContentImage from "./ContentImage";

const Presentation = () => {
  const location = useLocation();
  const history = useHistory();
  console.log({ location });

  return (
    <>
      <ContentImage />
      <Container
        onClick={() => history.push("/")}
        style={{ marginTop: "100px" }}
      >
        composants avec tout les deuxième pages après image catégorie
      </Container>
    </>
  );
};

export default Presentation;
