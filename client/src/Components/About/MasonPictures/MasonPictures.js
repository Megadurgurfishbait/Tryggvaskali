import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

// Assets
import { PictureContainer } from "./MasonPictures.styled";

const MasonPictures = React.forwardRef(({ Photos }, ref) => {
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

  return (
    <PictureContainer ref={ref}>
      <Gallery photos={Photos} onClick={openLightbox} direction={"column"} margin={5} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={Photos.map(x => ({
                ...x
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </PictureContainer>
  );
});

export default MasonPictures;
