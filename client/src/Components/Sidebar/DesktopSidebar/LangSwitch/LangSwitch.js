import React from "react";

// Context
import { LangContext } from "@Context/Lang";

// Components
import { LangSwitchContainer, Button } from "./LangSwitch.styled";

const LangSwitch = () => {
  const { English, setEnglish } = React.useContext(LangContext);
  return (
    <LangSwitchContainer>
      <Button onClick={() => setEnglish(!English)}> {English ? "EN" : "IS"} </Button>
    </LangSwitchContainer>
  );
};

export default LangSwitch;
