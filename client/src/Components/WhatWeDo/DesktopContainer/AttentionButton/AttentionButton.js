import React, { useContext } from "react";

import { ShowModalContext } from "@Context/ShowModal";
import { MBContainer, MyButton } from "./AttentionButton.styled";

const AttentionButton = ({ cHeight = 60, cWidth = 240, cFontSize = 16 }) => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  return (
    <MBContainer cHeight={cHeight} cWidth={cWidth} cFontSize={cFontSize}>
      <MyButton onClick={() => setShowModal(!showModal)}> Hafa Samband</MyButton>
    </MBContainer>
  );
};

export default AttentionButton;
