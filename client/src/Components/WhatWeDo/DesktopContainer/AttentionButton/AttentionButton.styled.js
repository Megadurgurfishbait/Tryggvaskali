import styled from "styled-components";
import { Colors, VAR } from "@Assets";

export const MBContainer = styled.div`
  height: ${({ cHeight }) => cHeight}px;
  width: ${({ cWidth }) => cWidth}px;
  display: flex;
  background-color: yellow;
  color: white;
  position: relative;
  z-index: 5;
  font-size: ${({ cFontSize }) => cFontSize}px;
`;

export const MyButton = styled.button`
  height: inherit;
  width: inherit;
  font-size: inherit;
  z-index: 3;
  background-color: ${Colors.LIGHT_BLUE};
  box-sizing: border-box;
  border: none;
  color: ${Colors.WHITE};
  &:hover,
  &:focus {
    ${VAR.Hover};
  }
`;
