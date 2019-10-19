import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import useRouter from "./hooks/useRouter";

import { About, FrontPage, Menu, Sidebar, Header } from "./Components";


import LangContext from "./Context/Lang";
import useLocalStorage from "./hooks/useLocalStorage";
import WhatWeDo from "./Components/WhatWeDo";

export default function App() {
  const [English, setEnglish] = React.useState(
    useLocalStorage("EnglishLanguage")[0]
  );
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return transitions.map(({ item, props, key }) => (
    <LangContext.Provider value={{ English, setEnglish }}>
      <Container>
        {/* Tökum Header fyrir utan Animations */}
         <Header /> 
        {/* Setja inn Sidebar hér svo svo að Sidebar verði ekki partur af Animation heldur */}
        <Sidebar />
        <Animate key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={FrontPage} />
            <Route path="/frontpage" component={FrontPage} />
            <Route path="/whatwedo" component={WhatWeDo} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
          </Switch>
        </Animate>
      </Container>
    </LangContext.Provider>
  ));
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
