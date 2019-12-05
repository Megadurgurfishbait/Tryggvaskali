import React, { useContext } from "react";
import Routes from "../../../../../Routes";
// Assets

// Components
import ListItem from "./ListItem";
import { MLContainer } from "./MenuList.styled";
import { LangContext } from "@Context/Lang";
import { FetchedImage } from "@Context/fetchImage";

const MenuList = ({ show, setShow }) => {
  const { hadegismatsedill, tilbodsmatsedill } = React.useContext(FetchedImage);
  const { English } = useContext(LangContext);
  return (
    <MLContainer>
      <ListItem
        show={show}
        setShow={setShow}
        Number={"01"}
        Title={English ? "Home" : "Heim"}
        Link={`${Routes.frontPage}`}
      />
      <ListItem
        show={show}
        setShow={setShow}
        Number={"02"}
        Title={English ? "Menu" : "Matseðill"}
        Link={`${Routes.menu}`}
      />

      <ListItem
        show={show}
        setShow={setShow}
        Number={"03"}
        Title={English ? "Catering" : "Veisluþjónusta"}
        Link={`${Routes.whatwedo}`}
        nestedRoute={"veislu"}
      />
      <ListItem
        show={show}
        setShow={setShow}
        Number={"04"}
        Title={English ? "Groups" : "Hópamatseðill"}
        Link={`${Routes.whatwedo}`}
        nestedRoute={"hopa"}
      />
      <ListItem
        show={show}
        setShow={setShow}
        Number={"05"}
        Title={English ? "Gift Certificates" : "Gjafabréf"}
        Link={`${Routes.whatwedo}`}
        nestedRoute={"gjafa"}
      />
      <ListItem
        show={show}
        setShow={setShow}
        Number={"06"}
        Title={"Gallery"}
        Link={`${Routes.gallery}`}
      />
      {hadegismatsedill && (
        <ListItem
          show={show}
          setShow={setShow}
          Number={"07"}
          Title={English ? "Lunch Menu" : "Hádegismatseðill"}
          href={`${hadegismatsedill}`}
        />
      )}
      {tilbodsmatsedill && (
        <ListItem
          show={show}
          setShow={setShow}
          Number={"08"}
          Title={English ? "Seasonal Offers" : "Tilboð"}
          href={`${tilbodsmatsedill}`}
        />
      )}
    </MLContainer>
  );
};

export default MenuList;
