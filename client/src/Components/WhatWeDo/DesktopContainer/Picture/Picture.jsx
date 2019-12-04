import React, { useRef, useState } from "react";
import { TimelineMax, Linear } from "gsap";

import { Images } from "@Assets";

import {
  PContainer,
  Background,
  Image,
  DynamicBackgroundAnimation,
  StaticBackgroundAnimation
} from "./Picture.styled";

const Picture = () => {
  let imgRef = useRef();
  let backgroundRef = useRef();
  let [ShowImage, setShowImage] = useState(0);

  React.useEffect(() => {
    let GoingUp = true;

    const tl = new TimelineMax({
      delay: 1,
      onComplete: function() {
        if (ShowImage === Images.WhatWeDo.length - 1) GoingUp = false;
        if (ShowImage === 0) GoingUp = true;
        GoingUp ? setShowImage(++ShowImage) : setShowImage(--ShowImage);
        tl.restart();
      }
    });

    let { current } = backgroundRef;

    tl.fromTo(imgRef.current, 0.8, { opacity: 0 }, { opacity: 1 })
      .to(current, 3, { width: 0, ease: Linear.easeNone })
      .to(imgRef.current, 0.7, { opacity: 0 }, "-=.3");
  }, []);

  return (
    <PContainer>
      <Background>
        <Image src={`${Images.WhatWeDo[ShowImage]}`} ref={imgRef} />
        <DynamicBackgroundAnimation ref={backgroundRef} />
        <StaticBackgroundAnimation />
      </Background>
    </PContainer>
  );
};

export default Picture;
