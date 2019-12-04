import React from "react";

import { useWD } from "@Hooks/";
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
