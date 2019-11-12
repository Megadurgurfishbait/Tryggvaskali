import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

const ScrollableInformation = ({ title, paragraph, list }) => {
  return (
    <SIContainer>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {list && (
        <List col={list.length > 4 ? 2 : 1}>
          {list.map(v => {
            return (
              <li >
                <Span />
                {v}
              </li>
            );
          })}
        </List>
      )}
    </SIContainer>
  );
};

export default ScrollableInformation;

const SIContainer = styled.div`
  min-width: 280px;
  min-height: 400px;
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

const Span = styled.span`
  display: flex;
  margin-right: 5px;
  height: 5px;
  width: 5px;
  background-color: ${Colors.LIGHT_BLUE};
  border-radius: 50%;
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
  align-self: flex-start;
`;
const Paragraph = styled.p`
  font-size: 12px;
  padding-left: 10px;
  margin: 20px 0px;
  height: 100%;
  line-height: 1.4;
`;
const List = styled.ul`
  columns: ${props => props.col};
  width: 95%;
  margin: auto auto 25px auto;
  padding: 0px;
  font-size: 11px;
  text-align: left;
  list-style: none;
  padding-left: 20px;
  align-self: flex-end;
  & > li {
    font-weight: 800;
    display: flex;
    align-items: center;
    padding: 3px 0px;
  }
`;
