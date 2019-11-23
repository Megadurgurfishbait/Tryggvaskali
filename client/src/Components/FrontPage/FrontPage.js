import React from "react";

// Assets
import { useWD } from "@Hooks/";
import { Colors, Images, sizes } from "@Assets";

// Components
import Layout from "@Components/Layout";
import RestaurantDescription from "./RestaurantDescription/";
import BlueWoodBackground from "./BlueWoodBackground/";

import { PictureContainer } from "./FrontPage.styled";

const FrontPage = () => {
  let { width } = useWD();
  return (
    <Layout bgColor={Colors.WHITE}>
      <PictureContainer bgImage={Images.TryggvaBgImage}>
        <RestaurantDescription />
      </PictureContainer>
      {width > sizes.desktop && <BlueWoodBackground />}
    </Layout>
  );
};

export default FrontPage;
