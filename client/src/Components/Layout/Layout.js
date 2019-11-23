import React from "react";

import { useWD } from "@Hooks/";
import { sizes, MobileText } from "@Assets/";

import { MobileControl } from "@Components/Reusables";
import Modal from "@Components/Modal/";

import { LContainer } from "./Layout.styled";

const Layout = ({ children, bgColor, bgImage }) => {
  const [path, setPath] = React.useState("/");
  const { width, height } = useWD();

  React.useEffect(() => {
    setPath(window.location.pathname.toLowerCase());
  }, []);

  return (
    <LContainer myHeight={height} bgImage={bgImage} myWidth={width} bgColor={bgColor}>
      {children}
      {width < sizes.phone && <MobileControl ControlObject={MobileText[path]} />}
      <Modal />
    </LContainer>
  );
};

export default Layout;
