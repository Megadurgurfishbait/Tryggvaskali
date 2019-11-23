import styled from "styled-components";

export const MSContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;

export const MBContainer = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Scrollable = styled.div`
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
