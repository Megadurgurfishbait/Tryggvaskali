import styled from "styled-components";

import { Media, MediaHeight } from "@Assets";

export const PictureContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  flex: 0 0 65%;
  position: relative;

  ${MediaHeight.large`
    align-items: center;
    justify-content: center;
    width: 100%;
  `}

  ${Media.desktop`
  flex: 0 0 100%;

`}
`;
