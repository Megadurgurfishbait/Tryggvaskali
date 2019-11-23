import styled from "styled-components";
import { Colors, Images, Media } from "@Assets";

export const PContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Images.TryggvaBgImage}) no-repeat;
  background-size: cover;
  background-position-x: 100%;

  ${Media.large`
  background-position-x: 0%;
`}
`;

export const Background = styled.div`
  position: relative;
  height: 500px;
  width: 500px;

  ${Media.large`
  height: 300px;
  width: 300px;
`}
`;

export const BackgroundAnimation = styled.div`
  background-color: ${Colors.GREEN};
  background-size: cover;
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  top: -20px;
  left: -20px;
`;
