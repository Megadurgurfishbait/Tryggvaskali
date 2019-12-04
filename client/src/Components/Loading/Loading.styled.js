import styled from "styled-components";
import { Colors } from "@Assets/";
function CENTER() {
  return `
  display: flex;
  justify-content: center;
  align-items: center;
  `;
}
export const LContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  background: radial-gradient(circle, rgba(247, 255, 243, 1) 0%, rgba(204, 214, 199, 1) 100%);

  & > h1 {
    margin: 5px auto;
    color: ${Colors.LIGHT_BLUE};
    font-weight: 100;
    font-size: 50px;
    letter-spacing: -1px;
  }
`;

export const TextContainer = styled.div``;

export const WineGlas = styled.div`
  height: 8px;
  width: 8px;
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ l }) => l};
  right: ${({ r }) => r};
  background: rgb(211, 211, 211);
  background: radial-gradient(circle, rgba(211, 211, 211, 1) 0%, rgba(147, 147, 147, 1) 100%);
  border-radius: 50%;
  ${CENTER};
`;

export const Top = styled.div`
  background: radial-gradient(circle, rgba(211, 211, 211, 1) 0%, rgba(147, 147, 147, 1) 100%);
  height: 5.5px;
  width: 5.5px;
  border: 0.3px solid rgba(147, 147, 147, 0.4);
  border-radius: 50%;
  ${CENTER};
`;

export const Bottom = styled.div`
  background-color: transparent;
  height: 0px;
  width: 0px;
  border: 0.4px solid rgba(147, 147, 147, 0.3);
  border-radius: 50%;
`;
export const BottomRing = styled.div`
  background-color: rgba(147, 147, 147, 0.2);
  border: 0.4px solid rgba(147, 147, 147, 0.1);
  height: 3px;
  width: 3px;
  border-radius: 50%;
  ${CENTER};
`;

export const AnimationContainer = styled.div`
  ${CENTER}
  height: 300px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const Room = styled.div`
  ${CENTER}
  height: 300px;
  width: 300px;
  position: relative;
`;

export const Table = styled.div`
  ${CENTER}
  background-color: #b98f71;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 5px solid #8b4513;
  position: relative;
  z-index: 2;
`;
export const Disk = styled.div`
  ${CENTER}
  position: absolute;
  top: ${({ top }) => `calc(${top} - 12.5px)`};
  bottom: ${({ bottom }) => `calc(${bottom} - 12.5px)`};
  left: ${({ l }) => l};
  right: ${({ r }) => r};
  height: 25px;
  width: 25px;
  box-sizing: border-box;
`;
export const DiskSVG = styled.img`
  height: 25px;
  width: 25px;
  transform: ${({ rotY }) => `rotateZ(${rotY})`};
`;

export const Chair = styled.div`
  position: absolute;
  display: flex;
  min-height: 40px;
  max-height: 40px;
  max-width: 42px;
  min-width: 42px;
  top: ${({ top }) => `calc(${top} - 18px)`};
  bottom: ${({ bottom }) => `calc(${bottom} - 12.5px)`};
  left: ${({ l }) => l};
  right: ${({ r }) => r};
  flex-wrap: nowrap;

  transform: ${({ rotY }) => `rotateZ(${rotY})`};
`;
export const ChairBack = styled.div`
  position: absolute;
  right: 0px;
  top: -2.7px;
  background-image: linear-gradient(
    to right,
    #8b4513,
    #8b4513,
    #8b4513,
    #8b4513,
    #8b4513,
    #8b4513,
    #8b4513,
    #864312,
    #7d3e11,
    #723910,
    #68330e,
    #5d2e0d,
    #53290b
  );
  height: 45.2px;
  width: 15px;
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 94%);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;
export const ChairSeat = styled.div`
  height: 40px;
  width: 20px;
  background-color: #8b4513;
`;
export const ChairLegs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  width: 8px;
  height: 40px;

  & > span {
    &:first-child {
      background-color: #ad7c59;
      height: 5px;
      width: 8px;
    }

    &:last-child {
      background-color: #ad7c59;
      height: 5px;
      width: 8px;
    }
  }
`;

export const Waiter = styled.div`
  height: 25px;
  width: 60px;
  background-color: #aec6cf;
  border-top-left-radius: 30px 10px;
  border-bottom-left-radius: 30px 10px;
  border-bottom-right-radius: 30px 10px;
  border-top-right-radius: 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: absolute;
  ${CENTER}
  transform: rotateZ(-35deg);
  bottom: 0px;
  right: 0px;
`;

export const Arm = styled.div`
  height: 40px;
  width: 10px;
  background-color: #aec6cf;
  border-top-left-radius: 15px 30px;
  border-bottom-left-radius: 15px 30px;
  z-index: 400000;
  position: absolute;
  left: 0px;
  top: -70%;
`;

export const ArmDisk = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: red;
  bottom: 0px;
  right: 0px;
  border: 2px solid darkgray;
  box-sizing: border-box;
  background: rgb(147, 147, 147);
  background: radial-gradient(circle, rgba(147, 147, 147, 1) 32%, rgba(211, 211, 211, 1) 100%);
  ${CENTER};
  z-index: 6;
`;

export const TopOfDisk = styled.div`
  height: 2px;
  width: 2px;
  background-color: rgb(108, 108, 108);
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #292f37;
  transform: translateY(-3px);
  box-sizing: border-box;
  z-index: 5000000000000000000000;
`;

export const Nose = styled.div`
  height: 3px;
  width: 3px;
  transform: translateY(-3px);
  background-color: #ffe0bd;
`;

export const DiskPlate = styled.div`
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: red;
  bottom: 0px;
  right: 0px;
  box-sizing: border-box;
  background-color: rgba(104, 108, 109, 0.8);
  ${CENTER};
  z-index: 5;
`;
