import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useTransition, animated } from "react-spring";

import { useRouter, useWD } from "@Hooks/";
import Routes from "./Routes";

import { LangContextProvider, ShowModalContextProvider, WhatWeDoContextProvider } from "@Context/";

import { About, FrontPage, Menu, Sidebar, Header, WhatWeDo } from "@Components";
import { Modal } from "./Components";
import { SliderContext } from "@Context/Slider";
import { sizes, MobileText } from "./Assets";
import { MobileControl } from "@Components/Reusables";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', serif !important;
  }
`;

function Config(Direction) {
  let config =
    Direction === "left"
      ? {
          from: { opacity: 0, transform: "translate3d(100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
        }
      : {
          from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(50%,0,0)" }
        };

  return config;
}

export default function App() {
  const { location } = useRouter();

  const { Direction } = React.useContext(SliderContext);

  const transitions = useTransition(location, location => location.pathname, Config(Direction));

  let { width, height } = useWD();

  return (
    <ShowModalContextProvider>
      <LangContextProvider>
        <WhatWeDoContextProvider>
          <GlobalStyles />
          <Modal />
          <Container
            forPhoneHeight={width < sizes.tablet ? height : "100vh"}
            forPhoneWidth={width < sizes.tablet ? width : "100vw"}>
            {width < sizes.phone && <MobileControl />}
            {/* Tökum Header fyrir utan Animations */}
            {width > 767 && <Header />}
            {/* Setja inn Sidebar hér svo svo að Sidebar verði ekki partur af Animation heldur */}
            <Sidebar />
            {transitions.map(({ item, props, key }) => (
              <Animate key={key} style={props}>
                <Switch location={item}>
                  <Route path={Routes.frontPage} exact component={FrontPage} />
                  <Route path={Routes.whatwedo} component={WhatWeDo} />
                  <Route path={Routes.menu} component={Menu} />
                  <Route path={Routes.gallery} component={About} />
                </Switch>
              </Animate>
            ))}
          </Container>
        </WhatWeDoContextProvider>
      </LangContextProvider>
    </ShowModalContextProvider>
  );
}

const Container = styled.div`
  margin: 0px;

  min-height: ${({ forPhoneHeight }) => forPhoneHeight};
  min-width: ${({ forPhoneWidth }) => forPhoneWidth};
  max-height: ${({ forPhoneHeight }) => forPhoneHeight};
  max-width: ${({ forPhoneWidth }) => forPhoneWidth};
  overflow-x: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const Animate = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
