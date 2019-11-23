import React from "react";

import Routes from "../../Routes";
import { Container, LinkList, ListItems } from "./Header.styled";

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
