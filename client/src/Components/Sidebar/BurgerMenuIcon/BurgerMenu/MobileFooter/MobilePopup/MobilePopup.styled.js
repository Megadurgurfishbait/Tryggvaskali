import styled from "styled-components";
import { Colors, Media } from "@Assets/";

export const MPContainer = styled.div`
  position: absolute;
  background: linear-gradient(${Colors.GREEN} 0%, ${Colors.LIGHT_GREEN} 49%, ${Colors.GREEN} 100%);
  background-size: cover;
  height: 40vh;
  width: 100%;
  bottom: ${({ show }) => (show ? "0px" : "-50vh")};
  z-index: 0;
  transition: bottom 1s;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const FakeContainer = styled.div`
  width: 100%;
  height: 55px;
`;

export const List = styled.ul`
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const ListItem = styled.li``;

export const Title = styled.h4`
  font-weight: 900;
  margin: 5px 0px;
  font-size: 15px;
`;
export const Text = styled.text`
  font-size: 25px;
  font-weight: 100;

  ${Media.phone`
      font-size: 22px;
`}
`;
