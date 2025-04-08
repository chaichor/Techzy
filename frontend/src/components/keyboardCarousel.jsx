import React, { useState, useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductCarousel.css';

const products = [
  { imageSrc: '/p1.png', productName: "EPOMAKER x AULA F75", price: 75, isFavorite: false },
  { imageSrc: '/gx87_p.png', productName: "MCHOSE GX87", price: 99.99, isFavorite: true },
  { imageSrc: '/mchoseace68_p.png', productName: "MCHOSE ACE68", price: 85.99, isFavorite: false},
  { imageSrc: '/p1.png', productName: "EPOMAKER x AULA F75", price: 75, isFavorite: false },
  { imageSrc: '/gx87_p.png', productName: "MCHOSE GX87", price: 99.99, isFavorite: true },
  { imageSrc: '/mchoseace68_p.png', productName: "MCHOSE ACE68", price: 85.99, isFavorite: false},
];

const duplicatedProducts = [...products, ...products];

const KeyboardCarousel = () => {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Multiplicador para aumentar la velocidad del scroll
  const scrollSpeed = 4;

  const handleWheel = (e) => {
    if (isHovered && e.deltaY !== 0) {
      targetRef.current.scrollLeft += e.deltaY * scrollSpeed;
      e.preventDefault();
    }
  };

  // Bloquea el scroll global cuando el mouse está sobre el carrusel
  useEffect(() => {
    const handleWheelGlobal = (e) => {
      if (targetRef.current && targetRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheelGlobal, { passive: false });
    return () => window.removeEventListener('wheel', handleWheelGlobal);
  }, []);

  return (
    <div
      className="carousel-container relative w-full h-[480px] p-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      ref={targetRef}
    >
      <div className="carousel-track flex space-x-12 px-4 py-8">
        <div className="flex gap-12 justify-center">
          {duplicatedProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  

export default KeyboardCarousel;