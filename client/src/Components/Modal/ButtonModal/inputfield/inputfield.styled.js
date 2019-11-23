import styled from "styled-components";
import { Colors, Media } from "@Assets";

export const ErrorMessage = styled.h5`
  position: absolute;
  color: red;
  margin: 1px;
  top: -20px;
  padding-left: 7px;
  left: 0px;
  z-index: 5;
  font-weight: 100;

  ${Media.tablet`
      font-size: 12px;
      top: -15px;
`}
`;

export const IFContainer = styled.div`
  display: flex;
  height: ${({ myType }) => (myType === "textArea" ? "300px" : "100%")};
  max-height: ${({ myType }) => (myType === "textArea" ? "200px" : "40px")};
  width: 450px;
  background-color: ${Colors.DARK_GREEN};
  border-radius: 5px;
  justify-content: space-between;
  position: relative;

  ${Media.tablet`
    width: 80%; 
    border-radius: 0px;
    margin-bottom: 15px;
  `}

  & > * {
    margin: auto;
  }
  & > label {
    width: 150px;
    color: ${Colors.WHITE};
    text-align: center;

    ${Media.tablet`
  text-align: left;
  margin: 0px auto 0px 5px;
  `}
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

    ${Media.tablet`
  width: 90%;
  height: 100% ;
  border-radius: none;
`}
  }

  ${Media.tablet`
  width: 80%;
  flex-direction: column;    
  max-height: ${({ myType }) => (myType === "textArea" ? "200px" : "50px")};
`}
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  padding: 0px;
  background-color: ${Colors.WHITE};

  &::placeholder {
    font-size: 12px;
    color: ${Colors.DARK_GREEN};
    opacity: 0.5;
    padding-left: 5px;
  }

  ${Media.tablet` 
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;  
height: 30px;
`}
`;
