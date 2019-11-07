import React from "react";
import styled from "styled-components";

const MobileScroll = ({ children }) => (
  <MSContainer>
    <Scrollable>{children}</Scrollable>
  </MSContainer>
);

export default MobileScroll;

const MSContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const Scrollable = styled.div`
  display: flex;
  height: 70vh;
  flex-wrap: nowrap;
  align-items: flex-end;
    overflow-x: scroll;
    margin: 20px;
  &::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
`;
