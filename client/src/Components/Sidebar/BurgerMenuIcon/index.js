import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ShowBurgerMenu from "../../../Animation/ShowBurgerMenu";

import { Colors } from "../../../Assets";
import BurgerMenu from "../../BurgerMenu";
import ShowBurgerMenuContext from "../../../Context/ShowBurgerMenu";

const BurgerMenuIcon = () => {
  let BurgerMenuRef = useRef();
  const [ShowMenu, setShowMenu] = useState(true);
  const [Animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(
      ShowBurgerMenu(
        BurgerMenuRef.current,
        window.innerHeight,
        window.innerWidth
      )
    );
  }, []);

  function Toggle() {
    if (!ShowMenu) {
      Animation.play();
    } else {
      Animation.reverse();
    }
    setShowMenu(!ShowMenu);
  }

  return (
    <ShowBurgerMenuContext.Provider value={() => Toggle()}>
      <Container onClick={() => Toggle()}>
        <Line w={15} t={20} />
        <Line w={21} t={30} />
        <Line w={28} t={40} />
      </Container>
      <BurgerMenu ref={BurgerMenuRef} show={ShowMenu} />
    </ShowBurgerMenuContext.Provider>
  );
};

export default BurgerMenuIcon;
const Container = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  margin: 0px auto;
  position: relative;
  background-color: ${Colors.LIGHT_GREEN};
  z-index: 100000000000000000000000000000;
  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.span`
  height: 3px;
  position: absolute;
  right: 16px;
  transition: width 0.5s;
  ${Container}:hover & {
    width: 28px;
  }

  top: ${props => props.t}px;
  width: ${props => props.w}px;
  background-color: ${Colors.LIGHT_BLUE};
`;
