import React from "react";

// Components
import { MBContainer, Selection, ArrowContainer, Text } from "./MobileControl.styled";

const MobileControl = ({ ControlObject: { LeftArrow, RightArrow } }) => (
  <MBContainer>
    <Selection to={LeftArrow.Link}>
      <ArrowContainer>{"<"}</ArrowContainer>
      <Text>{LeftArrow.Title}</Text>
    </Selection>
    <Selection to={RightArrow.Link}>
      <Text>{RightArrow.Title}</Text>
      <ArrowContainer>{">"}</ArrowContainer>
    </Selection>
  </MBContainer>
);

export default MobileControl;
