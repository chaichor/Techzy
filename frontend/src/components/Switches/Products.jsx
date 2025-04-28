import React from 'react';
import ProductCard from '../ProductCard';

const products = [
    { imageSrc: '/switch_p.png', productName: "Phoenix Switch", price: 24.99, isFavorite: false },
    { imageSrc: '/switch_p.png', productName: "Phoenix Switch", price: 24.99, isFavorite: false },  
  ];

const ProductsAll = () => {
    return (
        <div className="w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    );
};

export default ProductsAll;