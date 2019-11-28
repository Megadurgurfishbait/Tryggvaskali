import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Media } from "@Assets";
import { MediaHeight } from "@Assets/";

export const TTContainer = styled.div`
  height: 40px;
  margin-top: auto;
  background-color: ${Colors.WHITE_GREEN};
  ${Media.large`
      height: 30px;
    `}
`;

export const LinkContainer = styled(Link)`
  height: 40px;
  margin-top: auto;
  background-color: ${Colors.WHITE_GREEN};
  color: ${Colors.LIGHT_BLUE};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  ${Media.large`
      height: 30px;
    `}

  ${MediaHeight.phone`
      height: 25px;
  `}
`;

export const Span = styled.h1`
  transform: ${({ fontSize }) =>
    fontSize ? "translate3d(-12px, -17px, 0px)" : "translate3d(-20px, -25px, 0px)"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50")}px;
  margin: 0px;
  transition: transform 0.3s;
  ${Media.large`
      font-size: 35px;
      transform: translate3d(-10px, -15px, 0px);
    `}
  ${Media.phone`
    font-size: 20px;
    transform: translate3d(-10px, -5px, 0px);
  `}
`;
