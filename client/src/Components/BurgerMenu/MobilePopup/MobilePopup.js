import React from "react";
import styled from "styled-components";
import { Colors, Images } from "../../../Assets";
import Media from "../../../Assets/Varibles/media";

const MobilePopup = ({ ShowMe, ItemsToShow }) => (
  <MPContainer show={ShowMe}>
    <List>
      {ItemsToShow.map(v => (
        <ListItem>
          <Title>{v.Title}</Title>
          <Text>{v.Text}</Text>
        </ListItem>
      ))}
      <FakeContainer />
    </List>
  </MPContainer>
);

export default MobilePopup;

const MPContainer = styled.div`
  position: absolute;
  background-color: ${Colors.GREEN};
  background-size: cover;
  border-top: 2px solid ${Colors.LIGHT_BLUE};
  height: 40vh;
  width: 100%;
  bottom: ${({ show }) => (show ? "0px" : "-50vh")};
  z-index: 0;
  transition: bottom 1s;
`;

const FakeContainer = styled.div`
  width: 100%;
  height: 55px;
`;

const List = styled.ul`
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

const ListItem = styled.li``;

const Title = styled.h4`
  font-weight: 900;
  margin: 5px;
  font-size: 14px;
`;
const Text = styled.text`
  font-size: 25px;
  font-weight: 100;


${Media.phone`
        font-size: 20px;
`}

`;
