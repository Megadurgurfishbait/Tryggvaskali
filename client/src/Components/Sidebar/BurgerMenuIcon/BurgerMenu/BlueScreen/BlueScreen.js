import React, { useContext } from "react";
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
import { FetchedText } from "@Context/fetchedText";
import { LangContext } from "@Context/Lang";

const BlueScreen = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  const { text } = useContext(FetchedText);
  const { English } = useContext(LangContext);
  let { opnunartimi, enskaHamborgaravalmynd, hamborgaravalmynd } = text;

  return (
    <BSContainer>
      <SplitScreen compWidth={100} compJc={"space-evenly"} column>
        <TextInfo>
          <TitleText fontSize={35}>
            {English ? "Location & Contact" : "Staðsetning & Upplýsingar"}
          </TitleText>
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
          <TitleText fontSize={35}> {English ? "Opening hours" : "Opnunartími"}</TitleText>
          <OpeningHoursRow>
            <Col fontSize={20}>{English ? "Sunday - Wednesday" : "Sunnudagur til Miðvikudags"}</Col>
            <Col fontSize={25} fontBold={"bold"}>
              {opnunartimi && opnunartimi.sunnudagurTilMidvikudags}
            </Col>
          </OpeningHoursRow>
          <OpeningHoursRow>
            <Col fontSize={20}>{English ? "Thursday - Saturday" : "Fimmtudagur - Laugardags"}</Col>
            <Col fontSize={25} fontBold={"bold"}>
              {opnunartimi && opnunartimi.fimmtudagurtilLaugardags}
            </Col>
          </OpeningHoursRow>
        </TextInfo>
      </SplitScreen>
      <SplitScreen compHeight={75} compWidth={100} compJc={"center"} compAi={"center"} column>
        <BookNowText>
          {English
            ? enskaHamborgaravalmynd && enskaHamborgaravalmynd.textiFyrirBokaNuna
            : hamborgaravalmynd && hamborgaravalmynd.textiFyrirBokaNuna}
        </BookNowText>
        <BookNowButton onClick={() => setShowModal(!showModal)}>
          {English ? "Book Now" : "Bóka Núna"}
        </BookNowButton>
      </SplitScreen>
    </BSContainer>
  );
};

export default React.memo(BlueScreen);
