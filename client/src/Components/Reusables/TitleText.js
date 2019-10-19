import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

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
`;

const Span = styled.h1`
  transform: translate3d(-20px, -25px, 0px);
  font-size: 50px;
  margin: 0px;
  transition: transform 0.3s;
`;
