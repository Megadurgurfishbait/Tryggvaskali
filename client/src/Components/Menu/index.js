import React from "react";
import styled from "styled-components";
import Layout from "@Components/Layout";
import * as contentful from "contentful";
import { Colors } from "@Assets";
import Modal from "../Modal";
import { Media } from "@Assets/";

var client = contentful.createClient({
  space: "z0iy5bo5581u",
  accessToken: "hpVTgRog0HYeXXjZ226tXKJctIC9KhAFrTqD3ThvbIA"
});

const Menu = () => {
  const [Image, setImage] = React.useState(
    client
      .getAsset("2I5WxJNMCj0h42uw3hBPFe")
      .then(asset => setImage(asset.fields.file.url))
      .catch(console.error)
  );

  return (
    <Layout bgColor={Colors.GREEN}>
      <MContainer src={`${Image}`} target='_blank'>
        <img width='220' height='250' border='0' align='center' src='' />
      </MContainer>
    </Layout>
  );
};

export default Menu;

const MContainer = styled.a`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.LIGHT_BLUE};

  & > img {
    background-size: contain;
    ${Media.tablet`


  `}
  }
`;
