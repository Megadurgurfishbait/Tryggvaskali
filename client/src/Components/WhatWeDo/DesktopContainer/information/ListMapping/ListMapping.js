import React from "react";

import { List } from "./ListMapping.styled";

const ListMapping = ({ list }) => (
  <List col={list.length > 4 ? 2 : 1}>
    {list.map(v => (
      <li className='StutterLi'>{v}</li>
    ))}
  </List>
);

export default ListMapping;
