import React from "react";

// Assets
import { Images } from "@Assets";
import { Container, ListButtons } from "./About.styled";
import Slide from "Animate/SingleSimpleSlide";

// Components
import Layout from "@Components/Layout";
import { ListItems } from "@Components/Reusables/";
import MasonPictures from "./MasonPictures";

const About = () => {
  const [ShowMasonPictures, setShowMasonPictures] = React.useState("Restaurant");
  const ContainerRef = React.useRef();
  const changeMyView = url => setShowMasonPictures(url);
  const RenderTheseImages = Photos => Photos[ShowMasonPictures];

  React.useEffect(() => {
    Slide(ContainerRef);
  }, [ShowMasonPictures]);

  return (
    <Layout>
      <Container>
        <MasonPictures ref={ContainerRef} Photos={RenderTheseImages(Images.Gallery)} />
        <ListButtons>
          <ListItems Title='The Food' url={"Food"} setInfoText={changeMyView} />
          <ListItems
            index={2}
            Title='The Restaurant'
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
