import React from "react";

import {
  RDContainer,
  TextContainer,
  TitleContainer,
  Title,
  Paragraph,
  AnchorButton,
  ButtonStyle,
  Span
} from "./RestaurantDescription.styled";

const RestaurantDescription = () => (
  <RDContainer>
    <TextContainer>
      <TitleContainer>
        <Title>{`Velkomin`}</Title>
        <Title>{` í Tryggvaskála`}</Title>
      </TitleContainer>
      <Paragraph>
        Tryggvaskáli er einstaklega fallegur a’la carte veitingastaður sem leggur áherslu á vandaða
        matreiðslu með fókus á hráefni úr héraði. Með virðingu fyrir störfum bænda, útbúa
        matreiðslumenn staðarins virkilega vandaðan mat þar sem íslenskar- og erlendar
        matreiðsluaðferðir blandast skemmtilega saman.
      </Paragraph>
      <AnchorButton href='https://goo.gl/maps/i8qw8M8nZZrnCPNA9'>
        <ButtonStyle> Staðsetning </ButtonStyle>
        <Span> {">"} </Span>
      </AnchorButton>
    </TextContainer>
  </RDContainer>
);

export default RestaurantDescription;
