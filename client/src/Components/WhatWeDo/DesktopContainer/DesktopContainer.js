import React, { useContext } from "react";

import { sizes } from "@Assets";
import { useWD } from "@Hooks/";
import AttentionButton from "./AttentionButton";
import Information from "./information/";
import Picture from "./Picture/";
import { SplitScreen, ListItems } from "@Components/Reusables/";
import { DContainer, ListButtons } from "./DesktopContainer.styled";
import { LangContext } from "@Context/Lang";

const DesktopContainer = ({ TextForSite }) => {
  const { width } = useWD();
  const { English } = useContext(LangContext);

  return (
    <DContainer>
      <SplitScreen compJc={"space-evenly"} compAi={"center"} compWidth={"100"}>
        {TextForSite && <Information TextForSite={TextForSite} />}
        {width > sizes.desktop && <Picture />}
      </SplitScreen>
      <ListButtons>
        <AttentionButton />
        <ListItems Title={English ? "Catering" : "Veisluþjónusta"} url='veislu' />
        <ListItems Title={English ? "Groups" : "Hópamatseðlar"} url='hopa' />
        <ListItems Title={English ? "Gift Certificate" : "Gjafabréf"} url='gjafa' />
      </ListButtons>
    </DContainer>
  );
};

export default DesktopContainer;
