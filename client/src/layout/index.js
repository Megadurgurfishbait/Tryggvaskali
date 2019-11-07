import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { sizes } from "../Assets/Varibles/media";

const Layout = ({ children, bgColor, bgImage }) => {
  const { width } = useWindowDimensions();

  return (
    <Div bgImage={bgImage} myWidth={width}>
      <HueonTop bgColor={bgColor} />
      {children}
    </Div>
  );
};

export default Layout;

const Div = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: ${props =>
    props.myWidth > sizes.phone ? "calc(100vw - 60px)" : "100vw"};
  height: 100vh;
  background: url(${props => props.bgImage});
  will-change: transform, opacity;
  overflow: hidden;
  background-size: contain;

  & > div {
    z-index: 2;
  }
`;

const HueonTop = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: ${props => props.bgColor};
  opacity: 0.8;
  z-index: 1;
`;
