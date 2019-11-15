import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../../Assets";

const MobileControl = ({ ControlObject: { LeftArrow, RightArrow } }) => (
  <MBContainer>
    <Selection to={LeftArrow.Link}>
      <ArrowContainer>{"<"}</ArrowContainer>
      <Text>{LeftArrow.Title}</Text>
    </Selection>
    <Selection to={RightArrow.Link}>
      <Text>{RightArrow.Title}</Text>
      <ArrowContainer>{">"}</ArrowContainer>
    </Selection>
  </MBContainer>
);

export default MobileControl;

const ArrowContainer = styled.div`
  height: 100%;
  width: 45px;
  background-color: ${Colors.GREEN};
  color: ${Colors.LIGHT_BLUE};
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
`;

const Text = styled.h6`
    height: 100%;
    width: 90px;
    color: blue;
    margin: 0px; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.LIGHT_GREEN};
    color: ${Colors.LIGHT_BLUE};
    font-size: 16px;
`;

const MBContainer = styled.div`
  position: absolute;
  display: flex;
  height: 50px;
  width: 100%;
  bottom: 0px;
  align-items: flex-end;
  justify-content: space-between;
`;

const Selection = styled(Link)`
  height: 35px;
  width: 135px;
  background-color: red;
  text-decoration: none;
  color: ${Colors.GREEN};
  display: flex;
`;
