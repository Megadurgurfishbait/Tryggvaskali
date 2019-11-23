import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// Assets
import { ShowModalContext } from "@Context/ShowModal";

// Components
import { TitleText, SplitScreen } from "@Components/Reusables";
import {
  OpeningHoursRow,
  Col,
  BSContainer,
  BookNowText,
  BookNowButton,
  TextInfo
} from "./BlueScreen.styled";

const BlueScreen = () => {
  const { showModal, setShowModal } = React.useContext(ShowModalContext);

  return (
    <BSContainer>
      <SplitScreen compWidth={100} compJc={"space-evenly"} column>
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
      <SplitScreen compHeight={75} compWidth={100} compJc={"center"} compAi={"center"} column>
        <BookNowText>
          Komdu og njóttu kvöldsins hjá okkur í notalegu umhverfi. Smelltu á takka hér að neðan til
          að athuga með laust borð.
        </BookNowText>
        <BookNowButton onClick={() => setShowModal(!showModal)}>Book Now</BookNowButton>
      </SplitScreen>
    </BSContainer>
  );
};

export default React.memo(BlueScreen);
