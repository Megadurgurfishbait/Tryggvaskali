import React from "react";

import { SIContainer, Title, Paragraph } from "./ScrollableInformation.styled";
import ListMapping from "./ListMapping";

const ScrollableInformation = ({ TextForSite: { titill, texti, listi } }) => (
  <SIContainer>
    <Title>{titill}</Title>
    <Paragraph>{texti}</Paragraph>
    {listi && <ListMapping list={listi} />}
  </SIContainer>
);

export default ScrollableInformation;
