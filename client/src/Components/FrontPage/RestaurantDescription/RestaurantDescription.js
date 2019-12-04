import React, { useContext, useState, useEffect } from "react";

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
import { LangContext } from "@Context/Lang";
import { FetchedText } from "@Context/fetchedText";

const RestaurantDescription = () => {
  const { English } = useContext(LangContext);
  const { text } = useContext(FetchedText);
  let { enskaForsida, forsida } = text;
  return (
    <RDContainer>
      {(enskaForsida || forsida) && (
        <TextContainer>
          <TitleContainer>
            <Title>{English ? enskaForsida.titill : forsida.titill}</Title>
          </TitleContainer>
          <Paragraph>{English ? enskaForsida.texti : forsida.texti}</Paragraph>
          <AnchorButton target='_blank' href='https://goo.gl/maps/i8qw8M8nZZrnCPNA9'>
            <ButtonStyle> {English ? "Location" : "Staðsetning"} </ButtonStyle>
            <Span> {">"} </Span>
          </AnchorButton>
        </TextContainer>
      )}
    </RDContainer>
  );
};

export default RestaurantDescription;
