import React, { useRef, useState, useEffect, useContext } from "react";

//Assets
import { sizes } from "@Assets/";
import { useValidation, useWD } from "@Hooks/";
import { ShowModalContext } from "@Context/ShowModal";

//Components
import InputField from "./inputfield";
import {
  ButtonContainer,
  Button,
  BMContainer,
  OpacityContainer,
  InputContainer
} from "./ButtonModal.styled";
import { LangContext } from "@Context/Lang";

const MAX_MODAL_HEIGHT = 600;
const MAX_MODAL_WIDTH = 600;

const ButtonModal = React.forwardRef((props, ref) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState();
  const { showModal, setShowModal } = useContext(ShowModalContext);
  const { English } = useContext(LangContext);

  let nafnRef = useRef();
  let simarnumerRef = useRef();
  let netfangRef = useRef();
  let textiRef = useRef();
  let { width, height } = useWD();

  const ModalSize = {
    height: width > sizes.tablet ? MAX_MODAL_HEIGHT : height,
    width: width > sizes.tablet ? MAX_MODAL_WIDTH : width
  };

  useEffect(() => {
    //  Values er tómt á fyrsta render.
    if (Object.entries(values).length === 0) return;

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
    <BMContainer ModalSize={ModalSize} ref={e => (ref.current[0] = e)}>
      <OpacityContainer ref={e => (ref.current[1] = e)} noValidate onSubmit={handleSubmit}>
        <h1>
          {English ? "How can we assist you today?" : "Hvernig getum við aðstoðað þig í dag?"}
        </h1>
        <InputContainer>
          <InputField
            Text={English ? "Name" : "Nafn"}
            Name={"nafnEinstaklings"}
            Placeholder={"Jón Jónsson"}
            ref={nafnRef}
            myType={"Text"}
            isError={error && error.name}
          />
          <InputField
            Text={English ? "Phone" : "Símanúmer"}
            Name={"simarnumerEinstaklings"}
            Placeholder={"4821390"}
            myType={"tel"}
            ref={simarnumerRef}
            isError={error && error.phone}
          />
          <InputField
            Text={English ? "Email" : "Netfang"}
            Name={"netfangEinstaklings"}
            Placeholder={"Tryggvaskali@Tryggvaskali.is"}
            ref={netfangRef}
            myType={"email"}
            isError={error && error.email}
          />
          <InputField
            Text={English ? "Text" : "Texti"}
            Name={"textiEinstaklings"}
            Placeholder={English ? "Your query here" : "Þín fyrirspurn"}
            ref={textiRef}
            myType={"textArea"}
            isError={error && error.text}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type='submit'>{English ? "Send query" : "Senda fyrirspurn"}</Button>
          <Button cancelButton type='button' onClick={() => setShowModal(!showModal)}>
            {English ? "Cancel" : "Hætta við"}
          </Button>
        </ButtonContainer>
      </OpacityContainer>
    </BMContainer>
  );
});

export default ButtonModal;
