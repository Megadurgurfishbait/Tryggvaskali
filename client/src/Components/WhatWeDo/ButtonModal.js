import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Colors, VAR } from "../../Assets/index";
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
          <SplitScreen compAi={"center"} compJc={"space-around"} compWidth={100} compHeight={100} column>

            <InputField
              Text={"Nafn"}
              Name={"nafnEinstaklings"}
              Placeholder={"Jón Jónsson"}
              ref={nafnRef}
              myType={"Text"}
              isError={error ? error.name: null}
            />
            <InputField
              Text={"Símanúmer"}
              Name={"simarnumerEinstaklings"}
              Placeholder={"4821390"}
              myType={"tel"}
              ref={simarnumerRef}
              isError={error ? error.phone: null}
            />
            <InputField
              Text={"Netfang"}
              Name={"netfangEinstaklings"}
              Placeholder={"Tryggvaskali@Tryggvaskali.is"}
              ref={netfangRef}
              myType={"email"}
              isError={error ? error.email: null}
            />

            <InputField
              Text={"Texti"}
              Name={"textiEinstaklings"}
              Placeholder={"Þín fyrirspurn"}
              ref={textiRef}
              myType={"textArea"}
              isError={error ? error.text: null}
            />
          </SplitScreen>
        </InputContainer>
        <ButtonContainer>
          <button type="submit">Senda fyrirspurn</button>
        </ButtonContainer>
      </OpacityContainer>
    </BMContainer>
  );
});

export default ButtonModal;

const ButtonContainer = styled.div`
  height: 50px;
  display: flex;

  & > button {
    margin: auto;
    margin-bottom: 20px;
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
`;

const BMContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  right: 50%;
  height: 0px;
  width: 0px;
  box-sizing: border-box;
  border: 3px solid ${Colors.DARK_GREEN};
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;


`;
const OpacityContainer = styled.form`
  height: 100%;
  width: 100%;
  background-color: ${Colors.GREEN};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 25px;
    margin: 30px auto;
    color: ${Colors.DARK_GREEN};
  }
`;

const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
