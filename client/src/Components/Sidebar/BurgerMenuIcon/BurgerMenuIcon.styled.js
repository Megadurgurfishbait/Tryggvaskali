import styled from "styled-components";
import { Colors } from "@Assets";

export const ThinContainer = styled.div`
  height: 100vh;
  width: 0px;
  position: relative;
`;

export const Container = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  margin: 0px auto;
  position: relative;
  background-color: ${Colors.LIGHT_GREEN};
  z-index: 10000000000000000000000000000000000000000000000;
  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.span`
  height: 2px;
  position: absolute;
  left: 16px;
  transition: width 0.5s;
  ${Container}:hover & {
    width: 28px;
  }

  top: ${({ t }) => t}px;
  width: ${({ w }) => w}px;
  background-color: ${Colors.LIGHT_BLUE};
`;
