import React from "react";

// Components
import Icons from "./Icons";
import LangSwitch from "./LangSwitch";
import BurgerMenuIcon from "../BurgerMenuIcon";
import { Half } from "./DesktopSidebar.styled";

import { Colors, Icon } from "@Assets";

const DesktopSidebar = () => (
  <>
    <Half bgCol={`${Colors.LIGHT_GREEN}`}>
      <BurgerMenuIcon />
    </Half>
    <Half bgCol={`${Colors.GREEN}`}>
      <Icons IconItems={Icon} Icon />
      <LangSwitch />
    </Half>
  </>
);

export default DesktopSidebar;
