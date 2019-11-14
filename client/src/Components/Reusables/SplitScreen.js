import React from "react";
import styled from "styled-components";

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
  <DIV
    compWidth={compWidth}
    compHeight={compHeight}
    compAi={compAi}
    compBg={compBg}
    column={column}
    compJc={compJc}
    bgImage={bgImage}
  >
    {children}
  </DIV>
);

export default React.memo(SplitScreen);

const DIV = styled.div`
  height: ${props => props.compHeight}%;
  width: ${props => props.compWidth}%;
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  justify-content: ${props => props.compJc};
  background-color: ${props => props.compBg};
  align-items: ${props => props.compAi};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  
`;
