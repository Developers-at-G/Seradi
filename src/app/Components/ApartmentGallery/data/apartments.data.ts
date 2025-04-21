export interface ApartmentData {
  id: number;
  type: string;
  images: {
    interior: string[];
    plan: string[];
  };
  details: {
    size: string;
    bedrooms: number;
    bathrooms: number;
  };
}

export const apartments: ApartmentData[] = [
  {
    id: 1,
    type: 'Appartement Rahma',
    images: {
      interior: ['/Images/chambre-rahma.jpeg', '/Images/cuisine-rahma.jpeg', '/Images/salon-rahma.jpeg'],
      plan: ['/Images/20.jpg', '/Images/21.png'],
    },
    details: {
      size: '181.40m²',
      bedrooms: 3,
      bathrooms: 3,
    },
  },
  {
    id: 2,
    type: 'Appartement Seyba',
    images: {
      interior: ['/Images/salon-seyba.jpeg', '/Images/cuisine-seyba.jpeg', 'Images/18.jpg'],
      plan: ['/Images/25.jpg', 'Images/16.png'],
    },
    details: {
      size: '183.45m²',
      bedrooms: 3,
      bathrooms: 3,
    },
  },
  {
    id: 3,
    type: 'Appartement Kabad',
    images: {
      interior: ['/Images/salon-kabad.jpeg', '/Images/29.jpg'],
      plan: ['/Images/31.jpg', '/Images/33.png'],
    },
    details: {
      size: '160.97m²',
      bedrooms: 2,
      bathrooms: 2,
    },
  },
  {
    id: 4,
    type: 'Appartement Juban',
    images: {
      interior: ['/Images/35.jpg', '/Images/salon-juban.jpeg'],
      plan: ['/Images/36.jpg', '/Images/27.png'],
    },
    details: {
      size: '131.25m²',
      bedrooms: 2,
      bathrooms: 2,
    },
  },
]; 