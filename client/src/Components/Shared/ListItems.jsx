import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";

const ListItems = ({ Title, index, url, setInfoText }) => (
  <>
    <ListItem>
      <Button onClick={() => setInfoText(url)}>{Title}</Button>
    </ListItem>
    {index === 2 ? null : <Break />}
  </>
);

export default ListItems;

const Break = styled.span`
  height: 30px;
  width: 1px;
  background-color: ${Colors.LIGHT_BLUE};
  align-self: center;
  margin-left: -1px;
`;

const ListItem = styled.li`
  margin: none;
  padding: none;
  height: 60px;
  width: 260px;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  height: 30px;
  width: 120px;
  margin: none;
  padding: none;
  border: none;
  color: inherit;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  &:hover,
  &:focus {
    outline: none;
    border-bottom: 1px solid ${Colors.LIGHT_BLUE};
    cursor: pointer;
  }


  ${Media.tablet`
    width: 100%;
    margin: 0px;
    font-size: 12px;
  
  `}

`;
