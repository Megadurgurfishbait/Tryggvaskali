import React from "react";

import { SIContainer, Title, Paragraph } from "./ScrollableInformation.styled";
import ListMapping from "./ListMapping";

const ScrollableInformation = ({ Tit, Par, List }) => (
  <SIContainer>
    <Title>{Tit}</Title>
    <Paragraph>{Par}</Paragraph>
    {List && <ListMapping list={List} />}
  </SIContainer>
);

export default ScrollableInformation;
