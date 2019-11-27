import React, { useRef, useState } from "react";
import { TimelineMax } from "gsap";

import { Images } from "@Assets";

import { PContainer, Background, Image, BackgroundAnimation } from "./Picture.styled";

const Picture = () => {
  let imgRef = useRef();
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

    let { current } = imgRef;
    /*
    tl.set(current, { opacity: 0 })
      .to(current, 1, { opacity: 1 }, "together")
      .from(current, 5, { x: 20, y: 20 }, "together");
      */
  }, []);

  return (
    <PContainer>
      <Background>
        <Image src={`${Images.WhatWeDo[ShowImage]}`} />
        <BackgroundAnimation ref={imgRef} />
      </Background>
    </PContainer>
  );
};

export default Picture;
