import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";

const TitleText = ({ children }) => (
  <TTContainer>
    <Span>{children}</Span>
  </TTContainer>
);

export default React.memo(TitleText);

const TTContainer = styled.div`
  height: 40px;
  margin-top: auto;
  background-color: ${Colors.WHITE_GREEN};

  ${Media.large`
      height: 30px;
    `}
`;

const Span = styled.h1`
  transform: translate3d(-20px, -25px, 0px);
  font-size: 50px;
  margin: 0px;
  transition: transform 0.3s;
  ${Media.large`
      font-size: 35px;
      transform: translate3d(-10px, -15px, 0px);
    `}

  ${Media.phone`
    font-size: 20px;
    transform: translate3d(-10px, -5px, 0px);
  `}
`;
