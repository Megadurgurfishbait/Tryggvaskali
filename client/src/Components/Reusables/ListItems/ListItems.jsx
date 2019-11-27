import React from "react";

import { ListItem, Button } from "./ListItems.styled";
import { WhatWeDoSelectionContext } from "@Context/WhatWeDoSelection";

const ListItems = ({ Title, url, setInfoText }) => {
  const { setSelection } = React.useContext(WhatWeDoSelectionContext);
  return (
    <ListItem>
      {setInfoText ? (
        <Button onClick={() => setInfoText(url)}>{Title}</Button>
      ) : (
        <Button onClick={() => setSelection(url)}>{Title}</Button>
      )}
    </ListItem>
  );
};
export default ListItems;
