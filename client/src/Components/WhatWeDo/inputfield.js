import React from "react";
import styled from "styled-components";
import { Colors } from "../../Assets";

const InputField = React.forwardRef(
  ({ Text, Name, Placeholder, myType }, ref) => (
    <IFContainer myType={myType}>
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

const IFContainer = styled.div`
  display: flex;
  height: ${props => (props.myType === "textArea" ? "300px" : "60px")};
  width: 350px;
  background-color: ${Colors.LIGHT_GREEN};
  border-radius: 5px;
  justify-content: center;
  overflow: hidden;
  margin-top: 30px;
  & > * {
    margin: auto;
  }
  & > label {
    width: 50px;
    color: ${Colors.DARK_GREEN};
  }

  & > textarea {
    box-sizing: border-box;

    width: 100%;
    resize: none;
    padding: 10px;
    margin: 10px;
    border: none;
  }
`;

const Input = styled.input`
  height: ${props => (props.myType === "textArea" ? "100%" : "40px")};
  width: ${props => (props.myType === "textArea" ? "100%" : "200px")};
  border: none;
  border-radius: 5px;
  overflow: hidden;

  &::placeholder {
    font-size: 12px;
    padding-left: 5px;
  }
`;
