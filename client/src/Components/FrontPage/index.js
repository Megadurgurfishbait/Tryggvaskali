import React from "react";
import Layout from "../../layout/";

import HeroText from "./HeroText";
import { Colors, Images } from "../../Assets";
import { SplitScreen } from "../Reusables";
import ShowFood from "./ShowFood";
import RestaurantDescription from "./RestaurantDescription/RestaurantDescription";
import useRD from "../../hooks/useWindowDimensions";
import { sizes } from "../../Assets/Varibles/media";

const FrontPage = () => {
  let { width } = useRD();

  return (
    <Layout bgColor={Colors.LIGHT_BLUE} bgImage={Images.BackgroundImage}>
      <SplitScreen
        column
        compWidth={width > sizes.desktop ? 50 : 100}
        compAi={"center"}
      >
        <HeroText />
        <RestaurantDescription />
      </SplitScreen>
      {width > sizes.desktop && (
        <SplitScreen compWidth={50}>
          <ShowFood />
        </SplitScreen>
      )}
    </Layout>
  );
};

export default FrontPage;
