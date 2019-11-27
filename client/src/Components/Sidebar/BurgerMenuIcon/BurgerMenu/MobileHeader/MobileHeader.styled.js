import styled from "styled-components";
import { Colors } from "@Assets/";

export const BurgerHeader = styled.header`
  height: 150px;
  width: 100%;
  background: linear-gradient(${Colors.GREEN} 0%, ${Colors.LIGHT_GREEN} 49%, ${Colors.GREEN} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  color: ${Colors.LIGHT_BLUE};
`;

export const Text = styled.h1`
  font-size: 25px;
  margin: 0px;
  font-weight: 100;
`;
