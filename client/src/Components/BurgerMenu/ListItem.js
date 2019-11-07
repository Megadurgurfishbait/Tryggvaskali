import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";
import { TitleText } from "../Reusables";
import Media from "../../Assets/Varibles/media";

const ListItem = ({ Number, Title, Link }) => (
  <ListItemContainer className={"test"}>
    <NumberText>{Number}</NumberText>
    <TitleText>{Title}</TitleText>
  </ListItemContainer>
);

export default React.memo(ListItem);

const ListItemContainer = styled.li`
  height: 80px;
  width: 100%;
  margin: 5px auto;
  display: flex;
  color: ${Colors.LIGHT_BLUE};

  ${Media.large`height: 60px;`}
  ${Media.phone`height: 40px;`}
  &:hover {
    cursor: pointer;
  }
`;

const NumberText = styled.div`
  font-size: 12px;
  height: 20px;
  width: 20px;
  margin-top: auto;
  transform: translateX(-20px);
`;
