import React from "react";
import styled from "styled-components";
import { Colors, VAR } from "../../../Assets";

const RestaurantDescription = ({ children }) => (
  <RDContainer>
    <WhiteBackground>
      <Title>Velkomin í Tryggvaskála</Title>
      <Paragraph>
        Tryggvaskáli er einstaklega fallegur a’la carte veitingastaður sem
        leggur áherslu á vandaða matreiðslu með fókus á hráefni úr héraði. Með
        virðingu fyrir störfum bænda, útbúa matreiðslumenn staðarins virkilega
        vandaðan mat þar sem íslenskar- og erlendar matreiðsluaðferðir blandast
        skemmtilega saman.
      </Paragraph>
      <Button>Sjá Matseðil</Button>
    </WhiteBackground>
  </RDContainer>
);

export default RestaurantDescription;

const RDContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  place-items: center;
  font-size: 20px;
  color: white;
  font-weight: 200;
`;

const WhiteBackground = styled.div`
  background-color: white;
  padding: 10px;
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  opacity: 0.9;
`;

const Title = styled.h1`
  margin: 15px auto;
  font-weight: 100;
  font-size: 32px;
`;
const Paragraph = styled.p`
  font-size: 16px;
  width: 90%;
  font-weight: 100;
  line-height: 1.8;
  margin: 40px auto;
`;
const Button = styled.button`
  margin: 10px auto;
  height: 40px;
  background-color: ${Colors.LIGHT_BLUE};
  color: white;
  border: none;
  padding: 10px 25px;
  font-weight: 100;

  &:hover {
    ${VAR.Hover};
  }
`;
