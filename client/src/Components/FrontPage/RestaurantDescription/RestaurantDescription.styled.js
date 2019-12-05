import styled from "styled-components";
import { Colors, Media, VAR } from "@Assets";

export const RDContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  font-size: 20px;
  color: ${Colors.LIGHT_GREEN};
  font-weight: 200;
  flex-direction: column;
  ${Media.large`
    width: 70%;
    padding-left: 30px;
  `}

  ${Media.phone`
  height: 60%;
  width: 90%;`}
`;

export const TitleContainer = styled.div`
  height: auto;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${Media.desktop`
    width: 100%;
  `}

  ${Media.phone`
    justify-content: center;
  
  `}
`;

export const Title = styled.h1`
  margin: 0px 0px;
  font-size: 50px;
  ${VAR.FontFamilyHeader};
  ${Media.large`
    font-size: 40px;
    margin: 7.5px auto;
  `}
  ${Media.desktop`
    line-height: .8;
  `}
  ${Media.phone`
    font-size: 28px;
    line-height: 1;
  `}
`;
export const Paragraph = styled.p`
  font-size: 18px;
  width: 100%;
  line-height: 1.8;

  ${Media.large`
    width: 80%;
    font-size: 18px;
    line-height: 1.4;
  `}

  ${Media.desktop`
    width: 80%;
    line-height: 1.8;
  `}

  ${Media.phone`
    width: 95%;
    margin: 30px 0px;
    line-height: 1.6;
    font-size: 14px;
  `}
`;

export const AnchorButton = styled.a`
  display: flex;
  min-height: 50px;
  max-height: 50px;
  width: 240px;
  background-color: ${Colors.LIGHT_GREEN};
  border-bottom-right-radius: 30% 140%;

  &:focus {
    outline: none;
  }
  text-decoration: none;
`;

export const ButtonStyle = styled.button`
  height: 50px;
  color: ${Colors.LIGHT_BLUE};
  border: none;
  width: 200px;
  width: 80%;
  text-align: center;
  background-color: transparent;
  align-self: center;
  letter-spacing: 1.05px;
  padding: 0px;

  ${Media.desktop`
    height: 50px;
    padding: 15px 30px;
    margin: 15px auto;
    font-size: 16px;
  `}

  ${Media.phone`
    height: 30px;
    padding: 5px 10px;
    margin: 7.5px auto;
    font-size: 14px;
  `}

  &:hover {
    ${VAR.Hover};
  }
`;

export const Span = styled.span`
  height: 50px;
  width: 50px;
  background-color: ${Colors.LIGHT_BLUE};
  padding: 0px;
  margin: 0px;
  margin-right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 70%;
  border-top-left-radius: 70%;
  color: ${Colors.LIGHT_GREEN};
`;
