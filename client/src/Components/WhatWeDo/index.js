import React, { useState, useRef, createRef } from "react";
import styled from "styled-components";
import Layout from "../../layout/";
import { SplitScreen } from "../Reusables/";
import MegaButton from "./MegaButton";
import ListItems from "../Shared/ListItems";
import Picture from "./Picture";
import Information from "./Information";
import { WhatWeDoText, textB } from "../../Assets/Texts/WhatWeDo";
import Slide from "../../Animation/Slide";
import { Colors, Images } from "../../Assets";

import useWD from "../../hooks/useWindowDimensions";
import Media, { sizes } from "../../Assets/Varibles/media";
import MobileScroll from "./MobileScroll";
import ScrollableInformation from './ScrollableInformation';


const WhatWeDo = () => {
  let textRef = useRef([createRef(), createRef()]);
  const [InfoText, setInfoText] = useState(WhatWeDoText["hopa"]);
  const [Animation, setAnimation] = useState(null);

  const { width } = useWD();

  const changeMyView = url => {
    setAnimation(Slide(textRef.current));
    setInfoText(WhatWeDoText[url]);
  };

  return (
    <Layout bgColor={Colors.LIGHT_GREEN} bgImage={Images.BaruBakgrunnur}>
      {width > sizes.tablet ? (
        <WWDContainer>
          <SplitScreen
            compJc={"space-evenly"}
            compAi={"center"}
            compWidth={"100"}
          >
            <Information ref={textRef} {...InfoText} />
            {width > sizes.tablet && <Picture />}
          </SplitScreen>
          {/* setja þetta í nýjan component */}

          <ListButtons>
            <MegaButton />
            {textB.map((v, i) => (
              <ListItems {...v} key={i} index={i} setInfoText={changeMyView} />
            ))}
          </ListButtons>
        </WWDContainer>
      ) : (
        <MobileScroll>
              {Object.values(WhatWeDoText).map(v => <ScrollableInformation title={v.owner} paragraph={v.Par} list={v.List}/>)}
        </MobileScroll>
      )}
    </Layout>
  );
};

export default WhatWeDo;

const WWDContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const ListButtons = styled.ul`
  height: 60px;
  width: 60%;
  list-style: none;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-bottom: 0px;
  border: none;
  ${Media.tablet`
    width: 100%;
    margin: 0px;
  
  `}
`;
