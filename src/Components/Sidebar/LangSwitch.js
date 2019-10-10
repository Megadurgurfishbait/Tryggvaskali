import React from "react";
import styled from "styled-components";

// Hooks
import useLocalStorage from "../../hooks/useLocalStorage";
import { Colors } from "../../Assets/";

// Context
import LangContext from "../../Context/Lang";

const LangSwitch = () => {
  const [language, setLanguage] = useLocalStorage("EnglishLanguage", false);
  const { English, setEnglish } = React.useContext(LangContext);

  const ChangeLang = () => {
    setLanguage(!language);
    setEnglish(!language);
  };
  return (
    <LangSwitchContainer>
      <Button onClick={() => ChangeLang()}> {English ? "IS" : "EN"} </Button>
    </LangSwitchContainer>
  );
};

export default LangSwitch;

const LangSwitchContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px 15px;
  background-color: transparent;
  font-size: 20px;
  border: none;
  color: ${Colors.LIGHT_BLUE};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;    
  }
`;
