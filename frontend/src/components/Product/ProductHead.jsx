import React from 'react';
import ImagesCarousel from './CarouselProductHead';

const ProductHead = () => {
    return (
        <>
            <div className="col-span-3 pt-10 bg-primary flex items-start justify-center">
                <ImagesCarousel />
            </div>

            <div className="col-span-3 bg-primary flex items-start justify-center">
                <div className="text-white space-y-1 pt-30">
                    <p className="uppercase text-base tracking-widest text-subsecondary">
                        Teclado Mecánico | Gamakey
                    </p>
                    <h1 className="text-5xl font-semibold text-subprimary">
                        Gamakay <span className="tracking-widest">TK75HE V2</span>
                    </h1>
                    <p className="text-subsecondary text-xl mt-1">$89.99</p>

                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <p class="text-sm font-mediumtext-white">73 reviews</p>
                    </div>

                    <p className="text-subsecondary text-xl mt-1">Colores:</p>

                    <button type="submit" className="max-w-none w-full mt-6 px-3 py-2 bg-primary text-subsecondary font-semibold border-0 border-b-3 border-subsecondary rounded-full
                        shadow-xl hover:bg-subsecondary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#41D7FC]">Agregar al carrito</button>

                    <button type="submit" className="max-w-none w-full mt-6 px-3 py-2 bg-white text-subprimary font-semibold border-0 border-b-3 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">Comprar ya</button>
                </div>
            </div>
        </>
    );
};

export default ProductHead;
