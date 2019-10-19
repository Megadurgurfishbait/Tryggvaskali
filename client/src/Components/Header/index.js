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
      <ListItems to="/about">Um Tryggvaskála</ListItems>
    </LinkList>
  </Container>
);

export default Header;

const Container = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  position: fixed !important;
  z-index: 2;
  top: 0px;
  left: 0px;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${Colors.WHITE};
`;

const LinkList = styled.ul`
  height: 100%;
  width: 25vw;
  margin: 0px;
  margin-right: 200px;
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
