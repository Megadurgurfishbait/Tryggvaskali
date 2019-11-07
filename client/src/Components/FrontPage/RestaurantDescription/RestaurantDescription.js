import React from "react";
import styled from "styled-components";
import { Colors, VAR } from "../../../Assets";
import Media from "../../../Assets/Varibles/media";

const RestaurantDescription = () => (
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

  ${Media.large`width: 80%;`}
  ${Media.phone`height: 60%;
  width: 90%;`}
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

  ${Media.phone`border-radius: 0px;`}
`;

const Title = styled.h1`
  margin: 15px auto;
  font-weight: 100;
  font-size: 32px;

  ${Media.large`
    font-size: 25px;
    margin: 7.5px auto;-
  `}
  ${Media.desktop`
    font-size: 30px;
    margin: 20px auto;
  `}
  ${Media.phone`
    font-size: 18px;
    text-align: center;
  `}
`;
const Paragraph = styled.p`
  font-size: 16px;
  width: 90%;
  font-weight: 100;
  line-height: 1.8;
  margin: 40px auto;

  ${Media.large`
    width: 90%;
    font-size: 13px;
    line-height: 1.4;
    margin: 20px auto;
  `}

  ${Media.desktop`
    width: 80%;
    font-size: 14px;
    line-height: 1.8;
    margin: 30px auto;
  `}

  ${Media.phone`
    width: 95%;
    margin: 10px auto;
    line-height: 1.7;
    font-size: 12px;
  `}
`;
const Button = styled.button`
  margin: 10px auto;
  height: 40px;
  background-color: ${Colors.LIGHT_BLUE};
  color: white;
  border: none;
  padding: 10px 25px;
  font-weight: 100;

  ${Media.desktop`
    height: 50px;
    padding: 15px 30px;
    margin: 15px auto;
    font-size: 16px;
  `}

  ${Media.phone`
    height: 30px;
    padding: 5px 10px;
    margin: 7.5px auto;
    font-size: 12px;
  `}

  &:hover {
    ${VAR.Hover};
  }
`;
