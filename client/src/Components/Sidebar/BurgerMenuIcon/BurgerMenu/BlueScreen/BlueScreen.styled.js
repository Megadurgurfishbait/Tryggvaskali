import styled from "styled-components";
import { Colors, Media } from "@Assets/";

export const OpeningHoursRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const Col = styled.div`
  width: 60%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")}px;
  font-weight: ${({ fontBold }) => (fontBold ? fontBold : "400")};
`;

export const BSContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: ${Colors.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BookNowText = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${Colors.LIGHT_BLUE};
  font-size: 20px;
`;

export const BookNowButton = styled.button`
  margin-top: 20px;
  background-color: ${Colors.WHITE_GREEN};
  border: 2px solid ${Colors.LIGHT_BLUE};
  padding: 10px 30px;
  color: ${Colors.LIGHT_BLUE};
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const TextInfo = styled.div`
  width: 60%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  ${Media.large`
    width: 80%;
  `}

  & > a {
    &:first-of-type {
      margin-top: 20px;
    }

    margin-top: 5px;
    font-size: 20px;
    text-decoration: none;
    color: ${Colors.LIGHT_BLUE};
    font-weight: 600;
    line-height: 2;

    & > span {
      padding: 0px 10px;
    }
  }
  & > h1 {
    margin: 5px auto;
  }
`;
