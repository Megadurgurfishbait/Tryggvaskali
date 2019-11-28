import styled from "styled-components";
import { Colors, VAR, Media } from "@Assets/index";

export const ButtonContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  width: 60%;

  ${Media.tablet`
width: 90%;
justify-content: center;
align-items: center;
`}
`;

export const Button = styled.button`
  margin: auto;
  padding: 10px 30px;
  height: 40px;
  text-align: center;

  border: none;
  background-color: ${({ cancelButton }) =>
    cancelButton ? Colors.LIGHT_GREEN : Colors.DARK_GREEN};
  color: ${({ cancelButton }) => (cancelButton ? Colors.DARK_GREEN : Colors.WHITE)};

  &:hover {
    ${VAR.Hover};
  }
`;

export const BMContainer = styled.div`
  position: absolute;
  left: ${({ ModalSize }) => `calc(50% - ${ModalSize.width}px / 2)`};
  top: ${({ ModalSize }) => `calc(50% - ${ModalSize.height}px / 2)`};
  height: ${({ ModalSize }) => ModalSize.height}px;
  width: ${({ ModalSize }) => ModalSize.width}px;
  box-sizing: border-box;
  background-color: ${Colors.GREEN};
  border-radius: 5px;
  z-index: 60000000000000000000000;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Media.tablet`
  min-height: 100%;
  overflow-y: scroll;
`}
`;
export const OpacityContainer = styled.form`
  width: 100%;
  background-color: ${Colors.GREEN};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height: 100%;
  padding: 20px;

  ${Media.tablet`
  height: initial;
  padding: 0px;

`}
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

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
