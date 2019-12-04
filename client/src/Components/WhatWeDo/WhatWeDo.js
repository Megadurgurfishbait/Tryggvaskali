import React, { useState, useContext, useEffect } from "react";

import { sizes } from "@Assets";
import { useWD } from "@Hooks/";

import MobileScroll from "./MobileScroll/";
import Layout from "@Components/Layout";

import DesktopContainer from "./DesktopContainer";
import { WhatWeDoSelectionContext } from "@Context/WhatWeDoSelection";
import { FetchedText } from "@Context/fetchedText";
import { LangContext } from "@Context/Lang";

const WhatWeDo = () => {
  const [TextForSite, setTextForSite] = useState();
  const { English } = useContext(LangContext);
  const { Selection } = useContext(WhatWeDoSelectionContext);
  const { text } = useContext(FetchedText);

  useEffect(() => {
    switch (Selection) {
      case "hopa":
        return setTextForSite(English ? text.enskaHopamatsedlar : text.veisluthjonusta);
      case "veislu":
        return setTextForSite(English ? text.enskaVeisluthjonusta : text.veisluthjonusta1);
      case "gjafa":
        return setTextForSite(English ? text.enskaGjafabref : text.gjafabref);
      default:
        return setTextForSite(English ? text.enskaHopamatsedlar : text.veisluthjonusta);
    }
  }, [Selection, text, English]);

  const { width } = useWD();
  return (
    <Layout>
      {width > sizes.tablet ? (
        <DesktopContainer TextForSite={TextForSite} />
      ) : (
        <MobileScroll TextForSite={TextForSite} />
      )}
    </Layout>
  );
};

export default WhatWeDo;
