import React from "react";
import styled from "styled-components";

export default ({ children, bgCol }) => (
  <Container bgCol={bgCol}>{children}</Container>
);

const Container = styled.div`
  height: 50vh;
  width: 100%;
  background-color: ${props => props.bgCol};
`;
