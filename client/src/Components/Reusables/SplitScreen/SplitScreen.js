import React from "react";

// Components
import { SSContainer } from "./SplitScreen.styled";

const SplitScreen = ({
  children,
  column,
  compWidth = `50`,
  compBg,
  compHeight = `100`,
  compJc = `Space-between`,
  compAi = `stretch`,
  bgImage = ""
}) => (
  <SSContainer
    compWidth={compWidth}
    compHeight={compHeight}
    compAi={compAi}
    compBg={compBg}
    column={column}
    compJc={compJc}
    bgImage={bgImage}>
    {children}
  </SSContainer>
);

export default React.memo(SplitScreen);
