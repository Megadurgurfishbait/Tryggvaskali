import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

/*
    Setja inn myndir og Tooltip á þær ásamt alt Texta.
*/
const SidebarIcons = ({ IconItems: { Icon, IconInformation } }) => (
  <SidebarIconsContainer>
    {IconInformation.map(value => (
      <Image
        backgroundPos={value.Backgroundpos}
        title={value.Tooltip}
        alt={value.Tooltip}
        source={Icon}
      />
    ))}
  </SidebarIconsContainer>
);

export default SidebarIcons;

const SidebarIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 75%;
  width: 100%;
`;

const Image = styled.a`
  height: 40px;
  width: 40px;
  background: url(${props => props.source});
  background-color: ${Colors.LIGHT_BLUE};
  background-position-x: -1px;
  background-position-y: ${props => props.backgroundPos};
  border-radius: 5px;
  
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;
