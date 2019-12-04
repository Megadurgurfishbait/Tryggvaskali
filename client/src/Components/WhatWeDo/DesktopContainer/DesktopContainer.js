import React, { useContext } from "react";

import { sizes, textB, textB_EN } from "@Assets";
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

  let Mapping = English ? textB_EN : textB;
  return (
    <DContainer>
      <SplitScreen compJc={"space-evenly"} compAi={"center"} compWidth={"100"}>
        {TextForSite && <Information TextForSite={TextForSite} />}
        {width > sizes.desktop && <Picture />}
      </SplitScreen>
      <ListButtons>
        <AttentionButton />
        {Mapping.map((v, i) => (
          <ListItems {...v} key={i} index={i} />
        ))}
      </ListButtons>
    </DContainer>
  );
};

export default DesktopContainer;
