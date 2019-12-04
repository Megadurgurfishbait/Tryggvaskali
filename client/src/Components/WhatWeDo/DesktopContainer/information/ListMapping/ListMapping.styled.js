import styled from "styled-components";
import { Colors } from "@Assets";

export const List = styled.ul`
  columns: ${({ col }) => col};
  width: 95%;
  margin: 50px auto;
  padding: 0px;
  font-size: 16px;
  text-align: left;
  list-style: none;
  padding-left: 20px;
  align-self: flex-end;
  & > li {
    font-weight: 800;
    display: flex;
    align-items: center;
    padding: 10px 0px;

    &::before {
      content: "";
      display: flex;
      margin-right: 5px;
      height: 5px;
      width: 5px;
      background-color: ${Colors.GREEN};
      border-radius: 50%;
    }
  }
`;
