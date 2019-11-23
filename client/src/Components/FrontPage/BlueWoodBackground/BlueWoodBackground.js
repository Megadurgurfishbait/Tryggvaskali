import React from "react";

// Routes
import Routes from "../../../Routes";
import ShowFood from "./ShowFood";
import { BlueWood, ToMenuBTN, Text, Arrow } from "./BlueWoodBackground.styled";

const BlueWoodBackground = () => (
  <BlueWood>
    <ShowFood />
    <ToMenuBTN to={Routes.menu}>
      <Text>Matseðill</Text>
      <Arrow>{`>`}</Arrow>
    </ToMenuBTN>
  </BlueWood>
);

export default BlueWoodBackground;
