import React, { useContext } from "react";

// Assets
import { BurgerMenuText, BurgerMenuTextEN } from "@Assets/";

// Components
import ListItem from "./ListItem";
import { MLContainer } from "./MenuList.styled";
import { LangContext } from "@Context/Lang";

const MenuList = ({ show, setShow }) => {
  const { English } = useContext(LangContext);
  let Mapping = English ? BurgerMenuTextEN : BurgerMenuText;
  return (
    <MLContainer>
      {Mapping.map(v => (
        <ListItem show={show} setShow={setShow} {...v} />
      ))}
    </MLContainer>
  );
};

export default MenuList;
