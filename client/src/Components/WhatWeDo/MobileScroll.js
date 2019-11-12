import React from "react";
import styled from "styled-components";
import MegaButton from "./MegaButton";

const MobileScroll = ({ children }) => (
  <MSContainer>
    <Scrollable>{children}</Scrollable>
    <MBContainer>
      <MegaButton />
    </MBContainer>
  </MSContainer>
);

export default MobileScroll;

const MSContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;

`;

const MBContainer = styled.div`
margin: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Scrollable = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  overflow: auto;
  margin: 20px;

  &::-webkit-scrollbar {
    background: transparent;
    width: 0px;
  }
`;
