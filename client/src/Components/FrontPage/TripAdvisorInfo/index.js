import React, { useRef } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";
import { Colors, VAR } from "../../../Assets";

const TripAdvisor = () => {
  let BackgroundRef = useRef();
  let InfoRef = useRef();
  const tl = new TimelineMax();

  React.useEffect(() => {
    tl.delay(1.5)
      .fromTo(BackgroundRef.current, 0.4, { width: 0 }, { width: 50 })
      .fromTo(BackgroundRef.current, 0.6, { height: 0 }, { height: 150 })
      .fromTo(BackgroundRef.current, 0.6, { width: 50 }, { width: 450 })
      .to(InfoRef.current, 0.1, { opacity: 1 })
      .fromTo(BackgroundRef.current, 0.4, { width: 450 }, { width: 0 });
  });

  return (
    <Container>
      <TAInformation ref={InfoRef}>
        <Text>TripAdvisor</Text>
        <SmallerText>
          {`
          Certificate of Excellence
          2015 - 2019 Winner
          `}
        </SmallerText>
      </TAInformation>
      <TAContainer ref={BackgroundRef} />
    </Container>
  );
};

export default TripAdvisor;

const Container = styled.div`
  position: relative;
  height: 150px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const TAContainer = styled.div`
  background-color: ${Colors.WHITE};
  position: absolute;
  bottom: 0px;
  width: 50px;
`;

const TAInformation = styled.div`
  height: 150px;
  width: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  ${VAR.Border};
  color: ${Colors.WHITE};
`;

const Text = styled.h2`
  margin: 0px;
  font-size: 30px;
`;
const SmallerText = styled.h4`
  margin: 0px;
  text-align: center;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: 1px;
  font-weight: lighter;
  font-size: 20px;
`;
