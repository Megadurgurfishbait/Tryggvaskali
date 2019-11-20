import React, { useContext } from "react";
import styled from "styled-components";

import { Colors, VAR } from "../../Assets";
import ShowModalContext from "../../Context/ShowModal";

const MegaButton = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  return (
    <MBContainer>
      <MyButton onClick={() => setShowModal(!showModal)}> Hafa Samband</MyButton>
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
