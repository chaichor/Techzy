import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const FavoritesEmpty = () => {
 return (
<div className="flex flex-col items-center justify-center h-screen bg-[#100537] text-white">

<div className="relative mb-6">
<img
         src="/favoritos.png"
         alt="Pixel Heart"
         className="mx-auto"
       />
</div>

<p className="text-purple-500 text-lg mb-8">
       Aún no tienes nada en tus favoritos
</p>

<Link to="/categorias">
<button className="px-6 py-2 rounded-full hover:bg-gray-200 transitionmax-w-none md:w-[500px] text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#241362]">
                            Continuar comprando
</button>
</Link>
</div>
 );  
};
export default FavoritesEmpty;