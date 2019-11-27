import styled from "styled-components";
import { Colors, Media } from "@Assets/";

export const BurgerContainer = styled.div`
  position: absolute;
  height: ${({ myHeight }) => (myHeight ? `${myHeight}px` : "100%")};
  top: -60px;
  transition: left 0.5s ease-in;
  left: ${({ ShowMenu }) => (ShowMenu ? "0" : "-100vw")};
  display: flex;
  width: 100vw;
  z-index: 50;
  overflow: hidden;
  background-color: ${Colors.LIGHT_GREEN};
  ${Media.desktop`
  flex-direction: column;
  justify-content: space-between;
  `}
`;
