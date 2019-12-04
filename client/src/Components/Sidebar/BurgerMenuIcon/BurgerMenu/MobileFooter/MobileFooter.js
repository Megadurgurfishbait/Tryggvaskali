import React, { useContext } from "react";

import { MFContainer, List, ListItems } from "./MobileFooter.styled";

// Components
import MobilePopup from "./MobilePopup/";
import { LangContext } from "@Context/Lang";

const ItemsToShow = {
  contact: [
    { Title: "Sími", Text: "+354 482 1390" },
    { Title: "Netfang", Text: "tryggvaskali at tryggvaskali.is" }
  ],
  openingHours: [
    { Title: "Sunnudagur - Miðvikudags: ", Text: "11: 30 - 22: 00" },
    { Title: "Fimmtudagur - Laugardags:", Text: "11: 30 - 23: 00" }
  ]
};

const ItemsToShow_EN = {
  contact: [
    { Title: "Phone", Text: "+354 482 1390" },
    { Title: "Email", Text: "tryggvaskali at tryggvaskali.is" }
  ],
  openingHours: [
    { Title: "Sunday - Wednesday: ", Text: "11: 30 - 22: 00" },
    { Title: "Thursday - Saturday:", Text: "11: 30 - 23: 00" }
  ]
};

const MobileFooter = () => {
  const [ShowInformation, setShowInformation] = React.useState(false);
  const [TypeOfInfo, setTypeOfInfo] = React.useState("contact");

  const { English, setEnglish, setForground, forground } = useContext(LangContext);

  // Ef að TypeOfInfo er ekki það sama og ShowInformation er Satt
  // Þá lokum við ekki Menu, heldur skiptum út upplýsingum.
  // Ef að TypeOfInfo er það sama og áður þá eru notandi að loka glugganum.
  const handleInformation = Type => {
    if (ShowInformation && Type !== TypeOfInfo) {
      setTypeOfInfo(Type);
    } else {
      setTypeOfInfo(Type);
      setShowInformation(!ShowInformation);
    }
  };

  function handleChange() {
    setForground(!forground);
    setTimeout(() => setEnglish(!English), 1000);
  }
  let Mapping = English ? ItemsToShow_EN : ItemsToShow;

  return (
    <MFContainer>
      <List>
        <a href='https://goo.gl/maps/i8qw8M8nZZrnCPNA9'>
          {English ? "Our Location" : "Staðsetning"}
        </a>
        <ListItems onClick={() => handleInformation("openingHours")}>
          {English ? "Opening Hours" : "Opnunartími"}
        </ListItems>
        <ListItems onClick={() => handleInformation("contact")}>
          {English ? "Contact" : "Hafðu Samband"}
        </ListItems>
        <ListItems onClick={() => handleChange()}>{English ? "IS" : "EN"}</ListItems>
      </List>
      <MobilePopup ShowMe={ShowInformation} ItemsToShow={Mapping[TypeOfInfo]} />
    </MFContainer>
  );
};

export default MobileFooter;
