import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

const ScrollableInformation = ({ title, paragraph, list }) => {
  console.log(list);
  return (
    <SIContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {list && (
        <List>
          <li>Brúðkaupsveislur</li>
          <li>Afmæli</li>
          <li>Erfidrykkjur</li>
          <li>Fermingaveislur</li>
          <li>Fundir</li>
          <li>Móttökur</li>
          <li>Uppákomur</li>
          <li>Grillveislur</li>
        </List>
      )}
    </SIContainer>
  );
};

export default ScrollableInformation;

const SIContainer = styled.div`
  min-width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.LIGHT_GREEN};
  margin-right: 30px;
  border-radius: 10px;  
  border: 2px solid ${Colors.LIGHT_BLUE};
  box-sizing: border-box;
  color: ${Colors.LIGHT_BLUE};
`;

const Title = styled.h3`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-bottom: 2px solid ${Colors.LIGHT_BLUE};
  line-height: 2;
  font-weight: 800;
`;
const Paragraph = styled.p`
  font-size: 12px;
  padding-left: 8px;
  margin: 0px;
  height: 100%;
  line-height: 1.4;
`;
const List = styled.ul`
  columns: 2;
  width: 95%;
  margin: 10px auto;
  padding: 0px;
  font-size: 11px;
  text-align: left;
  list-style: none;
  padding-left: 20px;
  & > li {
    font-weight: 800;
  }
`;
