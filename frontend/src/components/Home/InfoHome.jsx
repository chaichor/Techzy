import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoHome = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            // Asegúrate de que cada .img tenga un valor válido en data-origin ("left" o "right")
            document.querySelectorAll(".img").forEach((img) => {
                const origin = img.getAttribute("data-origin");
                if (origin !== "left" && origin !== "right") {
                    img.setAttribute("data-origin", "left");
                }
            });

            // Animación de la imagen con ScrollTrigger
            gsap.fromTo(".img", {
                x: 200,          // Comienza desde la derecha (fuera de la vista)
                opacity: 0,      // Comienza invisible
            }, {
                x: 0,            // Se mueve a la posición original
                opacity: 1,      // Se hace visible
                duration: 1.5,    // Duración de la animación
                ease: "power2.out", // Suavizado en la animación
                scrollTrigger: {
                    trigger: ".row",   // Dispara cuando la fila entre en el viewport
                    start: "top bottom", // Comienza cuando la parte superior de la fila toca el fondo de la pantalla
                    end: "bottom top",   // Termina cuando el fondo de la fila toca la parte superior
                    scrub: true,         // Suaviza la animación según el desplazamiento del scroll
                }
            });
        };

        handleScrollAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="bg-[#100537] py-16 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full row"> {/* Añadí la clase row para ScrollTrigger */}
                {/* Sección Izquierda: Imagen que se desliza desde la derecha */}
                <div className="relative w-full h-full">
                    <img
                        src="/info-home-image.png" // Cambia la ruta de la imagen según sea necesario
                        alt="Teclados Mecánicos"
                        className="w-full max-w-none md:w-[1000px] h-auto object-contain img"
                        data-origin="right" // Añadí data-origin
                    />
                </div>

                {/* Sección Derecha: Título y texto */}
                <div className="flex flex-col items-center text-center px-4 z-10">
                    <h2 className="text-[#8252F7] text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                        Keycaps para <br />todos los gustos
                    </h2>
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-light">
                        La mejor calidad en Keycaps para que puedas <br />
                        customizar tu teclado a tu gusto,<br /> con tus colores favoritos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfoHome;
