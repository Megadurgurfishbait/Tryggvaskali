import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useTransition, animated } from "react-spring";

import { useRouter, useWD } from "@Hooks/";
import Routes from "./Routes";

import { LangContextProvider, ShowModalContextProvider } from "@Context/";

import { About, FrontPage, Menu, Sidebar, Header, WhatWeDo } from "@Components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', serif !important;
  }
`;

export default function App() {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  let { width } = useWD();

  return (
    <ShowModalContextProvider>
      <LangContextProvider>
        <GlobalStyles />
        <Container>
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
      </LangContextProvider>
    </ShowModalContextProvider>
  );
}

const Container = styled.div`
  margin: 0px;
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
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
