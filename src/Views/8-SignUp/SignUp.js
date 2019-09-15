import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [number, setNumber] = useState(0);
  const [bonHomme, setBonHomme] = useState("");
  /* Useeffect : sert à faire des truc ( manipulation ) quand le state change */
  useEffect(() => {
    if (number === 0) {
      setBonHomme("Brice");
    } else if (number === 1) {
      setBonHomme("islam");
    } else {
      setBonHomme("toov");
    }
    console.log("");
  }, [number]);
  /* [number] : c'est la condition pour rentrer dans le useEffect */
  /* setNumber: convention ca remplace les states et thissetstate */
  /* number en state , fonction rajouter copine a brice  */
  const addbeaches = () => {
    setNumber(number + 1);
  };

  const resetBeaches = () => {
    setNumber(0);
  };

  return (
    <>
      <div>
        il y a : {number} beaches dans le lit de {bonHomme}
      </div>
      <button onClick={addbeaches}>rajouter des beaches</button>
      <button onClick={resetBeaches}>reset</button>
      <button
        onClick={() => {
          setBonHomme("farid");
        }}
      >
        Change Bonhomme
      </button>
    </>
  );
};

export default SignUp;
