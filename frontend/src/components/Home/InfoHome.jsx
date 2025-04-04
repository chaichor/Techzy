import React from 'react';
import { motion } from 'framer-motion';

const MotionImg = motion.img;

const InfoHome = () => {
    return (
        <section className="bg-[#100537] py-16 mt-8"> {/* Añadí mt-8 para separar de HeaderHome */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                {/* Sección Izquierda: Imagen que se desliza desde la derecha */}
                <div className="relative w-full h-full">
                    <MotionImg
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        src="/info-home-image.png" // Cambia la ruta de la imagen según sea necesario
                        alt="Teclados Mecánicos"
                        className="md:absolute left-0 md:top-1/2 md:-translate-y-1/2 w-full max-w-none md:w-[700px] h-auto object-contain"
                    />
                </div>

                {/* Sección Derecha: Título y texto */}
                <div className="flex flex-col items-center text-center px-4 z-10">
                    <h2 className="text-[#8252F7] text-2xl md:text-3xl font-semibold mb-4">
                    Keycaps para todos los gustos
                    </h2>
                    <p className="text-white text-lg md:text-xl font-light">
  La mejor calidad en Keycaps para que puedas <br />
  customizar tu teclado a tu gusto, con tus colores favoritos.
</p>
                </div>
            </div>
        </section>
    );
};

export default InfoHome;
