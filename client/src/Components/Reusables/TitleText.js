import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";
import ShowBurgerMenuContext from "../../Context/ShowBurgerMenu";

const TitleText = ({ children, myLink, fontSize }) => {
  let Hello = useContext(ShowBurgerMenuContext);
  return (
    <>
      {myLink ? (
        <LinkContainer to={myLink} onClick={Hello}>
          <Span>{children}</Span>
        </LinkContainer>
      ) : (
        <TTContainer>
          <Span fontSize={fontSize}>{children}</Span>
        </TTContainer>
      )}
    </>
  );
};

export default React.memo(TitleText);

const TTContainer = styled.div`
  height: 40px;
  margin-top: auto;
  background-color: ${Colors.WHITE_GREEN};

  ${Media.large`
      height: 30px;
    `}
`;

const LinkContainer = styled(Link)`
  height: 40px;
  margin-top: auto;
  background-color: ${Colors.WHITE_GREEN};
  color: ${Colors.LIGHT_BLUE};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  ${Media.large`
      height: 30px;
    `}
`;

const Span = styled.h1`
  transform: ${({ fontSize }) =>
    fontSize ? "translate3d(-12px, -17px, 0px)" : "translate3d(-20px, -25px, 0px)"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50")}px;
  margin: 0px;
  transition: transform 0.3s;
  ${Media.large`
      font-size: 35px;
      transform: translate3d(-10px, -15px, 0px);
    `}

  ${Media.phone`
    font-size: 20px;
    transform: translate3d(-10px, -5px, 0px);
  `}
`;
