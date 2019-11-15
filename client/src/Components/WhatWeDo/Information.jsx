import React, { forwardRef } from "react";
import styled from "styled-components";

import { Colors, Images } from "../../Assets/";
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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 30px;
  color: ${Colors.GREEN};
  background: url(${Images.BackgroundImage});

  ${Media.tablet`
        justify-content: flex-end; `}

  ${Media.large`
      width: 100%;
    `}
`;

const Title = styled.h1`
  height: 120px;
  width: 80%;
  font-size: 35px;
  font-weight: 800;

  ${Media.large`
    font-size: 35px;
  `}

  ${Media.tablet`
        width: 90%;
        font-size: 18px;
        margin: 30px auto;
    `}
`;
const Paragraph = styled.p`
  height: 500px;
  width: 100%;
  line-height: 1.8;
  font-size: 20px;
  margin-top: 30px;

  ${Media.large`
      height: 300px;
      font-size: 18px;
      line-height: 1.6;
    `}

  ${Media.tablet`
        width: 90%;
        line-height: 1.6;
        font-size: 14px;
    `}
`;
