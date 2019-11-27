import styled from "styled-components";
import { Colors } from "@Assets/";

export const MSContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.GREEN};
`;

export const TestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const MSHeader = styled.div`
  height: 60px;
  width: calc(100% - 60px);
  display: flex;
  padding-left: 60px;
`;
export const MBContainer = styled.div`
  margin: 0px 0px 30px 0px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
