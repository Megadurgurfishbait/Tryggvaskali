import React from "react";
import styled from "styled-components";

// Components
import Half from "./Half";
import Icons from "./Icons";

// Assets
import { Colors, Icon } from "../../Assets";
import LangSwitch from "./LangSwitch";
import BurgerMenuIcon from "./BurgerMenuIcon";
import useWD from "../../hooks/useWindowDimensions";
import { sizes } from "../../Assets/Varibles/media";

const Sidebar = () => {
  const { width } = useWD();

  return (
    <SidebarContainer transparent={width > sizes.phone ? "false" : "true"}>
      {width > sizes.phone ? (
        <>
          <Half bgCol={`${Colors.LIGHT_GREEN}`}>
            <BurgerMenuIcon />
          </Half>
          <Half bgCol={`${Colors.GREEN}`}>
            <Icons IconItems={Icon} Icon />
            <LangSwitch />
          </Half>
        </>
      ) : (
        <BurgerMenuIcon />
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  height: 100vh;
  width: 60px;
  background-color: ${props => (props.transparent ? "transparent" : null)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600000; /* Á meðan ég er að gera Fullscreen Menu */
`;
