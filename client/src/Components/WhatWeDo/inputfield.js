import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

const InputField = React.forwardRef(
  ({ Text, Name, Placeholder, myType, isError }, ref) => (
    <IFContainer myType={myType}>
      {isError ? (
        <ErrorMessage> {isError} </ErrorMessage>
      ) : (
        <ErrorMessage></ErrorMessage>
      )}
      {myType === "textArea" ? (
        <textarea id={Name} ref={ref} placeholder={Placeholder} />
      ) : (
        <>
          <label htmlFor={Name}>{Text}</label>
          <Input
            type={myType}
            id={Name}
            ref={ref}
            placeholder={Placeholder}
            myType={myType}
          />
        </>
      )}
    </IFContainer>
  )
);

export default InputField;

const ErrorMessage = styled.h5`
  position: absolute;
  color: red;
  margin: 1px;
  top: -20px;
  padding-left: 7px;
  left: 0px;
  z-index: 5;
  font-weight: 100;
`;

const IFContainer = styled.div`
  display: flex;
  height: ${props => (props.myType === "textArea" ? "300px" : "100%")};
  max-height: ${props => (props.myType === "textArea" ? "200px" : "40px")};
  width: 450px;
  background-color: ${Colors.DARK_GREEN};
  border-radius: 5px;
  justify-content: space-between;
  position: relative;
  & > * {
    margin: auto;
  }
  & > label {
    width: 150px;
    color: ${Colors.WHITE};
    text-align: center;
  }

  & > textarea {
    box-sizing: border-box;
    width: 100%;
    resize: none;
    padding: 10px;
    margin: 10px;
    border: none;
    background-color: ${Colors.WHITE};

    &::placeholder {
      color: ${Colors.DARK_GREEN};
      opacity: 0.5;
    }
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  padding: 0px;
  background-color: ${Colors.WHITE};

  padding-left: 8px;

  &::placeholder {
    font-size: 12px;
    color: ${Colors.DARK_GREEN};
    opacity: 0.5;
  }
`;
