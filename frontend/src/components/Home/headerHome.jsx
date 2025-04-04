import React from 'react';
import { motion } from 'framer-motion';

const MotionImg = motion.img;

const HeaderHome = () => {
    return (
        <header className="relative bg-[#100537] text-white px-0 py-8 overflow-x-clip">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                {/* Sección Izquierda: Logo y Frase centrados */}
                <div className="flex flex-col items-center text-center px-4 z-10">
                    <img src="/logo_header.png" alt="Techzy Logo" className="h-60 mb-10" />
                    <p className="text-lg md:text-xl lg:text-2xl font-light">
                        “Para teclas, calidad y <br />precisión en cada pulsación”
                    </p>
                </div>

                {/* Sección Derecha: Imagen al 100% del lado derecho */}
                <div className="relative w-full h-full">
                    <MotionImg
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        src="/header-image.png"
                        alt="Teclados Mecánicos"
                        className="md:absolute right-0 md:top-1/2 md:-translate-y-1/2 w-full max-w-none md:w-[1000px] h-auto object-contain"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;

