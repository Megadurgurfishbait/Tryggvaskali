import React from "react";
import styled from "styled-components";

import Layout from "../../layout/";

import HeroText from "./HeroText";
import { Colors, Images } from "../../Assets";
import { SplitScreen } from "../Reusables";
import ShowFood from "./ShowFood";
import Routes from "../../Routes";

import RestaurantDescription from "./RestaurantDescription/RestaurantDescription";
import useRD from "../../hooks/useWindowDimensions";
import Media, { sizes } from "../../Assets/Varibles/media";
import MediaHeight from "../../Assets/Varibles/MediaHeight";
import ButtonStyle from "../Reusables/Button";

const FrontPage = () => {
  let { width } = useRD();
  return (
    <Layout bgColor={Colors.WHITE}>
      <TryContainer bgImage={Images.TryggvaBgImage}>
        <RestaurantDescription />
      </TryContainer>

      {width > sizes.desktop && (
        <Fake>
          <ShowFood />
          <Con>
            <ButtonStyle Link={Routes.menu} Text={"Menu"} />
          </Con>
        </Fake>
      )}
    </Layout>
  );
};

export default FrontPage;

const Con = styled.div`
  align-self: flex-end;
  margin: 0px 50px 50px 0px;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Fake = styled.div`
  flex: 0 0 35%;
  height: 100%;
  background-image: url(${Images.BackgroundImage});
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  flex: 0 0 65%;
  position: relative;

  ${MediaHeight.large`
      align-items: center;
      justify-content: center;
      width: 100%;
    `}

  ${Media.desktop`
    flex: 0 0 100%;
  
  `}
`;
