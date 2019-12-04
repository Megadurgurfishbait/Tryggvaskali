import React, { useRef, createRef } from "react";

import { IContainer, Title, Paragraph } from "./Information.styled";
import ListMapping from "./ListMapping";
import { Slide } from "@Animate/";

const Information = ({ TextForSite: { titill, texti, listi } }) => {
  let SlideRefs = useRef([createRef(), createRef()]);
  React.useEffect(() => {
    Slide(SlideRefs.current);
  }, [titill, texti]);

  return (
    <IContainer>
      <Title ref={SlideRefs.current[0]}>{titill}</Title>
      <Paragraph ref={SlideRefs.current[1]}>{texti}</Paragraph>
      {listi && <ListMapping list={listi} />}
    </IContainer>
  );
};

export default Information;
