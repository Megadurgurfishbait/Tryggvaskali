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
        <a href='http://images.ctfassets.net/z0iy5bo5581u/2I5WxJNMCj0h42uw3hBPFe/c62deddccc6a59fe0d8dfdfca67f5131/a1_matsdill-mynd.webp'>
          {English ? "Menu" : "Matseðill"}
        </a>
        <ListItems to={Routes.whatwedo}>{English ? "Service" : "Þjónusta"}</ListItems>
        <ListItems to={Routes.gallery}>Gallery</ListItems>
      </LinkList>
    </Container>
  );
};

export default Header;
