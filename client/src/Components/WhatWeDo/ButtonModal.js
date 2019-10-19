import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../Assets/index";
import { SplitScreen } from "../Reusables";
import InputField from "./inputfield";
import useValidation from "../../hooks/useValidation";


/*
  FIXME: Til að hafa modalið opið að forrita, breyta Animation tímanum í Animation/ShowModal í 0.
*/

const ButtonModal = React.forwardRef((props, ref) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState();

  let nafnRef = useRef();
  let simarnumerRef = useRef();
  let netfangRef = useRef();
  let textiRef = useRef();

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
    <BMContainer ref={ref.current[0]}>
      <OpacityContainer ref={ref.current[1]} noValidate onSubmit={handleSubmit}>
        <h1>Hvernig getum við aðstoðað þig í dag?</h1>
        <InputContainer>
          <SplitScreen
            column
            compAi={"center"}
            compJc={"center"}
            compHeight={"100"}
          >
            <InputField
              Text={"Nafn"}
              Name={"nafnEinstaklings"}
              Placeholder={"Jón Jónsson"}
              ref={nafnRef}
              myType={"Text"}
            />
            <InputField
              Text={"Símanúmer"}
              Name={"simarnumerEinstaklings"}
              Placeholder={"4821390"}
              myType={"tel"}
              ref={simarnumerRef}
            />
            <InputField
              Text={"Netfang"}
              Name={"netfangEinstaklings"}
              Placeholder={"Tryggvaskali@Tryggvaskali.is"}
              ref={netfangRef}
              myType={"email"}
            />
          </SplitScreen>
          <SplitScreen compAi={"center"} compJc={"flex-end"} column>
            <InputField
              Text={"Texti"}
              Name={"textiEinstaklings"}
              Placeholder={"Þín fyrirspurn"}
              ref={textiRef}
              myType={"textArea"}
            />
          </SplitScreen>
        </InputContainer>
        <Error>
          {error ? Object.values(error).map(values => <ErrorMessage>{values}</ErrorMessage>) : null}
        </Error>
        <ButtonContainer>
          <button type="submit">Senda fyrirspurn</button>
        </ButtonContainer>
      </OpacityContainer>
    </BMContainer>
  );
});

export default ButtonModal;

const ErrorMessage = styled.h5`
  color: red;
  margin: 2px;
`;

const Error = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  height: 50px;
  display: flex;
  & > button {
    margin: auto;
    margin-bottom: 20px;
    padding: 10px 30px;
    height: 40px;
    text-align: center;
  }
`;

const BMContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  right: 50%;
  height: 0px;
  width: 0px;
  box-sizing: border-box;
  border: 2px solid ${Colors.WHITE};
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
`;
const OpacityContainer = styled.form`
  height: 100%;
  width: 100%;
  background-color: ${Colors.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > h1 {
    margin: 5px;
  }
`;

const InputContainer = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
`;
