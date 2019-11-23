import React from "react";

// Assets
import { BurgerMenuText } from "@Assets/";

// Components
import ListItem from "./ListItem";
import { MLContainer } from "./MenuList.styled";

const MenuList = ({ show }) => (
  <MLContainer>
    {BurgerMenuText.map(v => (
      <ListItem show={show} {...v} />
    ))}
  </MLContainer>
);

export default MenuList;
