import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #111827;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ffffff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vh;
  background: #111827;
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  touch-action: pan-y;

  @media (max-width: 768px) {
    height: 85vh;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #111827;
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #aaa; // Adjusted color for better visibility
  font-size: 2rem; // Slightly larger
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  line-height: 1; // Ensure consistent alignment

  &:hover {
    color: #FF8A3D;
    transform: scale(1.1);
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); // Slightly darker overlay
  z-index: 999;
  touch-action: none;
`;

export const ModalGallery = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #111827; // Match modal background
`;

export const GalleryContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
  height: calc(100% - 150px); // Recheck if this calculation is still optimal
  background: #111827;
  padding-bottom: 70px; // Space for navigation

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem;
    padding-bottom: 80px;
    overflow-y: auto; // Allow vertical scroll on mobile if needed
  }
`;

export const MainView = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 35vh; // Slightly more height on mobile
    flex: 1;
  }
`;

export const GalleryMainImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const SidePanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: transparent;
  border-radius: 12px;
  padding: 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0.5rem;
    gap: 0.5rem;
    align-items: stretch;
    max-height: 150px;
  }
`;

export const PlanView = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
  min-height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: #FF8A3D;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    min-height: 100px;
    flex-basis: 40%;
  }
`;

export const PlanImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05); // Subtle background
  border-radius: 8px;
  max-height: 150px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FF8A3D;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-height: 100%;
    flex: 1;
  }
`;

export const Thumbnail = styled.img<{ active: boolean }>`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.active ? 1 : 0.6};
  transition: all 0.3s ease;
  border: 2px solid ${props => props.active ? '#FF8A3D' : 'transparent'}; 

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

export const NavigationButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.position === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #FF8A3D;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ApartmentType = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #FF8A3D;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
`;

export const DetailsList = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Detail = styled.span`
  color: #9CA3AF;
  font-size: 1rem;
`;

export const ViewButton = styled.button`
  background: #FF8A3D;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #FF9F66;
    transform: translateY(-2px);
  }
`;

export const ModalInfo = styled.div`
  // This doesn't seem to be used currently, can be removed or implemented
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const QuickInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
`;

export const ApartmentCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }

  &:hover {
    transform: scale(1.03);
    
    ${MainImage} {
      transform: scale(1.1);
    }
  }
`;

export const ModalFooter = styled.div`
 // This doesn't seem to be used currently, can be removed or implemented
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const NavigationButtons = styled.div`
 // This doesn't seem to be used currently, can be removed or implemented
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ApartmentNavigation = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  align-items: center;
  background: rgba(17, 24, 39, 0.8); // Match modal background with transparency
  padding: 0.5rem 1rem;
  border-radius: 30px;
  backdrop-filter: blur(5px); // Slightly stronger blur
  color: white;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1); // Subtle border

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    bottom: 0.5rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px; // More rounded
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: rgba(255, 138, 61, 0.2);
  }

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;

    span {
      // Optionally hide text on very small screens if needed
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ApartmentIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#FF8A3D' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: ${props => props.active ? '#FF8A3D' : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.2);
  }
`;

export const ModalGalleryContent = styled(motion.div)`
 // This doesn't seem to be used currently, can be removed or implemented
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`; 