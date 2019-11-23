import styled from "styled-components";
import { Colors, VAR } from "@Assets";

export const MBContainer = styled.div`
  height: 60px;
  width: 240px;
  display: flex;
  background-color: yellow;
  color: white;
  position: relative;
  z-index: 5;
`;

export const MyButton = styled.button`
  height: inherit;
  width: inherit;
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
