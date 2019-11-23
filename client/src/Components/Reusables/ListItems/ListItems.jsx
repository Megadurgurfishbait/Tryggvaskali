import React from "react";

import { ListItem, Button } from "./ListItems.styled";
const ListItems = ({ Title, url, setInfoText }) => (
  <ListItem>
    <Button onClick={() => setInfoText(url)}>{Title}</Button>
  </ListItem>
);

export default ListItems;
