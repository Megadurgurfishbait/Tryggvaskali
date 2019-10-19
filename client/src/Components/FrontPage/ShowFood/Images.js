import React from "react";
import styled from "styled-components";

const ShowcaseFood = ({ Image }) => <ImagesContainer source={Image}></ImagesContainer>;

export default ShowcaseFood;

const ImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.source});
`;
