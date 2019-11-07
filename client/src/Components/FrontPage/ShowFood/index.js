import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CaruselSwitcher from "../../../Animation/CarouselSwitcher";

// Assets
import { VAR, Colors, Images } from "../../../Assets";
import Media from "../../../Assets/Varibles/media";

const ShowFood = () => {
  const { Food } = Images;
  let refs = useRef([Food.map(React.createRef)]);
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
      <ArrowButtons>
        <Button onClick={disableButton ? null : () => goLeft()}>{"<"}</Button>
        <Button onClick={disableButton ? null : () => goRight()}>{">"}</Button>
      </ArrowButtons>
      <ImagesContainer bgImg={Images.BackgroundImage}>
        {Food.map((Value, index) => (
          <ImageDiv
            ref={element => {
              refs.current[index] = element;
            }}
            source={Value}
          />
        ))}
      </ImagesContainer>
    </DIV>
  );
};

export default ShowFood;

const ImageDiv = styled.div`
  min-height: 100%;
  min-width: 100%;
  background: url(${props => props.source});
  position: absolute;
  opacity: 0;
  right: 0;
  z-index: 40;

  ${Media.large`
  background-size: cover;
  `}
`;

const DIV = styled.div`
  display: flex;
  height: 500px;
  width: 500px;
  align-self: center;
  justify-content: flex-end;
  margin-left: auto;
  flex-flow: nowrap;
  transform: translateX(80px);

  ${Media.large`
    height: 400px;
    width: 400px;
    transform: translateX(55px);
  `}

  ${VAR.Border};
`;

const ArrowButtons = styled.div`
  height: 100%;
  width: 10%;
  transform: translateX(-80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Button = styled.button`
  ${VAR.Border};
  height: 80px;
  width: 80px;
  background-color: transparent;
  color: ${Colors.LIGHT_GREEN};
  font-size: 30px;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }

  &:first-child {
    margin-bottom: -12px;
  }
`;

const ImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  transform: translateX(-50px);
  position: relative;

  ${Media.large`
    transform: translateX(-40px);
  `}
`;
