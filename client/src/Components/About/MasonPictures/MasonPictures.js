import React, { useState, useCallback, useRef, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

// Assets
import { PictureContainer } from "./MasonPictures.styled";
import Slide from "Animate/SingleSimpleSlide";

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
      <Gallery photos={Photos} onClick={openLightbox} direction={"column"} margin={5} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={Photos.map(x => ({
                ...x,
                caption: x.caption ? x.caption : "Lýsing á mat?"
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </PictureContainer>
  );
};

export default MasonPictures;
