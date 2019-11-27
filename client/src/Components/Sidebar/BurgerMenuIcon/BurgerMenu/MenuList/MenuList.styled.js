import styled from "styled-components";
import { Media } from "@Assets/";

export const MLContainer = styled.ul`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  ${Media.desktop`
  height: calc(100% - 69px);
  margin: 0px auto;
`}
`;
