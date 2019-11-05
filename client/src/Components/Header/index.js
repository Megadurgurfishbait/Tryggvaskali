import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../Assets";

const Header = () => (
  <Container>
    <LinkList>
      <ListItems to="/">Heim</ListItems>
      <ListItems to="/menu">Matseðill</ListItems>
      <ListItems to="/whatwedo">Þjónusta</ListItems>
      <ListItems to="/about">Gallery</ListItems>
    </LinkList>
  </Container>
);

export default Header;

const Container = styled.header`
  height: 60px;
  display: flex;
  position: fixed !important;
  z-index: 2;
  top: 0px;
  right: 0px;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${Colors.WHITE};
  background-color: black;
  opacity: 0.35;
  border-bottom-left-radius: 15px;
  box-sizing: border-box;
  border: 2px solid black;
`;

const LinkList = styled.ul`
  height: 100%;
  width: 25vw;
  margin: 0px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Javanese Text";
  letter-spacing: 3px;
`;

const ListItems = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: white;
  }
`;
