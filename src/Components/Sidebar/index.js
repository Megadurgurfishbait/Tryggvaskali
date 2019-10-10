import React from "react";
import styled from "styled-components";

// Components
import Half from "./Half";
import Icons from "./Icons";

// Assets
import { Colors, Icon } from "../../Assets";
import LangSwitch from "./LangSwitch";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Half bgCol={`${Colors.LIGHT_GREEN}`}></Half>
      <Half bgCol={`${Colors.DARK_GREEN}`}>
        <Icons IconItems={Icon} Icon />
        <LangSwitch />
      </Half>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  height: 100vh;
  width: 60px;
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
`;
