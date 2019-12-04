import React, { useContext } from "react";

// Routes
import Routes from "../../../Routes";
import ShowFood from "./ShowFood";
import { BlueWood, ToMenuBTN, Text, Arrow } from "./BlueWoodBackground.styled";
import { LangContext } from "@Context/Lang";

const BlueWoodBackground = () => {
  const { English } = useContext(LangContext);

  return (
    <BlueWood>
      <ShowFood />
      <ToMenuBTN to={Routes.menu}>
        <Text>{English ? "Menu" : "Matseðill"}</Text>
        <Arrow>{`>`}</Arrow>
      </ToMenuBTN>
    </BlueWood>
  );
};

export default BlueWoodBackground;
