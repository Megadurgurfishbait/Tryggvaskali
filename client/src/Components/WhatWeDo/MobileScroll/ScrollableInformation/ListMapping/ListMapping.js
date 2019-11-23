import React from "react";

import { List, Span } from "./ListMapping.styled";

const ListMapping = ({ list }) => (
  <List col={list.length > 4 ? 2 : 1}>
    {list.map(v => (
      <li>
        <Span />
        {v}
      </li>
    ))}
  </List>
);

export default ListMapping;
