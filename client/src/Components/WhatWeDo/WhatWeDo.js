import React, { useState, useRef, createRef } from "react";

import { Slide } from "Animate/";
import { sizes, WhatWeDoText } from "@Assets";
import { useWD } from "@Hooks/";

import MobileScroll from "./MobileScroll/";
import Layout from "@Components/Layout";

import DesktopContainer from "./DesktopContainer";

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
    <Layout>
      {width > sizes.tablet ? (
        <DesktopContainer ref={textRef} InfoText={InfoText} changeMyView={changeMyView} />
      ) : (
        <MobileScroll />
      )}
    </Layout>
  );
};

export default WhatWeDo;
