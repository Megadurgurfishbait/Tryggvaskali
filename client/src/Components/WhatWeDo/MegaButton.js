import React, { useState, useEffect, useRef, createRef } from "react";
import styled from "styled-components";
import ButtonModal from "./ButtonModal";
import ShowModal from "../../Animation/ShowModal";
import { Colors, VAR } from "../../Assets";

const MegaButton = () => {
  let ButtonModalRef = useRef([createRef(), createRef()]);
  const [ShowMenu, setShowMenu] = useState(false);
  const [Animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(ShowModal(ButtonModalRef));
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
    <MBContainer>
      <MyButton onClick={() => Toggle()}>Hafa Samband</MyButton>
      <ButtonModal ref={ButtonModalRef}></ButtonModal>
    </MBContainer>
  );
};

export default MegaButton;

const MBContainer = styled.div`
  height: 60px;
  width: 240px;
  display: flex;
  background-color: yellow;
  color: white;
  position: relative;
  z-index: 5;
`;

const MyButton = styled.button`
  height: inherit;
  width: inherit;
  z-index: 3;
  background-color: ${Colors.LIGHT_BLUE};
  box-sizing: border-box;
  border: none;
  color: ${Colors.WHITE};
  &:hover,
  &:focus {
    ${VAR.Hover};
  }
`;
