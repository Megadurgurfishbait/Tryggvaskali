import styled from "styled-components";
import { Media } from "@Assets";

export const SidebarContainer = styled.aside`
  height: 100vh;
  width: 60px;
  background-color: ${({ transparent }) => transparent && "transparent"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
  ${Media.tablet`height: 60px;
  `}
`;
