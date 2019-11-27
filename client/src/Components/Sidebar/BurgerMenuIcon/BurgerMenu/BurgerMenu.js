import React from "react";

// Assets
import { Colors, sizes } from "@Assets/";
import { useWD } from "@Hooks/";

// Components
import BlueScreen from "./BlueScreen/";
import MobileFooter from "./MobileFooter/";
import MenuList from "./MenuList/";
import MobileHeader from "./MobileHeader/";
import { SplitScreen } from "@Components/Reusables";

import { BurgerContainer } from "./BurgerMenu.styled";

const BugerMenu = ({ show, setShow }) => {
  let { width } = useWD();

  return (
    <BurgerContainer ShowMenu={show} myWidth={width}>
      {width < sizes.desktop && <MobileHeader />}

      <SplitScreen compWidth={width > sizes.desktop ? 55 : 100} compBg={Colors.LIGHT_GREEN}>
        <MenuList show={show} setShow={setShow} />
      </SplitScreen>

      {width > sizes.desktop ? (
        <SplitScreen compWidth={45} compBg={Colors.GREEN}>
          <BlueScreen />
        </SplitScreen>
      ) : (
        <MobileFooter />
      )}
    </BurgerContainer>
  );
};

export default React.memo(BugerMenu);
