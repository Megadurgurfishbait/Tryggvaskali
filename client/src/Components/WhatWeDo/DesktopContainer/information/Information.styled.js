import styled from "styled-components";

import { Colors, Images, Media } from "@Assets";

export const IContainer = styled.div`
height: 100%;
width: 40%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding: 0px 30px;
color: ${Colors.GREEN};
background: url(${Images.BackgroundImage});

${Media.tablet`
      justify-content: flex-end; `}

${Media.large`
  width: 80%;
`}

${Media.desktop`
    width: 100%;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
height: 120px;
width: 80%;
font-size: 35px;
font-weight: 800;



${Media.large`
  font-size: 35px;
`}

${Media.desktop`
    width: 60%;
  `}

${Media.tablet`
      width: 90%;
      font-size: 18px;
      margin: 30px auto;
  `}
`;
export const Paragraph = styled.p`
height: 500px;
width: 100%;
line-height: 1.8;
font-size: 20px;
margin-top: 30px;

${Media.large`
    height: 300px;
    font-size: 18px;
    line-height: 1.6;
  `}

  ${Media.desktop`
    width: 60%;
  `}

${Media.tablet`
      width: 90%;
      line-height: 1.6;
      font-size: 14px;
  `}
`;
