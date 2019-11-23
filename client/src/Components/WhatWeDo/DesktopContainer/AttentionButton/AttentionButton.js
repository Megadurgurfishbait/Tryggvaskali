import React, { useContext } from "react";

import { ShowModalContext } from "@Context/ShowModal";
import { MBContainer, MyButton } from "./AttentionButton.styled";

const AttentionButton = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  return (
    <MBContainer>
      <MyButton onClick={() => setShowModal(!showModal)}> Hafa Samband</MyButton>
    </MBContainer>
  );
};

export default AttentionButton;
