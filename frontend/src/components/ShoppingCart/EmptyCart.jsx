import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#100537] text-white">

            <div className="relative mb-6">
                <img
                    src="/carritoCompras.png"
                    alt="Pixel Cart"
                    className="mx-auto"
                />
            </div>

            <p className="text-purple-500 text-lg mb-8 pt-10">
                Aún no tienes nada en tus favoritos
            </p>

            <Link to="/cartfull">
                <button className=" px-8 py-3 bg-[#100537] text-white font-semibold border-2 border-[#241362] rounded-lg
                    shadow-xl hover:bg-[#241362] hover:text-white transition-all duration-300
                    hover:shadow-[0px_4px_20px_#241362]">
                    Comienza a comprar
                </button>
            </Link>
        </div>
    );
};
export default EmptyCart;