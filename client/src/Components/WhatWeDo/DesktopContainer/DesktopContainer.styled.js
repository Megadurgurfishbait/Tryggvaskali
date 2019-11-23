import styled from "styled-components";
import { Images, Media } from "@Assets";

export const DContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  background: url(${Images.TryggvaBgImage}) no-repeat;
  background-size: cover;
  background-position: 0% 100%;
`;

export const ListButtons = styled.ul`
  height: 60px;
  width: 60%;
  list-style: none;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-bottom: 0px;
  position: absolute;
  bottom: 0;
  border: none;
  ${Media.desktop`
  width: 100%;
  margin: 0px;
`}
`;
