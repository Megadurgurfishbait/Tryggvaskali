import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Media } from "@Assets";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed !important;
  z-index: 2;
  top: 0px;
  right: 0px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

export const LinkList = styled.ul`
  height: 100%;
  width: 25vw;
  margin: 0px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Javanese Text";
  letter-spacing: 3px;
  ${Media.large`width: 40vw;`}
`;

export const ListItems = styled(Link)`
  color: ${Colors.WHITE};
  text-decoration: none;
  &:hover {
    border-bottom: white;
  }
`;
