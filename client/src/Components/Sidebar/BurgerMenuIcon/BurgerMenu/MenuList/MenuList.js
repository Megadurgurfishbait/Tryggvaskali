import React from "react";

// Assets
import { BurgerMenuText } from "@Assets/";

// Components
import ListItem from "./ListItem";
import { MLContainer } from "./MenuList.styled";

const MenuList = ({ show, setShow }) => (
  <MLContainer>
    {BurgerMenuText.map(v => (
      <ListItem show={show} setShow={setShow} {...v} />
    ))}
  </MLContainer>
);

export default MenuList;
