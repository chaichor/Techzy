import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderHome = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            // Se recorre cada imagen con la clase "img" para asegurarse de que tenga un data-origin válido.
            document.querySelectorAll(".img").forEach((img) => {
                const origin = img.getAttribute("data-origin");
                if (origin !== "left" && origin !== "right" && origin !== "center") {
                    // Para el header se asume que es "right" por defecto
                    img.setAttribute("data-origin", "right");
                }

                // Se aplica una animación desde una posición inicial en X (en función de data-origin) hasta x:0,
                // dando la sensación de que la imagen se desliza hasta su posición original.
                gsap.fromTo(img,
                    {
                        // Calcula la posición inicial:
                        x: () => {
                            const origin = img.getAttribute("data-origin");
                            if (origin === "right") return 200;  // Desplaza desde la derecha
                            if (origin === "center") return 0;
                            return -200;  // Para 'left', desplaza desde la izquierda
                        },
                        opacity: 0  // Comienza invisible
                    },
                    {
                        x: 0,       // Termina en su posición original
                        opacity: 1, // Se vuelve visible
                        duration: 0.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: img,       // Se activa al hacer scroll sobre la propia imagen
                            start: "top 50%",   // Comienza cuando la parte superior de la imagen está al 70% del viewport
                            end: "bottom top",  // Finaliza cuando la parte inferior de la imagen toca el top del viewport
                            scrub: true,        // Movimiento suave en función del scroll
                            markers: false,      // Marcadores para depuración (puedes eliminarlos cuando ya no sean necesarios)
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        };

        handleScrollAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <header className="relative bg-[#100537] text-white px-0 py-60 overflow-x-clip">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                {/* Sección Izquierda: Logo y Frase centrados */}
                <div className="flex flex-col items-center text-center px-4 z-10 row">
                    <img src="/logo_header.png" alt="Techzy Logo" className="h-60 mb-10" />
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


