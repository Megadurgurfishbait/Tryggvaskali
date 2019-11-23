import styled from "styled-components";
import { Media, sizes } from "@Assets/";

export const LContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  will-change: transform, opacity;
  padding-left: 60px;

  ${Media.phone`
    padding-left: 0px !important;
  `}

  background-color: ${({ bg }) => bg};
  height: ${({ myHeight }) => myHeight}px;
  width: ${({ myWidth }) => (myWidth > sizes.phone ? "calc(100vw - 60px)" : "100vw")};
`;
