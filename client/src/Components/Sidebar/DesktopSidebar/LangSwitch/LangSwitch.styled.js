import styled from "styled-components";
import { Colors } from "@Assets/";

export const LangSwitchContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px 15px;
  background-color: transparent;
  font-size: 20px;
  border: none;
  color: ${Colors.LIGHT_BLUE};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }
`;
