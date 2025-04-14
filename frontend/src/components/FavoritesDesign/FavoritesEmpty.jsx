import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const FavoritesEmpty = () => {
       return (
         <div className="flex flex-col min-h-screen bg-[#100537] text-white">

           <main className="flex flex-col items-center justify-center flex-grow">
             <div className="relative mb-6">
               <img
                 src="/favoritos.png"
                 alt="Pixel Heart"
                 className="mx-auto w-256"
               />
             </div>
     
             <p className="text-purple-500 text-lg mb-8">
               Aún no tienes nada en tus favoritos
             </p>
     
             <Link to="/categorias">
               <button className="px-8 py-3 bg-[#100537] text-white font-semibold border-2 border-[#241362] rounded-lg shadow-xl hover:bg-[#241362] hover:text-white transition-all duration-300 hover:shadow-[0px_4px_20px_#241362]">
                 Continuar comprando
               </button>
             </Link>
           </main>
     
         </div>
       );
     };
     
     export default FavoritesEmpty;