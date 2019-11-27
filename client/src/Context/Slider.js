import React from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import Routes from "../Routes";

export const SliderContext = createContext();

const SliderContextProvider = props => {
  const myRoute = useLocation();
  const SliderArray = [
    `${Routes.frontPage}`,
    `${Routes.menu}`,
    `${Routes.whatwedo}`,
    `${Routes.gallery}`
  ];
  const [Position, setPosition] = React.useState(SliderArray.indexOf(myRoute.pathname));
  const [URL, setURL] = React.useState(SliderArray[Position]);
  const [Direction, setDirection] = React.useState();

  React.useEffect(() => {
    if (Position > 3) {
      setPosition(0);
    }
    if (Position < 0) {
      setPosition(3);
    }
    console.log(Position);
    setURL(SliderArray[Position]);
  }, [Position]);
  return (
    <SliderContext.Provider value={{ Position, setPosition, URL, setURL, setDirection, Direction }}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;
