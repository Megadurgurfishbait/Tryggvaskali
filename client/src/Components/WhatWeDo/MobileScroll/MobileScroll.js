import React, { useContext } from "react";

import MegaButton from "../DesktopContainer/AttentionButton";
import ScrollableInformation from "./ScrollableInformation";
import { MSContainer, MBContainer, MSHeader, TestContainer } from "./MobileScroll.styled";
import { ListItems } from "@Components/Reusables";
import { LangContext } from "@Context/Lang";

const MobileScroll = ({ TextForSite }) => {
  const { English } = useContext(LangContext);
  return (
    <MSContainer>
      <MSHeader>
        <ListItems Title={English ? "Catering" : "Veisluþjónusta"} url='veislu' />
        <ListItems Title={English ? "Groups" : "Hópamatseðlar"} url='hopa' />
        <ListItems Title={English ? "Gift Certificate" : "Gjafabréf"} url='gjafa' />
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
