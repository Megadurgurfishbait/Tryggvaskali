import React from "react";
import { createContext } from "react";

export const WhatWeDoSelectionContext = createContext();

const WhatWeDoSelectionContextProvider = props => {
  const [Selection, setSelection] = React.useState("hopa");
  return (
    <WhatWeDoSelectionContext.Provider value={{ Selection, setSelection }}>
      {props.children}
    </WhatWeDoSelectionContext.Provider>
  );
};

export default WhatWeDoSelectionContextProvider;
