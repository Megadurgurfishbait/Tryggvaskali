import styled from "styled-components";
import { Media } from "@Assets";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  ${Media.desktop`
    margin: 0px auto;
  `}
`;

export const ListButtons = styled.ul`
  position: fixed;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  bottom: 0px;
  right: 0px;
  margin-bottom: 0px;
  ${Media.desktop`
    margin-right: 0px;
  `}

  ${Media.tablet`
    width: calc(100vw - 60px);
    margin-top: 0px;
    padding: 0px;
    bottom: auto;
    right: 0px;
    top: 0px;
    
  `}
`;
