import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";

const MobileFooter = () => {
  return (
    <MFContainer>
      <List>
        <ListItems>
          <Title>Our Location</Title>
        </ListItems>
        <ListItems>
          <Title>Opening Hours</Title>
        </ListItems>
        <ListItems>
          <Title>Contact</Title>
        </ListItems>
      </List>
    </MFContainer>
  );
};

export default MobileFooter;

const MFContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
`;

const ListItems = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 5px auto;
  ${Media.phone`flex-direction: column;`}
`;
const InfoContainer = styled.div`
  display: flex;
  height: 40px;
  ${Media.desktop`
    flex-direction: column;
  `}
`;
const Title = styled.h3`
  margin: 5px auto;
  font-weight: 800;

  ${Media.phone`font-size: 12px;`}
`;
const Info = styled.h3`
  text-align: left;
  font-weight: 100;
  margin-left: 10px;
  letter-spacing: -1.2px;

  ${Media.desktop`
    font-size: 15px;
    margin: 0px;
    margin-left: 10px;
  `}
  ${Media.phone`font-size: 12px;`}
`;
