import styled from "styled-components";
import { Colors, Media } from "@Assets";

export const PictureContainer = styled.div`
  overflow-y: auto;
  background-color: ${Colors.DARK_GREEN};
  ${Media.desktop`
  overflow-y: scroll;
  margin-right: 0px;
  opacity: 0;
`}
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${Colors.GREEN};
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${Colors.LIGHT_BLUE};
  }
`;
