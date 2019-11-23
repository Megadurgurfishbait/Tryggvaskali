import React from "react";

// Components
import { MPContainer, FakeContainer, List, ListItem, Text, Title } from "./MobilePopup.styled";

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
