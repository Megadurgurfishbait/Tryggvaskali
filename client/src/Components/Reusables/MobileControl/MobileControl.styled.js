import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "@Assets";

export const ArrowContainer = styled.div`
  height: 100%;
  width: 50px;
  background-color: ${Colors.LIGHT_BLUE};
  color: ${Colors.LIGHT_GREEN};
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
  border-radius: 50%;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.15);
`;

export const Text = styled.h6`
  height: 100%;
  width: 90px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const MBContainer = styled.div`
  position: absolute;
  display: flex;
  height: 50px;
  width: 100%;
  bottom: 0px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Selection = styled(Link)`
  height: 100%;
  margin: 10px;
  text-decoration: none;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  &::focus,
  &::hover > * {
    outline: none;
    box-shadow: none;
  }
`;
