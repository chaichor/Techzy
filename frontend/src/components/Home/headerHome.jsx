import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderHome = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            // Asegúrate de que cada .img tenga un valor válido en data-origin ("left" o "right")
            document.querySelectorAll(".img").forEach((img) => {
                const origin = img.getAttribute("data-origin");
                if (origin !== "left" && origin !== "right") {
                    img.setAttribute("data-origin", "left");
                }
            });

            // Estado de inicio: todas las imágenes inician con escala 0
            gsap.set(".img", { scale: 0, transformOrigin: "center center" });

            // Para cada fila crea un timeline que controla la entrada y salida
            document.querySelectorAll(".row").forEach((row) => {
                const imgs = row.querySelectorAll(".img");

                // Crea un timeline con ScrollTrigger para esta fila.
                gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top bottom", // Cuando el top de la fila alcanza el fondo del viewport
                        end: "bottom top",   // Cuando el bottom de la fila alcanza el top del viewport
                        scrub: true,
                    }
                })
                // Fase 1: de escala 0 a 1 en la primera mitad del scroll
                .to(imgs, { scale: 1, ease: "power1.out" }, 0)
                // Fase 2: de escala 1 a 0 en la segunda mitad del scroll
                .to(imgs, { scale: 0, ease: "power1.in" }, 0.5);
            });
        };

        handleScrollAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <header className="relative bg-[#100537] text-white px-0 py-8 overflow-x-clip">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                {/* Sección Izquierda: Logo y Frase centrados */}
                <div className="flex flex-col items-center text-center px-4 z-10 row">
                    <img src="/logo_header.png" alt="Techzy Logo" className="h-60 mb-10 img" data-origin="left" />
                    <p className="text-lg md:text-xl lg:text-5xl font-light">
                        “Para teclas, calidad y <br />precisión en cada pulsación”
                    </p>

                    {/* Botón centrado debajo del texto */}
                    <button className="mt-6 px-8 py-3 bg-[#100537] text-white font-semibold border-2 border-[#241362] rounded-lg 
                    shadow-xl hover:bg-[#241362] hover:text-white transition-all duration-300 
                    hover:shadow-[0px_4px_20px_#241362]">
                        Descubre Más
                    </button>
                </div>

                {/* Sección Derecha: Imagen al 100% del lado derecho */}
                <div className="relative w-full h-full row">
                    <img
                        src="/header-image.png"
                        alt="Teclados Mecánicos"
                        className="md:absolute right-0 md:top-1/2 md:-translate-y-1/2 w-full max-w-none md:w-[1000px] h-auto object-contain img"
                        data-origin="right"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;



