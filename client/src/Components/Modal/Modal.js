import React, { createRef, useEffect, useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";

// Assets
import { ShowModal } from "Animate";
import { ShowModalContext } from "@Context/ShowModal";

// Components
import ButtonModal from "./ButtonModal/";

const Modal = () => {
  const modalRoot = document.getElementById("modal-root");
  const [Animation, setAnimation] = useState(null);
  let animationRef = useRef([createRef(), createRef()]);

  const { showModal } = useContext(ShowModalContext);

  useEffect(() => {
    // Init Animaiton

    if (!Animation) setAnimation(ShowModal(animationRef.current[0], animationRef.current[1]));

    // If there is no Animation
    if (Animation === null) return;

    // Show Animation && Reverse Animation
    showModal ? Animation.play() : Animation.reverse();
  }, [showModal]);

  return ReactDOM.createPortal(<ButtonModal ref={animationRef} />, modalRoot);
};

export default Modal;
