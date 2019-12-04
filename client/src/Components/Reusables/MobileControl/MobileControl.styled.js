import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "@Assets";

const rotate = keyframes`
      0% {
        transform: translateX(0px);
        opacity: .6;
      }
      20% {
        transform: translateX(20px);
      }
      40% {
        transform: translateX(-20px);
      }
      60% {
        transform: translateX(20px);
      }
      80% {
        transform: translateX(-20px)
       }
       100% {
         transform: translateX(0px);
         opacity: 0;
       }
    `;
export const MBContainer = styled.div`
  position: absolute;
  display: flex;
  height: 60px;
  width: 100vw;
  bottom: 0px;
  opacity: 1;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000000;
  background-color: red;
  cursor: pointer !important;

  & > div {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 50000001;
  }

  & > img {
    position: absolute;
    height: 40px;
    width: 40px;
    animation: ${rotate} 3s linear forwards;
    z-index: 50000002;
  }
`;
