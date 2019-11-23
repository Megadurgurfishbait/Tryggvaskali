import React from "react";

import { sizes, textB } from "@Assets";
import { useWD } from "@Hooks/";
import AttentionButton from "./AttentionButton";
import Information from "./information/";
import Picture from "./Picture/";
import { SplitScreen, ListItems } from "@Components/Reusables/";
import { DContainer, ListButtons } from "./DesktopContainer.styled";

const DesktopContainer = React.forwardRef(({ changeMyView, InfoText }, ref) => {
  const { width } = useWD();
  return (
    <DContainer>
      <SplitScreen compJc={"space-evenly"} compAi={"center"} compWidth={"100"}>
        <Information ref={ref} {...InfoText} />
        {width > sizes.desktop && <Picture />}
      </SplitScreen>

      <ListButtons>
        <AttentionButton />
        {textB.map((v, i) => (
          <ListItems {...v} key={i} index={i} setInfoText={changeMyView} />
        ))}
      </ListButtons>
    </DContainer>
  );
});

export default DesktopContainer;
