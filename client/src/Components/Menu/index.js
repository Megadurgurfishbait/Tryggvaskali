import React from "react";
import styled from "styled-components";
import * as contentful from "contentful";
import { Colors } from "@Assets";
import { Media } from "@Assets/";

var client = contentful.createClient({
  space: "z0iy5bo5581u",
  accessToken: "hpVTgRog0HYeXXjZ226tXKJctIC9KhAFrTqD3ThvbIA"
});

const Menu = () => {
  const [Image, setImage] = React.useState(
    client
      .getEntry("6lRcVVtV29ilUIU8wKinVO")
      .then(entry => setImage(entry.fields.matsedill.fields.file.url))
      .catch(console.error)
  );

  return (
    <MContainer>
      <img alt='Matsedill Menu' src={`${Image}`} />
    </MContainer>
  );
};

export default Menu;

const MContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.LIGHT_BLUE};

  ${Media.tablet`
    overflow: scroll;
      
  `}

  & > img {
    position: absolute;
    margin: 50px auto;
    object-fit: cover;
    ${Media.tablet`
    top: 0%;
    left: 0%;
      min-width: 100%;
      
  `}
  }
`;
