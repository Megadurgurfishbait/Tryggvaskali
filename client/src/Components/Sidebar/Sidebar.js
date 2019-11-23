import React from "react";

// Components
import DesktopSidebar from "./DesktopSidebar/";
import BurgerMenuIcon from "./BurgerMenuIcon";

// Assets
import { SidebarContainer } from "./Sidebar.styled";
import { sizes } from "@Assets";
import { useWD } from "@Hooks/";

const Sidebar = () => {
  const { width } = useWD();
  return (
    <SidebarContainer transparent={width > sizes.tablet ? "false" : "true"}>
      {width > sizes.tablet ? <DesktopSidebar /> : <BurgerMenuIcon />}
    </SidebarContainer>
  );
};

export default Sidebar;
