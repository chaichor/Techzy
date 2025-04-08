import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({
  imageSrc = '/placeholder.png',
  productName = 'Producto Genérico',
  price = 0,
  isFavorite = false,
  onToggleFavorite = () => {},
  onAddToCart = () => {}
}) => {
  return (
    <div
      className="
        relative
        bg-[#241362] 
        text-white
        w-72
        h-[420px]              /* Altura aumentada */
        rounded-2xl 
        p-4
        flex 
        flex-col
        justify-start
        group 
        transition-all 
        duration-300
        hover:scale-[1.02]
      "
    >
      {/* Borde resplandor al hacer hover */}
      <div
        className="
          absolute inset-0 
          rounded-2xl 
          z-[-1] 
          transition 
          duration-500 
          opacity-0 
          group-hover:opacity-100 
          group-hover:shadow-[0_0_20px_5px_rgba(65,215,252,0.4)]
        "
        style={{ boxShadow: '0 0 20px 3px rgba(65, 215, 252, 0.4)' }}
      ></div>

      {/* Imagen */}
      <div className="flex justify-center mb-4 bg-white rounded-xl overflow-hidden h-56"> {/* Imagen más alta */}
        <img
          src={imageSrc}
          alt={productName}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Nombre + Favorito */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold transition group-hover:text-[#41D7FC]">
          {productName}
        </h3>
        <button
          onClick={onToggleFavorite}
          className="transition group-hover:text-[#41D7FC]"
        >
          {isFavorite ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
        </button>
      </div>

      {/* Precio + Agregar al carrito */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold transition group-hover:text-[#41D7FC]">
          ${price}
        </span>
        <button
          onClick={onAddToCart}
          className="
            bg-[#100537] 
            text-white 
            px-3 py-1
            rounded-lg 
            flex 
            items-center 
            space-x-2
            transition-all 
            duration-300
            hover:bg-[#100537]
            hover:text-[#41D7FC]
            focus:outline-none
          "
        >
          <span>Agregar al carrito</span>
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


