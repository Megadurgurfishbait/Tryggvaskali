import styled from "styled-components";
import { Colors } from "@Assets";

export const Span = styled.span`
  display: flex;
  margin-right: 5px;
  height: 5px;
  width: 5px;
  background-color: ${Colors.LIGHT_BLUE};
  border-radius: 50%;
`;

export const List = styled.ul`
  columns: ${({ col }) => col};
  width: 95%;
  margin: auto auto 25px auto;
  padding: 0px;
  font-size: 11px;
  text-align: left;
  list-style: none;
  padding-left: 20px;
  align-self: flex-end;
  & > li {
    font-weight: 800;
    display: flex;
    align-items: center;
    padding: 3px 0px;
  }
`;
