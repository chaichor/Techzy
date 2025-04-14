import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/switch_p.png',
  '/mercurio_p.png',
  '/mchoseace68_p.png',
  '/gx87_p.png',
];

const ImagesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
  
    const handleChange = (newIndex) => {
      setTransitioning(true); 
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setTransitioning(false); 
      }, 300); 
    };
  
    const prevImage = () => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      handleChange(newIndex);
    };
  
    const nextImage = () => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      handleChange(newIndex);
    };
  
    return (
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-primary p-6 rounded-xl relative">

        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-secondary transition duration-350 ease-in-out p-2 rounded-full z-10"
        >
          <ChevronLeft className="text-subsecondary" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-secondary transition duration-350 ease-in-out p-2 rounded-full z-10"
        >
          <ChevronRight className="text-subsecondary" />
        </button>
  

        <div className="w-[500px] h-[500px] flex items-center justify-center bg-white rounded-md overflow-hidden">
          <img
            key={currentIndex} 
            src={images[currentIndex]}
            alt="Product"
            className={`max-h-[260px] object-contain transition-all duration-500 ease-in-out transform ${
              transitioning ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100'
            }`}
          />
        </div>
  

        <div className="flex mt-6 gap-3 overflow-x-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index}`}
              className={`h-16 cursor-pointer rounded-md border-2 transition-all duration-300 ${
                index === currentIndex ? 'border-subprimary' : 'border-transparent'
              }`}
              onClick={() => handleChange(index)}
            />
          ))}
        </div>
      </div>
    );
  };

export default ImagesCarousel;