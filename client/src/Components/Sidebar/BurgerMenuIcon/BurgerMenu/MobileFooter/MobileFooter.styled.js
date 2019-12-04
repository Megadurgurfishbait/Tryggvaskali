import styled from "styled-components";
import { Colors, Media } from "@Assets/";

export const AnchorAndButtonStyles = () => {
  return `display: flex;
    align-items: center;
    padding: 10px 0px;
    text-align: center;
    margin: 0px auto;
    ${Media.phone`flex-direction: column;`}
    `;
};

export const MFContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
  position: absolute;
  bottom: 0px;
  align-items: flex-end;
  left: 0px;
`;

export const List = styled.ul`
  position: absolute;
  background-color: ${Colors.LIGHT_GREEN};
  width: 100%;
  display: flex;
  list-style: none;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
  z-index: 1;
  margin: 0px;

  & > a {
    ${AnchorAndButtonStyles};
    text-decoration: none;
    color: inherit;

    ${Media.phone`
      font-size: 11px;
    `}
  }
`;
export const ListItems = styled.button`
  ${AnchorAndButtonStyles};
  background-color: transparent;
  border: none;
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  ${Media.phone`
      font-size: 11px;
    `}
  &:hover,
  &:focus {
    outline: none;
  }
`;
