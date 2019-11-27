import React, { useState, useRef, createRef, useContext } from "react";

import { Slide } from "Animate/";
import { sizes, WhatWeDoText } from "@Assets";
import { useWD } from "@Hooks/";

import MobileScroll from "./MobileScroll/";
import Layout from "@Components/Layout";

import DesktopContainer from "./DesktopContainer";
import { WhatWeDoSelectionContext } from "@Context/WhatWeDoSelection";

const WhatWeDo = () => {
  const { Selection } = useContext(WhatWeDoSelectionContext);
  let textRef = useRef([createRef(), createRef()]);
  const [InfoText, setInfoText] = useState(WhatWeDoText[Selection]);
  const [Animation, setAnimation] = useState(null);
  const { width } = useWD();

  React.useEffect(() => {
    width > sizes.tablet && setAnimation(Slide(textRef.current));
    setInfoText(WhatWeDoText[Selection]);
  }, [Selection, width]);

  return (
    <Layout>
      {width > sizes.tablet ? (
        <DesktopContainer ref={textRef} InfoText={InfoText} />
      ) : (
        <MobileScroll InfoText={InfoText} />
      )}
    </Layout>
  );
};

export default WhatWeDo;
