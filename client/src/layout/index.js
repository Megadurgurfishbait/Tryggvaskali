import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { sizes } from "../Assets/Varibles/media";
import Media from "../Assets/Varibles/media";
import MobileControl from "../Components/Reusables/MobileControl/MobileControl";
import MobileText from "../Assets/Texts/MobileControl";
import { ButtonModal } from "../Components";

const Layout = ({ children, bgColor, bgImage }) => {
  const [path, setPath] = React.useState("/");
  const { width, height } = useWindowDimensions();

  console.log(height);
  React.useEffect(() => {
    setPath(window.location.pathname.toLowerCase());
  }, []);

  return (
    <Div myHeight={height} bgImage={bgImage} myWidth={width} bgColor={bgColor}>
      {children}
      {console.log(path)}
      {width < sizes.tablet && <MobileControl ControlObject={MobileText[path]} />}
      <ButtonModal />
    </Div>
  );
};

export default Layout;

const Div = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: ${props => (props.myWidth > sizes.phone ? "calc(100vw - 60px)" : "100vw")};
  height: ${({ myHeight }) => myHeight}px;
  overflow: hidden;
  background-color: ${props => props.bg};
  will-change: transform, opacity;
  padding-left: 60px;
  ${Media.phone`
    padding-left: 0px !important;
  
  `}
`;
