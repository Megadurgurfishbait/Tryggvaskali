import React from "react";
import { createContext } from "react";

export const ShowModalContext = createContext();

const ShowModalContextProvider = props => {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);
  return (
    <ShowModalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </ShowModalContext.Provider>
  );
};

export default ShowModalContextProvider;
