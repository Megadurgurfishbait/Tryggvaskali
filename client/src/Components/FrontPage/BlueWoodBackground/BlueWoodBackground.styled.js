import styled from "styled-components";
import { Link } from "react-router-dom";

import { Colors, Images } from "@Assets";

export const BlueWood = styled.div`
  flex: 0 0 35%;
  height: 100%;
  background-image: url(${Images.BackgroundImage});
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Arrow = styled.span`
  height: 100%;
  width: 60px;
  background-color: ${Colors.LIGHT_GREEN};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  height: 100%;
  width: 140px;
  background-color: ${Colors.GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToMenuBTN = styled(Link)`
  align-self: flex-end;
  margin: 0px 50px 50px 0px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 60px;
  width: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.LIGHT_BLUE};
  outline: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  & > * {
    border: 1px solid ${Colors.LIGHT_BLUE};
  }
`;
