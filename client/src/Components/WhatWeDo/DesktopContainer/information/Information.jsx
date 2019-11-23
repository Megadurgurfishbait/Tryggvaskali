import React, { forwardRef } from "react";

import { IContainer, Title, Paragraph } from "./Information.styled";

const Information = forwardRef(({ Tit, Par }, ref) => (
  <IContainer>
    <Title ref={ref.current[0]}> {Tit}</Title>
    <Paragraph ref={ref.current[1]}>{Par}</Paragraph>
  </IContainer>
));

export default Information;
