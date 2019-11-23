import styled from "styled-components";
import { Colors } from "@Assets";

export const SidebarIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 75%;
  width: 100%;
`;

export const Image = styled.a`
  height: 40px;
  width: 40px;
  background: url(${({ source }) => source});
  background-color: ${Colors.LIGHT_BLUE};
  background-position-x: -1px;
  background-position-y: ${({ backgroundPos }) => backgroundPos};
  border-radius: 5px;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;
