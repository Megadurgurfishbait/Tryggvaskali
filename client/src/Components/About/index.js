import React from "react";
import styled from "styled-components";
import Layout from "../../layout/";
import { Colors, Images } from "../../Assets";
import ListItems from "../Shared/ListItems";
import MasonPictures from "./MasonPictures";
import Photos from "../../Assets/Images/Gallery/";
import Media from "../../Assets/Varibles/media";

const About = () => {
  const [ShowMasonPictures, setShowMasonPictures] = React.useState(
    "Restaurant"
  );

  const changeMyView = url => {
    setShowMasonPictures(url);
  };

  const RenderTheseImages = Photos => Photos[ShowMasonPictures];

  return (
    <Layout bgColor={Colors.LIGHT_GREEN} bgImage={Images.BaruBakgrunnur}>
      <Container>
        <MasonPictures Photos={RenderTheseImages(Photos)} />
        <ListButtons>
          <ListItems Title="The Food" url={"Food"} setInfoText={changeMyView} />
          <ListItems
            index={2}
            Title="The Restaurant"
            url={"Restaurant"}
            setInfoText={changeMyView}
          />
          {/* Index kemur í veg fyrir að það komi border til hægri við "The Restaurant" Textann */}
        </ListButtons>
      </Container>
    </Layout>
  );
};

export default About;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 60px auto 0px auto;
  display: flex;
  flex-direction: column;

  ${Media.desktop`
    margin: 0px auto;
  `}
`;

const ListButtons = styled.ul`
  position: absolute;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  right: 0px;
  bottom: 0px;
  margin-bottom: 0px;

  ${Media.desktop`
    margin-right: 0px;
  `}

  ${Media.tablet`
    position: Sticky;
    margin-top: 0px;
    padding: 0px;
  
  
  `}
`;
