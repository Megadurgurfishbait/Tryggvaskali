import React, { useRef, useState } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";
import { Colors } from "../../Assets";
import MyImage, {StripeImage} from "../../Assets/Images/WhatWeDo/";

const Picture = () => {
  let imgRef = useRef();
  let [ShowImage, setShowImage] = useState(0);
  /* 
  React.useEffect(() => {
    let GoingUp = true;

    const tl = new TimelineMax({ delay: 1,
      onComplete: function() {
        if (ShowImage === MyImage.length - 1) {
          GoingUp = false;
        }
        if (ShowImage === 0) {
          GoingUp = true;
        }

        GoingUp ? setShowImage(++ShowImage) : setShowImage(--ShowImage);
        tl.restart();
      }
    });

    let { current } = imgRef;

    tl.set(current, {opacity: 0})
    .to(current, 1, {opacity: 1}, "together")
    .from(current, 5, {x: 20, y: 20}, "together");

  }, []);
 */
  return (
    <PContainer>
      <Background>
        <Image  src={`${MyImage[ShowImage]}`} />
        <BackgroundAnimation  ref={imgRef} />
      </Background>
    </PContainer>
  );
};

export default Picture;

const PContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
`;

const BackgroundAnimation = styled.div`
  background-color: ${Colors.LIGHT_BLUE};
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: .5;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  top: -20px;
  left: -20px;
`;


