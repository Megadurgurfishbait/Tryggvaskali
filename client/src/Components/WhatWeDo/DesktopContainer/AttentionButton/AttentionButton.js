import React, { useContext } from "react";

import { ShowModalContext } from "@Context/ShowModal";
import { MBContainer, MyButton } from "./AttentionButton.styled";
import { LangContext } from "@Context/Lang";

const AttentionButton = ({ cHeight = 60, cWidth = 240, cFontSize = 14 }) => {
  const { English } = useContext(LangContext);
  const { showModal, setShowModal } = useContext(ShowModalContext);
  return (
    <MBContainer cHeight={cHeight} cWidth={cWidth} cFontSize={cFontSize}>
      <MyButton onClick={() => setShowModal(!showModal)}>
        {English ? "Contact" : "Hafa Samband"}
      </MyButton>
    </MBContainer>
  );
};

export default AttentionButton;
