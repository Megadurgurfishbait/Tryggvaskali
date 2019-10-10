import React from "react";
import styled from "styled-components";
import Layout from "../../layout/";

import HeroText from "./HeroText";

import { Colors, Images } from "../../Assets";
import Half from "./half";

const FrontPage = () => {
  return (
    <Layout bgColor={Colors.LIGHT_BLUE} bgImage={Images.BackgroundImage}>
      <Half>
        <HeroText />
      </Half>
      <Half></Half>
    </Layout>
  );
};

export default FrontPage;
