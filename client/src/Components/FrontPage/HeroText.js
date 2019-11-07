import React from "react";
import styled from "styled-components";
import { useTrail, animated } from "react-spring";

import { VAR } from "../../Assets";
import Media, { sizes } from "../../Assets/Varibles/media";
import useWD from "../../hooks/useWindowDimensions";

const items = ["Tryggvaskáli", "Restaurant"];
const config = { mass: 5, tension: 2000, friction: 200 };

const HeroText = () => {
  let { width } = useWD();

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: width > sizes.large ? 120 : 40,
    delay: 500,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <Container>
      <TrailMain>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <TrailText
              key={items[index]}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </TrailText>
          ))}
        </div>
      </TrailMain>
    </Container>
  );
};

export default HeroText;

const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  transform: translate3d(-40px, 100px, 0px);
  ${VAR.Border}
  ${Media.large`
    height: 200px;
    transform: translate3d(0px, 100px, 0px);
  `}
  ${Media.phone`
    height: 100px;
    transform: translate3d(0px, 60px, 0px);
  `}
`;

const TrailMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;

  ${Media.desktop`
    justify-content: center;
    margin: 0px;
  `}
`;

const TrailText = styled(animated.div)`
  font-family: "Javanese Text";
  position: relative;
  width: 100%;
  color: white;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;

  ${Media.large`
    font-size: 2em;
  `}

  & > div {
    overflow: hidden;
  }
`;
