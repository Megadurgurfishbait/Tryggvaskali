import React from "react";

import { SidebarIconsContainer, Image } from "./Icons.styled";

const SidebarIcons = ({ IconItems: { Icon, IconInformation } }) => (
  <SidebarIconsContainer>
    {IconInformation.map(value => (
      <Image
        target='_blank'
        backgroundPos={value.Backgroundpos}
        title={value.Tooltip}
        alt={value.Tooltip}
        source={Icon}
        href={value.IconURL}
      />
    ))}
  </SidebarIconsContainer>
);

export default SidebarIcons;
