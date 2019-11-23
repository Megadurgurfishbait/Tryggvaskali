import React from "react";

import { MFContainer, List, ListItems } from "./MobileFooter.styled";

// Components
import MobilePopup from "./MobilePopup/";

const ItemsToShow = {
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

  return (
    <MFContainer>
      <List>
        <a href='https://goo.gl/maps/i8qw8M8nZZrnCPNA9'>Our Location</a>
        <ListItems onClick={() => handleInformation("openingHours")}>Opening Hours</ListItems>
        <ListItems onClick={() => handleInformation("contact")}>Contact</ListItems>
      </List>
      <MobilePopup ShowMe={ShowInformation} ItemsToShow={ItemsToShow[TypeOfInfo]} />
    </MFContainer>
  );
};

export default MobileFooter;
