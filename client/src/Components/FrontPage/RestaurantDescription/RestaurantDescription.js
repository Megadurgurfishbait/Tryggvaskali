import React from "react";
import styled from "styled-components";
import { Colors, VAR } from "../../../Assets";
import Media from "../../../Assets/Varibles/media";
import ButtonStyle from "../../Reusables/Button";

const RestaurantDescription = () => (
  <RDContainer>
    <TextContainer>
      <TitleContainer>
        <Title>{`Velkomin`}</Title>
        <Title>{` í Tryggvaskála`}</Title>
      </TitleContainer>
      <Paragraph>
        Tryggvaskáli er einstaklega fallegur a’la carte veitingastaður sem
        leggur áherslu á vandaða matreiðslu með fókus á hráefni úr héraði. Með
        virðingu fyrir störfum bænda, útbúa matreiðslumenn staðarins virkilega
        vandaðan mat þar sem íslenskar- og erlendar matreiðsluaðferðir blandast
        skemmtilega saman.
      </Paragraph>
        <ButtonStyle href="https://goo.gl/maps/i8qw8M8nZZrnCPNA9"  Text={"Sjá Staðsetningu"} />
    </TextContainer>
  </RDContainer>
);

export default RestaurantDescription;

const RDContainer = styled.div`
  height: 600px;
  width: 600px;
  display: flex;
  font-size: 20px;
  color: ${Colors.LIGHT_GREEN};
  font-weight: 200;
  flex-direction: column;
  ${Media.large`
    width: 70%;
    padding-left: 30px;
  `}

 

  ${Media.phone`
  height: 60%;
  width: 90%;`}
`;

const TitleContainer = styled.div`
  height: 80px;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${Media.large`
    width: 100%;
  `}
`;

const Title = styled.h1`
  margin: 0px 0px;
  font-weight: 900;
  font-size: 50px;

  ${Media.large`
    font-size: 40px;
    margin: 7.5px auto;
  `}
  ${Media.desktop`
    font-size: 30px;
    margin: 20px auto;
  `}
  ${Media.phone`
    font-size: 28px;
  `}
`;
const Paragraph = styled.p`
  font-size: 18px;
  width: 100%;
  font-weight: 100;
  line-height: 1.8;

  ${Media.large`
    width: 80%;
    font-size: 18px;
    line-height: 1.4;
  `}

  ${Media.desktop`
    width: 80%;
    font-size: 14px;
    line-height: 1.8;
  `}

  ${Media.phone`
    width: 95%;
    margin: 10px auto;
    line-height: 2;
    font-size: 12px;
  `}
`;

