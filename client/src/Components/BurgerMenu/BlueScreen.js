import React from "react";
import styled from "styled-components";
import { TitleText, SplitScreen } from "../Reusables";
import { Colors } from "../../Assets";

const BlueScreen = () => (
  <BSContainer>
    <SplitScreen compWidth={100} column>
      <TextInfo>
        <TitleText>Location</TitleText>
        <a href="https://www.google.com/maps/dir//Tryggvask%C3%A1li,+Tryggvatorg,+800+Selfoss/@63.9371759,-21.0043274,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48d65fcc69ecc0cb:0x90f7606fab01ab89!2m2!1d-21.0033058!2d63.9377307">
          Austurvegi 2, 800 Selfoss
        </a>
      </TextInfo>
      <TextInfo>
        <TitleText>Contact</TitleText>
        <a href="tel:354-482-1390">+354 482 1390</a>
        <a href="mailto:tryggvaskali@tryggvaskali.is">
          Tryggvaskali at Tryggvaskali.is
        </a>
      </TextInfo>
    </SplitScreen>
    <SplitScreen  compWidth={100} compJc={"center"} compAi={"center"}column>
      <BookNowText>
      Komdu og njóttu kvöldsins hjá okkur í notalegu umhverfi.
      Smelltu á takka hér að neðan til að athuga með laust borð.
      </BookNowText>
      <BookNowButton>
          Book Now
      </BookNowButton>
    </SplitScreen>
  </BSContainer>
);

export default React.memo(BlueScreen);

const BSContainer = styled.div`
  height: 100vh;
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
`;

const BookNowText = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${Colors.LIGHT_BLUE};
  font-size: 20px;
`;

const BookNowButton = styled.button`
  margin-top: 20px;
  background-color: ${Colors.WHITE_GREEN};
  border: 2px solid ${Colors.LIGHT_BLUE};
  padding: 10px 30px;
  color: ${Colors.LIGHT_BLUE};
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const TextInfo = styled.div`
  height: 150px;
  width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  & > a {
    font-size: 30px;
    text-decoration: none;
    color: ${Colors.LIGHT_BLUE};
    font-weight: 600;
    white-space: pre-line;
    width: 100%;
  }
  & > h1 {
    margin: 5px auto;
  }
`;
