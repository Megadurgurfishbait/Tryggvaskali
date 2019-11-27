import styled, { keyframes } from "styled-components";
import { Colors, Media } from "@Assets";

export const ImageDiv = styled.div`
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

export const DIV = styled.div`
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

export const ArrowButtons = styled.div`
  height: 40%;
  width: 40%;
  display: flex;
  justify-content: space-between;

  ${Media.large`
      height: 25%;
  `}
`;

export const jump = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const Button = styled.button`
  height: 80px;
  width: 80px;
  background-color: transparent;
  color: ${Colors.LIGHT_GREEN};
  font-size: 30px;
  border: none;

  &:hover {
    animation: ${jump} 1s infinite linear;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }

  &:first-child {
    margin-bottom: -12px;
  }
`;

export const ImagesContainer = styled.div`
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
  `;
}
