import React, { useState } from 'react';

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState('');

  const colors = ['Rojo', 'Negro', 'Blanco', 'Morado', 'Verde', 'Gris', 'Customs'];

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? '' : color);
  };

  const handleShowAll = () => {
    setSelectedColor('');
    setMinPrice(0);
    setMaxPrice(200);
  };

  const handleClearFilters = () => {
    setSelectedColor('');
  };

  return (
    <div className="pr-8 mr-8 border-r-2 border-secondary">
      <div className="pb-5">
        <h2 className="text-lg text-white font-semibold pt-2 pb-2">Rango de precio</h2>
        <p className="text-sm text-gray-300 mb-2 pb-8">Busca tu teclado ideal a tu presupuesto</p>

        <input
          type="range"
          min="0"
          max="200"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full mb-2 accent-subsecondary"
        />

        <div className="flex justify-between text-sm mb-2 pt-2 text-white">
          <span>Desde</span>
          <span>Hasta</span>
        </div>

        <div className="flex justify-between mb-2 pb-3">
          <div className="border w-[100px] text-white border-subsecondary rounded-lg px-4 py-1">${minPrice}</div>
          <div className="border w-[100px] text-white border-subsecondary rounded-lg px-4 py-1">${maxPrice}</div>
        </div>

        <button className="w-full bg-subprimary hover:bg-[#5E2FD0] text-primary font-semibold py-1.5 rounded-full text-sm transition duration-350 ease-in-out">Mostrar teclados del rango de precio</button>
      </div>

      <div className="pb-5">
        <h2 className="text-lg text-white font-semibold pb-2">Filtrar por color</h2>
        <p className="text-sm text-gray-300 mb-2 pb-4">Busca tu color favorito aquí</p>
        <div className="space-y-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorClick(color)}
              className={`w-full py-1 rounded-full border text-sm font-medium transition duration-350 ease-in-out ${
                selectedColor === color
                  ? 'bg-subsecondary text-white'
                  : 'border-subsecondary text-white hover:bg-subsecondary hover:text-primary'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleShowAll}
        className="w-full mt-4 text-primary bg-subprimary hover:bg-[#5E2FD0] font-semibold py-1.5 rounded-full text-sm transition duration-350 ease-in-out"
      >
        Mostrar todos
      </button>
      <button
        onClick={handleClearFilters}
        className="w-full mt-2 border border-subsecondary text-white font-semibold py-1.5 rounded-full text-sm hover:bg-subsecondary hover:text-primary transition duration-350 ease-in-out"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default Filter;