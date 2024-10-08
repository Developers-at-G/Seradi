import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import  s from'./ApartmentSlider.module.scss'
import clsx from 'clsx';

const ApartmentSlider = () => {
  const apartments = [
    { id: 1, name: 'Appartement Juban', image: '/Images/KitchenJuban.jpg' },
    { id: 2, name: 'Appartement Juban', image: 'Images/RoomJuban.jpg' },
    { id: 3, name: 'Appartement Seyba', image: '/Images/LivingRoomJuban.jpg' },
  ];

  return (
    <div className={clsx(s["apartment-slider"])}>
      <h2>A Propos de nos Appartements</h2>
      <p>Découvrez nos différents type d’appartments</p>
      
      <Splide
        options={{
          type: 'loop',  
          perPage: 3,    
          arrows: true,  
          pagination: false,
          gap: '1rem', 
        }}
      >
        {apartments.map((apartment) => (
          <SplideSlide key={apartment.id}>
            <div className={clsx(s["apartment-slider__card"])}>
              <img src={apartment.image} alt={apartment.name} className={clsx(s["apartment-slider__image"])} />
              <div className={clsx(s["apartment-slider__info"])}>
                <h3>{apartment.name}</h3>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ApartmentSlider;
