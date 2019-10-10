import React from "react";
import styled from "styled-components";

export default function Half({ children }) {
  return <DIV>{children}</DIV>;
}

const DIV = styled.div`
  height: 100%;
  width: 50%;
`;
