import React from "react";
import Hammer from "hammerjs";
import { useHistory } from "react-router-dom";

import { Images } from "@Assets/";

// Components
import { MBContainer, Selection, ArrowContainer, Text } from "./MobileControl.styled";
import { SliderContext } from "@Context/Slider";

const MobileControl = ({ children }) => {
  let myRef = React.useRef();
  const [mounted, setMounted] = React.useState(false);
  let history = useHistory();
  let { setPosition, Position, URL, setDirection } = React.useContext(SliderContext);

  React.useLayoutEffect(() => {
    if (!mounted && myRef.current) {
      const h = new Hammer(myRef.current);
      h.on("swipeleft", () => {
        setPosition(Position => Position + 1);
        setDirection("left");
      });
      h.on("swiperight", () => {
        setPosition(Position => Position - 1);
        setDirection("right");
      });
      setMounted(true);
    }
  }, []);

  React.useEffect(() => {
    history.push(`${URL}`);
  }, [URL]);

  return (
    <MBContainer ref={myRef}>
      <div></div>
      <img src={`${Images.Swipe}`} alt='Swipe here' />
    </MBContainer>
  );
};

export default MobileControl;
