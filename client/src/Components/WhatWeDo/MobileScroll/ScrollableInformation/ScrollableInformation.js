import React from "react";

import { SIContainer, Title, Paragraph } from "./ScrollableInformation.styled";
import ListMapping from "./ListMapping";

const ScrollableInformation = ({ title, paragraph, list }) => (
  <SIContainer>
    <Title>{title}</Title>
    <Paragraph>{paragraph}</Paragraph>
    {list && <ListMapping list={list} />}
  </SIContainer>
);

export default ScrollableInformation;
