import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useWD } from "@Hooks/";
import { sizes } from "@Assets/";

import { MobileControl } from "@Components/Reusables";

import { LContainer } from "./Layout.styled";

const Layout = ({ children, bgColor, bgImage }) => {
  const { width, height } = useWD();
  return (
    <LContainer myHeight={height} bgImage={bgImage} myWidth={width} bgColor={bgColor}>
      {children}
    </LContainer>
  );
};

export default Layout;
