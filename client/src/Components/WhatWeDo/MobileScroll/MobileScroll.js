import React from "react";

import MegaButton from "../DesktopContainer/AttentionButton";
import ScrollableInformation from "./ScrollableInformation";
import { MSContainer, MBContainer, Scrollable } from "./MobileScroll.styled";
import { WhatWeDoText } from "@Assets/";

const MobileScroll = () => (
  <MSContainer>
    <Scrollable>
      {Object.values(WhatWeDoText).map(v => (
        <ScrollableInformation title={v.owner} paragraph={v.Par} list={v.List} />
      ))}
    </Scrollable>
    <MBContainer>
      <MegaButton />
    </MBContainer>
  </MSContainer>
);

export default MobileScroll;
