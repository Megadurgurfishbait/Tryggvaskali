import React, { useRef, createContext, useState, useEffect } from "react";
import styled from "styled-components";
import useLocalStorage from "@Hooks/useLocalStorage";
import { TimelineMax } from "gsap";
import { Colors } from "@Assets/";

export const LangContext = createContext();

const LangContextProvider = props => {
  let firstForgroundRef = useRef();
  let secondForgroundRef = useRef();
  const [English, setEnglish] = useState(useLocalStorage("EnglishLanguage")[0]);
  const [, setLanguage] = useLocalStorage("EnglishLanguage");
  const [forground, setForground] = useState(false);
  let tl = new TimelineMax();
  useEffect(() => {
    let SF = secondForgroundRef.current;
    let FF = firstForgroundRef.current;

    if (forground) {
      tl.to(SF, 0.6, { width: "100%" })
        .to(FF, 0.5, { width: "100%", opacity: 0.6 }, "-=.2")
        .to(FF, 0.5, { height: 0, opacity: 0 })
        .to(
          SF,
          0.4,
          {
            height: 0,
            opacity: 0.5
          },
          "-=.35"
        )
        .set(SF, {
          height: "100%",
          width: "0%",
          opacity: 1
        })
        .set(FF, { height: "100%", width: "0%", opacity: 1 });
    }
    setForground(false);
    setLanguage(English);
  }, [English, forground, setLanguage]);
  return (
    <LangContext.Provider value={{ English, setEnglish, setForground }}>
      <DIV ref={firstForgroundRef} />
      <SecondDiv ref={secondForgroundRef} />
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;

const DIV = styled.div`
  height: 100vh;
  width: 0;
  background-color: ${Colors.LIGHT_GREEN};
  z-index: 50000000000000000;
  position: absolute;
  top: 0;
  left: 0;
`;

const SecondDiv = styled.div`
  height: 100vh;
  width: 0;
  background-color: ${Colors.GREEN};
  z-index: 50000000;
  position: absolute;
  top: 0;
  left: 0;
`;
