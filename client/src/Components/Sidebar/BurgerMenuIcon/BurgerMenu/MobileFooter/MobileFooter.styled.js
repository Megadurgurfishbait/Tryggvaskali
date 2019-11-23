import styled from "styled-components";
import { Colors, Media } from "@Assets/";

export const AnchorAndButtonStyles = () => {
  return `display: flex;
    align-items: center;
    padding: 10px 0px;
    text-align: center;
    margin: 5px auto;
    ${Media.phone`flex-direction: column;`}
    `;
};

export const MFContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
  position: relative;
  z-index: 10;
`;

export const List = styled.ul`
  position: absolute;
  background-color: ${Colors.LIGHT_GREEN};
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
  bottom: 0px;
  z-index: 1;
  margin: 0px;

  & > a {
    ${AnchorAndButtonStyles};
    text-decoration: none;
    color: inherit;
  }
`;
export const ListItems = styled.button`
  ${AnchorAndButtonStyles};
  background-color: transparent;
  border: none;
  font-family: inherit;
  color: inherit;
  font-size: inherit;

  &:hover,
  &:focus {
    outline: none;
  }
`;
