import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, VAR } from "../../Assets";
import Media from "../../Assets/Varibles/media";

const Button = ({ Text, Link, href }) => (
  <>
    {href ? (
      <ButtonContainerHref href={href}>
        <ButtonStyle> {Text} </ButtonStyle>
        <Span> {">"} </Span>
      </ButtonContainerHref>
    ) : (
      <ButtonContainer to={Link}>
        <ButtonStyle> {Text} </ButtonStyle>
        <Span> {">"} </Span>
      </ButtonContainer>
    )}
  </>
);

export default Button;

const ButtonContainer = styled(Link)`
  display: flex;
  height: 50px;
  width: 240px;
  background-color: ${Colors.LIGHT_GREEN};
  border-bottom-right-radius: 30% 120%;
  text-decoration: none;
`;

const ButtonContainerHref = styled.a`
  display: flex;
  height: 50px;
  width: 240px;
  background-color: ${Colors.LIGHT_GREEN};
  border-bottom-right-radius: 30% 120%;

  &:focus {
    outline: none;
  }
  text-decoration: none;
`;

const ButtonStyle = styled.button`
  height: 50px;
  color: ${Colors.LIGHT_BLUE};
  border: none;
  font-weight: bold;
  width: 200px;
  width: 80%;
  text-align: center;
  background-color: transparent;
  align-self: center;
  letter-spacing: 1.05px;
  padding: 0px;
  font-family: "Montserrat", serif !important;

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

const Span = styled.span`
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
