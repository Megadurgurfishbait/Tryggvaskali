import React from "react";

import MegaButton from "../DesktopContainer/AttentionButton";
import ScrollableInformation from "./ScrollableInformation";
import { MSContainer, MBContainer, MSHeader, TestContainer } from "./MobileScroll.styled";
import { textB } from "@Assets/";
import { ListItems } from "@Components/Reusables";

const MobileScroll = ({ InfoText }) => (
  <MSContainer>
    <MSHeader>
      {textB.map((v, i) => (
        <ListItems {...v} key={i} index={i} />
      ))}
    </MSHeader>
    <TestContainer>
      <ScrollableInformation {...InfoText} />
    </TestContainer>
    <MBContainer>
      <MegaButton cHeight={50} cWidth={200} cFontSize={14} />
    </MBContainer>
  </MSContainer>
);

export default MobileScroll;
