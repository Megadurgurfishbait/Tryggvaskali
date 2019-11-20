import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import ShowModalContext from "../../Context/ShowModal";
import ShowBurgerMenuContext from "../../Context/ShowBurgerMenu";

import { TitleText, SplitScreen } from "../Reusables";
import { Colors } from "../../Assets";

const BlueScreen = () => {
  const { showModal, setShowModal } = React.useContext(ShowModalContext);
  const hello = React.useContext(ShowBurgerMenuContext);

  const handleClick = () => {
    hello();
    setShowModal(!showModal);
  };

  return (
    <BSContainer>
      <SplitScreen compWidth={100} column>
        <TextInfo>
          <TitleText fontSize={35}>Location & Contact</TitleText>
          <a href='https://www.google.com/maps/dir//Tryggvask%C3%A1li,+Tryggvatorg,+800+Selfoss/@63.9371759,-21.0043274,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48d65fcc69ecc0cb:0x90f7606fab01ab89!2m2!1d-21.0033058!2d63.9377307'>
            Austurvegi 2, 800 Selfoss
            <span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>
          <a href='tel:354-482-1390'>+354 482 1390</a>
          <a href='mailto:tryggvaskali@tryggvaskali.is'>
            Tryggvaskali at Tryggvaskali.is
            <span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </span>
          </a>
        </TextInfo>
        <TextInfo>
          <TitleText fontSize={35}> Opnunartími</TitleText>
          <OpeningHoursRow>
            <Col fontSize={20}> Sunnudagur - Miðvikudags</Col>
            <Col fontSize={25} fontBold={"bold"}>
              11:30 - 22:00
            </Col>
          </OpeningHoursRow>
          <OpeningHoursRow>
            <Col fontSize={20}>Fimmtudagur - laugardags</Col>
            <Col fontSize={25} fontBold={"bold"}>
              11:30 - 23:00
            </Col>
          </OpeningHoursRow>
        </TextInfo>
      </SplitScreen>
      <SplitScreen compWidth={100} compJc={"center"} compAi={"center"} column>
        <BookNowText>
          Komdu og njóttu kvöldsins hjá okkur í notalegu umhverfi. Smelltu á takka hér að neðan til
          að athuga með laust borð.
        </BookNowText>
        <BookNowButton onClick={() => handleClick()}>Book Now</BookNowButton>
      </SplitScreen>
    </BSContainer>
  );
};

export default React.memo(BlueScreen);

const OpeningHoursRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const Col = styled.div`
  width: 60%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")}px;
  font-weight: ${({ fontBold }) => (fontBold ? fontBold : "400")};
`;

const BSContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 60%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  & > a {
    &:first-of-type {
      margin-top: 20px;
    }
    margin-top: 5px;

    font-size: 22px;
    text-decoration: none;
    color: ${Colors.LIGHT_BLUE};
    font-weight: 600;
    white-space: pre-line;
    line-height: 2;

    & > span {
      padding: 0px 10px;
    }
  }
  & > h1 {
    margin: 5px auto;
  }
`;
