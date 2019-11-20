import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Colors, VAR } from "../../Assets/index";
import { SplitScreen } from "../Reusables";
import InputField from "./inputfield";
import useValidation from "../../hooks/useValidation";
import Media, { sizes } from "../../Assets/Varibles/media";
import ShowModalContext from "../../Context/ShowModal";
import ShowModalAnimation from "../../Animation/ShowModal";
import useWD from "../../hooks/useWindowDimensions";
/*
  FIXME: Til að hafa modalið opið að forrita, breyta Animation tímanum í Animation/ShowModal í 0.
*/

const ButtonModal = React.forwardRef((props, ref) => {
  let animationContainer = useRef();
  let opacityRef = useRef();
  let nafnRef = useRef();
  let simarnumerRef = useRef();
  let netfangRef = useRef();
  let textiRef = useRef();

  const { showModal, setShowModal } = useContext(ShowModalContext);
  const [Animation, setAnimation] = useState(null);
  const [values, setValues] = useState({});
  const [error, setError] = useState();

  let { width, height } = useWD();
  const ModalSize = {
    height: width > sizes.tablet ? 700 : height,
    width: width > sizes.tablet ? 600 : width
  };

  useEffect(() => {
    // Init Animaiton
    if (!Animation) setAnimation(ShowModalAnimation(animationContainer, opacityRef));

    // If there is no Animation
    if (Animation === null) return;

    // Show Animation && Reverse Animation
    showModal ? Animation.play() : Animation.reverse();
  }, [showModal]);

  useEffect(() => {
    //  Values er tómt á fyrsta render.
    if (Object.entries(values).length === 0) {
      return;
    }

    // Use Validation skilar Object.
    //  Ef tómur: Getum sent email.
    // Ef hann hefur entry: Vantar eitthvað upp á.
    if (Object.entries(useValidation(values)).length > 0) {
      setError(useValidation(values));
    } else if (Object.entries(useValidation(values)).length === 0) {
      /* TODO: Gera Axios request á bakenda til að senda email.*/
    }
  }, [values]);

  const handleSubmit = e => {
    e.preventDefault();
    setValues({
      nafn: nafnRef.current.value,
      simanumer: simarnumerRef.current.value,
      netfang: netfangRef.current.value,
      texti: textiRef.current.value
    });
  };

  return (
    <BMContainer ModalSize={ModalSize} showModal={showModal} ref={e => (animationContainer = e)}>
      <OpacityContainer
        noValidate
        ModalSize={ModalSize}
        onSubmit={handleSubmit}
        ref={e => (opacityRef = e)}>
        <h1>Hvernig getum við aðstoðað þig í dag?</h1>
        <InputContainer>
          <SplitScreen
            compAi={"center"}
            compJc={"space-around"}
            compWidth={100}
            compHeight={100}
            column>
            <InputField
              Text={"Nafn"}
              Name={"nafnEinstaklings"}
              Placeholder={"Jón Jónsson"}
              ref={nafnRef}
              myType={"Text"}
              isError={error ? error.name : null}
            />
            <InputField
              Text={"Símanúmer"}
              Name={"simarnumerEinstaklings"}
              Placeholder={"4821390"}
              myType={"tel"}
              ref={simarnumerRef}
              isError={error ? error.phone : null}
            />
            <InputField
              Text={"Netfang"}
              Name={"netfangEinstaklings"}
              Placeholder={"Tryggvaskali@Tryggvaskali.is"}
              ref={netfangRef}
              myType={"email"}
              isError={error ? error.email : null}
            />

            <InputField
              Text={"Texti"}
              Name={"textiEinstaklings"}
              Placeholder={"Þín fyrirspurn"}
              ref={textiRef}
              myType={"textArea"}
              isError={error ? error.text : null}
            />
          </SplitScreen>
        </InputContainer>
        <ButtonContainer>
          <button type='submit'>Senda fyrirspurn</button>
          <button type='button' onClick={() => setShowModal(!showModal)}>
            Hætta við
          </button>
        </ButtonContainer>
      </OpacityContainer>
    </BMContainer>
  );
});

export default ButtonModal;

const ButtonContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  & > button {
    margin: auto;
    padding: 10px 30px;
    height: 40px;
    text-align: center;

    border: none;
    background-color: ${Colors.DARK_GREEN};
    color: ${Colors.WHITE};

    &:hover {
      ${VAR.Hover};
    }
  }

  ${Media.tablet`
  width: 90%;
  justify-content: center;
  align-items: center;
  `}
`;

const BMContainer = styled.div`
  position: absolute;
  left: ${({ ModalSize }) => `calc(50% - ${ModalSize.width}px / 2)`};
  top: ${({ ModalSize }) => `calc(50% - ${ModalSize.height}px / 2)`};
  height: ${({ ModalSize }) => ModalSize.height}px;
  width: ${({ ModalSize }) => ModalSize.width}px;
  box-sizing: border-box;
  background-color: ${Colors.GREEN};
  border-radius: 5px;
  z-index: 60;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Media.tablet`
    min-height: 100%;
    overflow-y: scroll;
  `}
`;
const OpacityContainer = styled.form`
  width: 100%;
  background-color: ${Colors.GREEN};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  opacity: 0;

  & > h1 {
    font-size: 25px;
    margin: 30px auto;
    color: ${Colors.DARK_GREEN};

    ${Media.tablet`
      font-size: 14px;
      height: initial;
      overflow: scroll;
    `}
  }
`;

const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
