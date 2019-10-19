import React, { useRef, createRef } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";

import { Colors, BurgerMenuText } from "../../Assets";
import { SplitScreen } from "../Reusables";
import ListItem from "./ListItem";
import BlueScreen from "./BlueScreen";
// eslint-disable-next-line no-lone-blocks
{
  /* 
    List Item tekur inn allan Objectinn svo það er í lagi að spread'a hann niður í props. 
    Tekur inn: {Number, Title, Link}
    */
}
const BugerMenu = React.forwardRef((props, ref) => {
  let refs = useRef([BurgerMenuText.map(createRef)]);

  React.useEffect(() => {
    let tl = new TimelineMax();
    if (props.show) {
      tl.set(".test", { opacity: 0 })
        .staggerFrom(".test", 0.6, { y: "-=20", opacity: 0 }, 0.2)
        .delay(1.2);
    }
  }, [props.show]);

  return (
    <BurgerContainer ref={ref}>
      <SplitScreen compWidth={65} compBg={Colors.LIGHT_GREEN}>
        <MenuList>
          {BurgerMenuText.map((v, i) => (
            <ListItem
              {...v}
              ref={element => {
                refs.current[i] = element;
              }}
            />
          ))}
        </MenuList>
      </SplitScreen>
      <SplitScreen compWidth={35} compBg={Colors.GREEN}>
        <BlueScreen />
      </SplitScreen>
    </BurgerContainer>
  );
});

export default React.memo(BugerMenu);

const BurgerContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100vw;
  height: 0;
  z-index: 50000;
`;

const MenuList = styled.ul`
  height: 90%;
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;
