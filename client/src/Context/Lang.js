import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "@Hooks/useLocalStorage";

export const LangContext = createContext();

const LangContextProvider = props => {
  const [English, setEnglish] = useState(useLocalStorage("EnglishLanguage")[0]);
  const [, setLanguage] = useLocalStorage("EnglishLanguage");

  useEffect(() => {
    setLanguage(English);
  }, [English, setLanguage]);
  return (
    <LangContext.Provider value={{ English, setEnglish }}>{props.children}</LangContext.Provider>
  );
};

export default LangContextProvider;
