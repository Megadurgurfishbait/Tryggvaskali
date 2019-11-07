import React, { forwardRef } from "react";
import styled from "styled-components";

import { Colors } from "../../Assets/";
import Media from "../../Assets/Varibles/media";

const Information = forwardRef(({ Tit, Par }, ref) => {
  return (
    <IContainer>
      <Title ref={ref.current[0]}> {Tit}</Title>
      <Paragraph ref={ref.current[1]}>{Par}</Paragraph>
    </IContainer>
  );
});

export default Information;

const IContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.LIGHT_BLUE};

  ${Media.tablet`
        justify-content: flex-end; `}
`;

const Title = styled.h1`
  height: 20px;
  width: 60%;
  margin: 100px auto;

  ${Media.tablet`
        width: 90%;
        font-size: 18px;
        margin: 30px auto;
    `}
`;
const Paragraph = styled.p`
  height: 500px;
  width: 60%;
  line-height: 2;
  font-size: 20px;

  ${Media.tablet`
        width: 90%;
        line-height: 1.6;
        font-size: 14px;
    `}
`;
