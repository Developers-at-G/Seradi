import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@splidejs/react-splide/css';

// Import styles and data from separate files
import * as S from './styles/ApartmentGallery.styles';
import { apartments, ApartmentData } from './data/apartments.data';

const ApartmentGallery = () => {
  const [selectedApartment, setSelectedApartment] = useState<ApartmentData | null>(null);
  const [showPlan, setShowPlan] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (selectedApartment) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Adjust if needed based on scrollbar width
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedApartment]);

  const handleApartmentSelect = (apartment: ApartmentData) => {
    setSelectedApartment(apartment);
    setShowPlan(false);
    setCurrentImage(apartment.images.interior[0]); // Set initial image
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedApartment(null);
      setShowPlan(false); // Reset plan view on close
      setIsClosing(false);
    }, 600); // Match the animation duration (0.6s)
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleNextImage = () => {
    if (selectedApartment) {
      const currentImages = showPlan ? selectedApartment.images.plan : selectedApartment.images.interior;
      const currentIndex = currentImages.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % currentImages.length;
      setCurrentImage(currentImages[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedApartment) {
      const currentImages = showPlan ? selectedApartment.images.plan : selectedApartment.images.interior;
      const currentIndex = currentImages.indexOf(currentImage);
      const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      setCurrentImage(currentImages[prevIndex]);
    }
  };

  const handleViewToggle = () => {
    if (selectedApartment) {
      const nextShowPlan = !showPlan;
      setShowPlan(nextShowPlan);
      setCurrentImage(nextShowPlan ? selectedApartment.images.plan[0] : selectedApartment.images.interior[0]);
    }
  };

  const handleThumbnailClick = (img: string) => {
    setCurrentImage(img);
    setShowPlan(false); // Ensure we are viewing interior images
  };

  const handlePlanImageClick = (img: string) => {
    setCurrentImage(img);
    setShowPlan(true); // Ensure we are viewing plan images
  };

  const getNextApartment = (currentId: number | undefined) => {
    if (currentId === undefined) return apartments[0]; // Default case
    const currentIndex = apartments.findIndex(apt => apt.id === currentId);
    const nextIndex = (currentIndex + 1) % apartments.length;
    return apartments[nextIndex];
  };

  const getPrevApartment = (currentId: number | undefined) => {
    if (currentId === undefined) return apartments[apartments.length - 1]; // Default case
    const currentIndex = apartments.findIndex(apt => apt.id === currentId);
    const prevIndex = (currentIndex - 1 + apartments.length) % apartments.length;
    return apartments[prevIndex];
  };

  // Pre-calculate prev/next apartments to avoid recalculating in render
  const prevApartment = getPrevApartment(selectedApartment?.id);
  const nextApartment = getNextApartment(selectedApartment?.id);

  return (
    <S.Container id='appartements'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       
        <S.Grid>
          {apartments.map((apartment) => (
            <S.ApartmentCard
              key={apartment.id}
              onClick={() => handleApartmentSelect(apartment)}
            >
              <S.MainImage src={apartment.images.interior[0]} alt={apartment.type} />
              <S.CardOverlay>
                <S.ApartmentType>{apartment.type}</S.ApartmentType>
                <S.QuickInfo>
                  <span>{apartment.details.size}</span>
                  <span>{apartment.details.bedrooms} Chambres</span>
                </S.QuickInfo>
              </S.CardOverlay>
            </S.ApartmentCard>
          ))}
        </S.Grid>

        <AnimatePresence>
          {selectedApartment && (
            <>
              <S.Overlay
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }} // Match modal duration
                onClick={handleOutsideClick}
              />
              <S.Modal
                key="modal"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.6
                }}
              >
                <S.ModalContent>
                  <S.ModalHeader>
                    <div>
                      <h3>{selectedApartment.type}</h3>
                      <S.DetailsList>
                        <S.Detail>Superficie: {selectedApartment.details.size}</S.Detail>
                        <S.Detail>Chambres: {selectedApartment.details.bedrooms}</S.Detail>
                        <S.Detail>Salles de bain: {selectedApartment.details.bathrooms}</S.Detail>
                      </S.DetailsList>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <S.ViewButton onClick={handleViewToggle}>
                        {showPlan ? 'Voir l\'intérieur' : 'Voir le plan'}
                      </S.ViewButton>
                      <S.CloseButton onClick={handleClose}>×</S.CloseButton>
                    </div>
                  </S.ModalHeader>
                  <S.ModalGallery>
                    <S.GalleryContent>
                      <S.MainView>
                        <S.NavigationButton position="left" onClick={handlePrevImage}>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </S.NavigationButton>
                        <S.GalleryMainImage
                          key={currentImage} // Add key for transitions
                          src={currentImage}
                          alt="Apartment view"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <S.NavigationButton position="right" onClick={handleNextImage}>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </S.NavigationButton>
                      </S.MainView>

                      <S.SidePanel>
                        <S.PlanView onClick={() => handlePlanImageClick(selectedApartment.images.plan[0])}>
                          <S.PlanImage
                            src={selectedApartment.images.plan[0]}
                            alt="Floor plan preview"
                          />
                        </S.PlanView>
                        <S.ThumbnailGrid>
                          {selectedApartment.images.interior.map((img, index) => (
                            <S.Thumbnail
                              key={index}
                              src={img}
                              active={currentImage === img && !showPlan} // Active only if interior view
                              onClick={() => handleThumbnailClick(img)}
                            />
                          ))}
                        </S.ThumbnailGrid>
                      </S.SidePanel>
                    </S.GalleryContent>
                  </S.ModalGallery>
                  <S.ApartmentNavigation>
                    <S.NavButton onClick={() => handleApartmentSelect(prevApartment)} disabled={apartments.length <= 1}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span>{prevApartment.type}</span>
                    </S.NavButton>

                    <S.ApartmentIndicator>
                      {apartments.map((apt) => (
                        <S.Dot
                          key={apt.id}
                          active={selectedApartment?.id === apt.id}
                          onClick={() => handleApartmentSelect(apt)}
                        />
                      ))}
                    </S.ApartmentIndicator>

                    <S.NavButton onClick={() => handleApartmentSelect(nextApartment)} disabled={apartments.length <= 1}>
                      <span>{nextApartment.type}</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </S.NavButton>
                  </S.ApartmentNavigation>
                </S.ModalContent>
              </S.Modal>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </S.Container>
  );
};

export default ApartmentGallery;
