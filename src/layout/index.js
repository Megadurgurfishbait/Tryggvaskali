import React from "react";
import styled from "styled-components";

const Layout = ({ children, bgColor, bgImage }) => {
  return (
    <Div bgImage={bgImage}>
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
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url(${props => props.bgImage});
  will-change: transform, opacity;
  overflow: hidden;

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
