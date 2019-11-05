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


const WhatWeDo = () => {
  let textRef = useRef([createRef(), createRef()]);
  const [InfoText, setInfoText] = useState(WhatWeDoText["hopa"]);
  const [Animation, setAnimation] = useState(null);

  const changeMyView = url => {
    setAnimation(Slide(textRef.current));
    setInfoText(WhatWeDoText[url]);
  };

  return (
    <Layout bgColor={Colors.LIGHT_GREEN} bgImage={Images.BaruBakgrunnur}>
    <WWDContainer>
      <SplitScreen compJc={"space-evenly"} compAi={"center"} compWidth={"100"}>
        <Information ref={textRef} {...InfoText} />
        <Picture />
      </SplitScreen>
      <ListButtons>
        <MegaButton />
        {textB.map((v, i) => (
          <ListItems {...v} key={i} index={i} setInfoText={changeMyView} />
        ))}
      </ListButtons>
    </WWDContainer>
    </Layout >
  );
};

export default WhatWeDo;

const WWDContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const ListButtons = styled.ul`
  height: 60px;
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 60px;
  margin-bottom: 0px;
  border: none;
`;
