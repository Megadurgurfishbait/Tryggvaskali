import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";
import MobilePopup from "./MobilePopup/MobilePopup";

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
        <a href="https://goo.gl/maps/i8qw8M8nZZrnCPNA9">Our Location</a>
        <ListItems onClick={() => handleInformation("openingHours")}>
          Opening Hours
        </ListItems>
        <ListItems onClick={() => handleInformation("contact")}>
          Contact
        </ListItems>
      </List>
      <MobilePopup
        ShowMe={ShowInformation}
        ItemsToShow={ItemsToShow[TypeOfInfo]}
      />
    </MFContainer>
  );
};

export default MobileFooter;
const AnchorAndButtonStyles = () => {
  return `display: flex;
  align-items: center;
  padding: 10px 0px;
  text-align: center;
  margin: 5px auto;
  ${Media.phone`flex-direction: column;`}
  `;
};

const MFContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.LIGHT_GREEN};
  color: ${Colors.LIGHT_BLUE};
  position: relative;
  z-index: 10;
`;

const List = styled.ul`
  position: absolute;
  background-color: ${Colors.LIGHT_GREEN};
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
  bottom: 0px;
  z-index: 1;
  margin: 0px;

  & > a {
    ${AnchorAndButtonStyles};
    text-decoration: none;
    color: inherit;
  }
`;
const ListItems = styled.button`
  ${AnchorAndButtonStyles};
  background-color: transparent;
  border: none;
  font-family: inherit;
  color: inherit;
  font-size: inherit;

  &:hover,
  &:focus {
    outline: none;
  }
`;
