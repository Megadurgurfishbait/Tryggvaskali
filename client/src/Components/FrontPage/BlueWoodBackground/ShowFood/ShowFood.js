import React, { useState, useRef, useEffect } from "react";

// Assets
import CaruselSwitcher from "Animate/CarouselSwitcher";
import { Images } from "@Assets";
import { ImageDiv, DIV, ArrowButtons, Button, ImagesContainer } from "./ShowFood.styled";

const ShowFood = () => {
  let refs = useRef([Images.Food.map(React.createRef)]);
  const [disableButton, setDisable] = useState(true);
  const [Direction, setDirection] = useState();
  const [pos, setPos] = useState(-1);

  useEffect(() => {
    CaruselSwitcher(refs.current, pos, Direction).eventCallback(
      "onComplete",
      setDisable(disableButton => !disableButton)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos]);

  const goLeft = () => {
    setDirection("Left");
    setPos(pos < 4 ? pos => pos + 1 : pos => (pos = 0));
    setTimeout(() => setDisable(disableButton => !disableButton), 1200);
  };

  const goRight = () => {
    setDirection("Right");
    setPos(pos > 0 ? pos => pos - 1 : pos => (pos = 4));
    setTimeout(() => setDisable(disableButton => !disableButton), 1200);
  };

  return (
    <DIV>
      <ImagesContainer>
        {Images.Food.map((Value, index) => (
          <ImageDiv
            ref={element => {
              refs.current[index] = element;
            }}
            source={Value}
          />
        ))}
      </ImagesContainer>
      <ArrowButtons>
        <Button onClick={!disableButton ? null : () => goLeft()}>{"<"}</Button>
        <Button onClick={!disableButton ? null : () => goRight()}>{">"}</Button>
      </ArrowButtons>
    </DIV>
  );
};

export default ShowFood;
