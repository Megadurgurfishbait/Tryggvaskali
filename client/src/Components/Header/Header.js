import React, { useContext } from "react";

import Routes from "../../Routes";
import { Container, LinkList, ListItems } from "./Header.styled";
import { LangContext } from "@Context/Lang";

const Header = () => {
  const { English } = useContext(LangContext);

  return (
    <Container>
      <LinkList>
        <ListItems to={Routes.frontPage}>{English ? "Home" : "Heim"}</ListItems>
        <ListItems to={Routes.menu}>{English ? "Menu" : "Matseðill"}</ListItems>
        <ListItems to={Routes.whatwedo}>{English ? "Service" : "Þjónusta"}</ListItems>
        <ListItems to={Routes.gallery}>Gallery</ListItems>
      </LinkList>
    </Container>
  );
};

export default Header;
