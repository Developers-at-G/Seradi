import React from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const ImageSlider = () => {
  const images1 = [
    '/Images/KitchenJuban.jpg',
    '/Images/RoomJuban.jpg',
    '/Images/LivingRoomJuban.jpg',
  ];

  const images2 = [
    '/Images/LivingRoomJuban.jpg',
    '/Images/RoomJuban.jpg',
    '/Images/KitchenJuban.jpg',
  ];

  

  return (
    <>
    <Splide options={{
        type: 'loop',
        gap: '10px',
        drag: 'free',
        arrows: false,
        pagination: false,
        perPage: 4,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: 1,
        }
      }}
      extensions={{ AutoScroll }}
      >
        {images1.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`}/>
          </SplideSlide>
        ))}
    </Splide>
      <div style={{ height: '20px' }}></div>
    <Splide options={{
        type: 'loop',
        gap: '20px',
        drag: 'free',
        arrows: false,
        pagination: true,
        perPage: 4,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: -1,
        }
      }}
      extensions={{ AutoScroll }}
      >
        {images2.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`}/>
          </SplideSlide>
        ))}
    </Splide>
    </>
    
      
  );
};

export default ImageSlider;
