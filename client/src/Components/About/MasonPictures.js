import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import styled from "styled-components";
import { Colors} from "../../Assets";
import { Photos } from "../../Assets/Images/Gallery/Food/index";


const MasonPictures = () => {
  const [currentImage, setCurrentImage] = useState(0);
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
    <PictureContainer>
      <Gallery photos={Photos} onClick={openLightbox} direction={"column"}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={Photos.map(x => ({
                ...x
                /* caption: x.title */
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
  margin-right: 60px;
  background-color: ${Colors.LIGHT_BLUE};
  overflow: auto
`;
