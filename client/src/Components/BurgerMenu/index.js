import React, { useRef, createRef } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";

import { Colors, BurgerMenuText } from "../../Assets";
import { SplitScreen } from "../Reusables";
import ListItem from "./ListItem";
import BlueScreen from "./BlueScreen";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileFooter from "./MobileFooter";
import Media, { sizes } from "../../Assets/Varibles/media";
import MobilePopup from "./MobilePopup/MobilePopup";

// eslint-disable-next-line no-lone-blocks
{
  /* 
    List Item tekur inn allan Objectinn svo það er í lagi að spread'a hann niður í props. 
    Tekur inn: {Number, Title, Link}
    */
}
const BugerMenu = React.forwardRef((props, ref) => {
  let refs = useRef([BurgerMenuText.map(createRef)]);
  let { width } = useWindowDimensions();
  React.useEffect(() => {
    let tl = new TimelineMax();
    if (props.show) {
      tl.set(".test", { opacity: 0 })
        .staggerFrom(".test", 1, { y: "-=20", opacity: 0 }, 0.2)
        .delay(1.5);
    }
  }, [props.show]);

  return (
    <BurgerContainer ref={ref} myWidth={width}>
      <SplitScreen
        compWidth={width > 1300 ? 65 : 100}
        compBg={Colors.LIGHT_GREEN}
      >
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
      {width > 1300 ? (
        <SplitScreen compWidth={35} compBg={Colors.GREEN}>
          <BlueScreen />
        </SplitScreen>
      ) : (
          <MobileFooter />
      )}
    </BurgerContainer>
  );
});

export default React.memo(BugerMenu);


const BurgerContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: ${props =>
    props.myWidth > sizes.phone ? "calc(100vw - 60px)" : "100vw"};
  z-index: 50000;
  overflow: hidden;
  background-color: ${Colors.LIGHT_GREEN};
  ${Media.large`
  flex-direction: column;
  `}
`;

const MenuList = styled.ul`
  height: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;
