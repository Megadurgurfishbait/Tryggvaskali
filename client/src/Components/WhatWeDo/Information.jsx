import React, {forwardRef} from "react";
import styled from "styled-components";

import { Colors } from '../../Assets/';
 
const Information = forwardRef(({
  Tit = "HER KEMUR EH",
  Par = "lika gsfknfnsbdfj bsdjfb sdjfb sjdbfjsd bfj bsdjhf bsdjhfbjshdbfjhsdbf jhsdbfj hsbdfjhhbs djhhfb sjhdbf jshdbf jhsdbfjs bdfjhbsdjhfb sjdhfb sjhdbf jhsdbf jhsdbfjhs bjfhb sdjf jhsbhdfj hbsdfjhbsdjhfb sjdhbf sjhdbf jshdbf jshdbf jhsbdf"
}, ref) => {
  return (
    <IContainer >
      <Title ref={ref.current[0]}> {Tit}</Title>
      <Paragraph ref={ref.current[1]}>{Par}</Paragraph>
    </IContainer>
  );
});

export default Information;

const IContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.LIGHT_BLUE};
`;

const Title = styled.h1`
    height: 20px;
    width: 60%;
    margin: 100px auto;
`;
const Paragraph = styled.p`
    height: 500px;
    width: 60%;
    line-height: 2;
    font-size: 20px;

`;
