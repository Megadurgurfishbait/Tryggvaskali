import React, { useState, useEffect, useRef, createRef } from "react";
import styled from "styled-components";
import ButtonModal from "./ButtonModal";
import ShowModal from "../../Animation/ShowModal";

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
      <MyButton onClick={() => Toggle()}>Hæ</MyButton>
      <ButtonModal ref={ButtonModalRef}></ButtonModal>
    </MBContainer>
  );
};

export default MegaButton;

const MBContainer = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  background-color: yellow;
  color: white;
  position: relative;
  z-index: 2;
`;

const MyButton = styled.button`
  height: 100%;
  width: 100%;
  z-index: 3;
  &:hover{
    cursor: pointer;
  }
`;
