import React, { useContext } from "react";

import Routes from "../../Routes";
import { Container, LinkList, ListItems } from "./Header.styled";
import { LangContext } from "@Context/Lang";
import { FetchedImage } from "@Context/fetchImage";

const Header = () => {
  const { English } = useContext(LangContext);
  const { tilbodsmatsedill } = useContext(FetchedImage);

  return (
    <Container>
      <LinkList>
        <ListItems to={Routes.frontPage}>{English ? "Home" : "Heim"}</ListItems>
        <ListItems to={Routes.menu}>{English ? "Menu" : "Matseðill"}</ListItems>
        {tilbodsmatsedill && (
          <a href={`${tilbodsmatsedill}`}>{English ? "Seasonal Offer" : "Tilboð"}</a>
        )}
        <ListItems to={Routes.whatwedo}>{English ? "Service" : "Þjónusta"}</ListItems>
        <ListItems to={Routes.gallery}>Gallery</ListItems>
      </LinkList>
    </Container>
  );
};

export default Header;
