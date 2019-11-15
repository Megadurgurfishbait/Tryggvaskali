import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { sizes } from "../Assets/Varibles/media";
import Media from "../Assets/Varibles/media";

const Layout = ({ children, bgColor, bgImage }) => {
  const { width } = useWindowDimensions();

  return (
    <Div bgImage={bgImage} myWidth={width} bgColor={bgColor}>
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
  height: 100%;
  background-color: ${props => props.bg};
  will-change: transform, opacity;
  overflow: hidden;

  padding-left: 60px;


  ${Media.phone`
    padding-left: 0px !important;
  
  `}


  & > div {
    z-index: 2;
  }
`;