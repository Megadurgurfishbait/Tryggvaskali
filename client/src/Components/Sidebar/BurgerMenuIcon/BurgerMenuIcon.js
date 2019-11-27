import React, { useState } from "react";

import BurgerMenu from "./BurgerMenu";
import { ThinContainer, Container, Line } from "./BurgerMenuIcon.styled";

const BurgerMenuIcon = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <>
      <Container onClick={() => setShowMenu(!ShowMenu)}>
        <Line w={14} t={20} />
        <Line w={20} t={28} />
        <Line w={26} t={36} />
      </Container>
      <ThinContainer>
        <BurgerMenu show={ShowMenu} setShow={setShowMenu} />
      </ThinContainer>
    </>
  );
};

export default BurgerMenuIcon;
