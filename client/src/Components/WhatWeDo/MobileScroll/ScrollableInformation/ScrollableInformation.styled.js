import styled from "styled-components";
import { Colors } from "@Assets";

export const SIContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.LIGHT_GREEN};
  box-sizing: border-box;
  color: ${Colors.LIGHT_BLUE};
`;

export const Title = styled.h3`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-bottom: 2px solid ${Colors.LIGHT_BLUE};
  line-height: 2;
  font-weight: 800;
  align-self: flex-start;
`;
export const Paragraph = styled.p`
  font-size: 12px;
  padding-left: 10px;
  margin: 20px 0px;
  height: 100%;
  line-height: 1.7;
`;
