import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";
import Routes from "../../Routes";

const Header = () => (
  <Container>
    <LinkList>
      <ListItems to={Routes.frontPage}>Heim</ListItems>
      <ListItems to={Routes.menu}>Matseðill</ListItems>
      <ListItems to={Routes.whatwedo}>Þjónusta</ListItems>
      <ListItems to={Routes.gallery}>Gallery</ListItems>
    </LinkList>
  </Container>
);

export default Header;

const Container = styled.header`
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

  ${Media.large`width: 50%;`}
  ${Media.desktop`width: 100%;`}
`;

const ListItems = styled(Link)`
  color: ${Colors.WHITE};
  text-decoration: none;
  &:hover {
    border-bottom: white;
  }
`;
