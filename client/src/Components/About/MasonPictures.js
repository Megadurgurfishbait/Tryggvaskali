import React, { useState, useCallback, useRef, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import styled from "styled-components";

import Slide from "../../Animation/SingleSimpleSlide";
import { Colors } from "../../Assets";
import Media from "../../Assets/Varibles/media";

const MasonPictures = ({ Photos }) => {
  const ContainerRef = useRef();
  const [currentImage, setCurrentImage] = useState(null);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    Slide(ContainerRef);
  }, [Photos]);

  return (
    <PictureContainer ref={ContainerRef}>
      <Gallery
        photos={Photos}
        onClick={openLightbox}
        direction={"column"}
        margin={5}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={Photos.map(x => ({
                ...x,
                caption: x.caption ? x.caption : "Lýsing á mat?"
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </PictureContainer>
  );
};

export default MasonPictures;

const PictureContainer = styled.div`
  overflow-y: auto;
  background-color: ${Colors.DARK_GREEN};
  ${Media.desktop`
    overflow-y: scroll;
    margin-right: 0px;
  `}
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${Colors.GREEN};
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${Colors.LIGHT_BLUE};
  }
`;
