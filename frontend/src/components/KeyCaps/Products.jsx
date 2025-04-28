import React from 'react';
import ProductCard from '../ProductCard';

const products = [
    { imageSrc: '/byakko_p.png', productName: "BYAKKO Keycaps", price: 34.99, isFavorite: true },
    { imageSrc: '/byakko_p.png', productName: "BYAKKO Keycaps", price: 34.99, isFavorite: true },
    { imageSrc: '/byakko_p.png', productName: "BYAKKO Keycaps", price: 34.99, isFavorite: true },
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