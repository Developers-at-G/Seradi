import React, { useState } from 'react';
import { Splide, SplideSlide, Splide as SplideType } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { Splide as SplideInstance } from '@splidejs/splide';

interface ApartmentData {
  id: number;
  type: string;
  images: {
    interior: string[];
    plan: string;
  };
  details: {
    size: string;
    bedrooms: number;
    bathrooms: number;
  };
}

const apartments: ApartmentData[] = [
  {
    id: 1,
    type: 'Apartment Rahma',
    images: {
      interior: ['/Images/17.jpg', '/Images/18.jpg', '/Images/19.jpg'],
      plan: '/Images/20.jpg',
    },
    details: {
      size: '181.40m²',
      bedrooms: 3,
      bathrooms: 3,
    },
  },
  {
    id: 2,
    type: 'Apartment Seyba',
    images: {
      interior: ['/Images/23.jpg', '/Images/24.jpg', '/Images/25.jpg'],
      plan: '/Images/25.jpg',
    },
    details: {
      size: '183.45m²',
      bedrooms: 3,
      bathrooms: 3,
    },
  },
  {
    id: 3,
    type: 'Apartement Kabad',
    images: {
      interior: ['/Images/28.jpg', '/Images/29.jpg', '/Images/30.jpg'],
      plan: '/Images/31.jpg',
    },
    details: {
      size: '160.97m²',
      bedrooms: 2,
      bathrooms: 2,
    },
  },
  {
    id: 3,
    type: 'Apartement Dioubane',
    images: {
      interior: ['/Images/35.jpg', '/Images/36.jpg', '/Images/37.jpg'],
      plan: '/Images/36.jpg',
    },
    details: {
      size: '131.25m²',
      bedrooms: 2,
      bathrooms: 2,
    },
  },
];

const ApartmentGallery = () => {
  const [selectedApartment, setSelectedApartment] = useState<ApartmentData | null>(null);
  const [showPlan, setShowPlan] = useState<boolean>(false);

  return (
    <Container id='apartements'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Nos Appartements</Title>
        
        <Grid>
          {apartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              onClick={() => setSelectedApartment(apartment)}
            >
              <MainImage src={apartment.images.interior[0]} alt={apartment.type} />
              <CardOverlay>
                <ApartmentType>{apartment.type}</ApartmentType>
                <QuickInfo>
                  <span>{apartment.details.size}</span>
                  <span>{apartment.details.bedrooms} BR</span>
                </QuickInfo>
              </CardOverlay>
            </ApartmentCard>
          ))}
        </Grid>

        {selectedApartment && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent>
              <CloseButton onClick={() => setSelectedApartment(null)}>×</CloseButton>
              
              <ModalGallery>
                {!showPlan ? (
                  <ImageGrid>
                    {selectedApartment.images.interior.map((img, index) => (
                      <GalleryImage key={index} src={img} alt={`Interior ${index + 1}`} />
                    ))}
                  </ImageGrid>
                ) : (
                  <FloorPlan src={selectedApartment.images.plan} alt="Floor Plan" />
                )}
              </ModalGallery>

              <ModalInfo>
                <div>
                  <h3>{selectedApartment.type}</h3>
                  <DetailsList>
                    <Detail>Size: {selectedApartment.details.size}</Detail>
                    <Detail>Bedrooms: {selectedApartment.details.bedrooms}</Detail>
                    <Detail>Bathrooms: {selectedApartment.details.bathrooms}</Detail>
                  </DetailsList>
                </div>
                <ViewButton onClick={() => setShowPlan(!showPlan)}>
                  {showPlan ? 'View Interior' : 'View Floor Plan'}
                </ViewButton>
              </ModalInfo>
            </ModalContent>
          </Modal>
        )}
      </motion.div>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #111827;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ffffff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1F2937;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  border-radius: 15px;
  overflow: auto;
  position: relative;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ApartmentType = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Detail = styled.span`
  font-size: 0.9rem;
  color: #9CA3AF;
`;

const ViewButton = styled.button`
  background: #3B82F6;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2563EB;
  }
`;

const ModalInfo = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #ffffff;
  }
`;

const ModalGallery = styled.div`
  padding: 1rem;
`;

const FloorPlan = styled.img`
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
  z-index: 1;
`;

const QuickInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
`;

const ApartmentCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    
    ${MainImage} {
      transform: scale(1.1);
    }
  }
`;

export default ApartmentGallery;
