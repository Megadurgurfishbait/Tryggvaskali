import React from "react";

import { Icons } from "@Assets";
import { SidebarIconsContainer, Image } from "./Icons.styled";

const SidebarIcons = () => (
  <SidebarIconsContainer>
    <Image
      target='_blank'
      backgroundPos={"-1px"}
      title={"TripAdvisor"}
      alt={"TripAdvisor"}
      source={Icons}
      href={
        "https://www.tripadvisor.com/Restaurant_Review-g315852-d4549910-Reviews-Tryggvaskali_Restaurant-Selfoss_South_Region.html"
      }
    />
    <Image
      target='_blank'
      backgroundPos={"-43px"}
      title={"Instagram"}
      alt={"Instagram"}
      source={Icons}
      href={"https://www.instagram.com/tryggvaskali"}
    />
    <Image
      target='_blank'
      backgroundPos={"-127px"}
      title={"Facebook"}
      alt={"Facebook"}
      source={Icons}
      href={"https://www.facebook.com/Tryggvaskali/"}
    />
  </SidebarIconsContainer>
);

export default SidebarIcons;
