import styled from "styled-components";
import { Colors, Media, MediaHeight } from "@Assets/";

export const ListItemContainer = styled.li`
  height: 80px;
  width: 100%;
  margin: 5px auto;
  display: flex;
  color: ${Colors.LIGHT_BLUE};

  ${Media.large`height: 60px;`}
  ${Media.phone`height: 28px;`}
&:hover {
    cursor: pointer;
  }
`;

export const NumberText = styled.div`
  font-size: 12px;
  height: 20px;
  width: 20px;
  margin-top: auto;
  transform: translateX(-20px);
`;

export const LinkContainer = styled.a`
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
    fontSize ? "translate3d(-12px, -22px, 0px)" : "translate3d(-20px, -30px, 0px)"};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50")}px;
  margin: 0px;
  transition: transform 0.3s;
  letter-spacing: 1.5px;
  ${Media.large`
      font-size: 35px;
      transform: translate3d(-10px, -15px, 0px);
    `}
  ${Media.phone`
    font-size: 20px;
    transform: translate3d(-10px, -5px, 0px);
  `}
`;
