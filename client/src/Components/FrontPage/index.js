import React from "react";
import Layout from "../../layout/";

import HeroText from "./HeroText";
import { Colors, Images } from "../../Assets";
import { SplitScreen } from "../Reusables";
import ShowFood from "./ShowFood";
import TripAdvisor from "./TripAdvisorInfo";

const FrontPage = () => {
  return (
    <Layout bgColor={Colors.LIGHT_BLUE} bgImage={Images.BackgroundImage}>
      <SplitScreen column compWidth={50}>
        <HeroText />
      </SplitScreen>
      <SplitScreen compWidth={50}>
        <ShowFood />
      </SplitScreen>
    </Layout>
  );
};

export default FrontPage;
