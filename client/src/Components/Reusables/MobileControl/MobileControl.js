import React from "react";
import Hammer from "hammerjs";
import { useHistory } from "react-router-dom";

import { Images } from "@Assets/";
import { MBContainer } from "./MobileControl.styled";
import { SliderContext } from "@Context/Slider";

const MobileControl = () => {
  const [mounted, setMounted] = React.useState(false);
  let history = useHistory();
  let { setPosition, URL, setDirection } = React.useContext(SliderContext);

  React.useLayoutEffect(() => {
    let myRef = document.getElementsByClassName("DRASL")[0];
    if (!mounted && myRef) {
      const h = new Hammer.Manager(myRef, {
        recognizers: [
          // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
          [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL, threshold: 100 }]
        ]
      });
      h.set({ enable: true });
      h.on("swipeleft", ev => {
        ev.preventDefault();

        /*
        setPosition(Position => Position + 1);
        setDirection("left");
        */
        alert(ev.target.className);
      });
      /*
      h.on("swiperight", () => {
        setPosition(Position => Position - 1);
        setDirection("right");
      });

      */
      setMounted(true);
    }
  }, []);

  React.useEffect(() => {
    history.push(`${URL}`);
  }, [URL]);

  return (
    <MBContainer className={"DRASL"}>
      <img src={`${Images.Swipe}`} alt='Swipe here' />
    </MBContainer>
  );
};

export default MobileControl;
