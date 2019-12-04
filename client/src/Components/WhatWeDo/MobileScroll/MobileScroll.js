import React, { useContext } from "react";

import MegaButton from "../DesktopContainer/AttentionButton";
import ScrollableInformation from "./ScrollableInformation";
import { MSContainer, MBContainer, MSHeader, TestContainer } from "./MobileScroll.styled";
import { textB, textB_EN } from "@Assets/";
import { ListItems } from "@Components/Reusables";
import { LangContext } from "@Context/Lang";

const MobileScroll = ({ TextForSite }) => {
  const { English } = useContext(LangContext);

  let Mapping = English ? textB_EN : textB;
  return (
    <MSContainer>
      <MSHeader>
        {Mapping.map((v, i) => (
          <ListItems {...v} key={i} index={i} />
        ))}
      </MSHeader>
      <TestContainer>
        {TextForSite && <ScrollableInformation TextForSite={TextForSite} />}
      </TestContainer>
      <MBContainer>
        <MegaButton cHeight={50} cWidth={200} cFontSize={14} />
      </MBContainer>
    </MSContainer>
  );
};
export default MobileScroll;
