import React from "react";

// Context
import { LangContext } from "@Context/Lang";

// Components
import { LangSwitchContainer, Button } from "./LangSwitch.styled";

const LangSwitch = () => {
  const { English, setEnglish, setForground, forground } = React.useContext(LangContext);

  function handleChange() {
    setForground(!forground);
    setTimeout(() => setEnglish(!English), 1000);
  }

  return (
    <LangSwitchContainer>
      <Button onClick={() => handleChange()}>{!English ? "EN" : "IS"}</Button>
    </LangSwitchContainer>
  );
};

export default LangSwitch;
