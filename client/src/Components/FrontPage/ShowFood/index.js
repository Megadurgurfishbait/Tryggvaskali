import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CaruselSwitcher from "../../../Animation/CarouselSwitcher";
import ButtonStyle from "../../Reusables/Button";
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
      <ImagesContainer>
        {Food.map((Value, index) => (
          <ImageDiv
            ref={element => {
              refs.current[index] = element;
            }}
            source={Value}
          />
        ))}
      </ImagesContainer>
      <ArrowButtons>
        <Button onClick={disableButton ? null : () => goLeft()}>{"<"}</Button>
        <Button onClick={disableButton ? null : () => goRight()}>{">"}</Button>
      </ArrowButtons>
    </DIV>
  );
};

export default ShowFood;

const ImageDiv = styled.div`
  min-height: 500px;
  min-width: 100%;
  background: url(${props => props.source}) no-repeat;
  background-position: 50% 50%;
  position: absolute;
  opacity: 0;
  z-index: 40;
  background-size: contain;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Media.large`
    ${maxSize(400)}
    align-self: flex-start;
  `}


  ${Media.desktop`
    ${maxSize(300)}
    align-self: flex-start;
    
  `}
`;

const DIV = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  overflow: hidden;

  ${Media.desktop`
    height: 600px;
    width: 400px;
  `}
`;

const ArrowButtons = styled.div`
  height: 40%;
  width: 40%;
  display: flex;
  justify-content: space-between;

  ${Media.large`
      height: 25%;
  `}


`;

const Button = styled.button`
  height: 80px;
  width: 80px;
  background-color: transparent;
  color: ${Colors.LIGHT_GREEN};
  font-size: 30px;
  border: none;

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
  justify-content: center;
  align-items: flex-end;

  ${Media.large`
    height: 400px;
    width: 400px;
  `}
`;


function maxSize(size) {
  return `
  max-height: ${size}px;
  max-width: ${size}px;
  min-height: ${size}px;
  min-width: ${size}px;
  `
}