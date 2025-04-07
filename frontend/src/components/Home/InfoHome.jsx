import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoHome = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            // Recorre todas las imágenes y les asigna un "data-origin" válido
            document.querySelectorAll(".info-img").forEach((img, index) => {
                const origin = img.getAttribute("data-origin");
                if (origin !== "left" && origin !== "right" && origin !== "center") {
                    img.setAttribute("data-origin", "left");
                }

                // Aplica la animación individualmente a cada imagen
                gsap.fromTo(img, {
                    x: () => {
                        // Determina la posición inicial en función del "data-origin"
                        const origin = img.getAttribute("data-origin");
                        if (origin === "right") return 200;  // Desde la derecha
                        if (origin === "center") return 0;   // Desde el centro
                        return -200;  // Desde la izquierda por defecto
                    },
                    opacity: 0,  // Empieza invisible
                }, {
                    x: 0,      // Mueve la imagen a su posición original
                    opacity: 1,  // Se hace visible
                    duration: 1.5,  // Duración de la animación
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,  // Asegúrate de que el trigger esté en la propia imagen
                        start: "top 80%",  // Empieza cuando la parte superior de la imagen esté al 80% del viewport
                        end: "bottom top",  // Termina cuando la parte inferior de la imagen toque la parte superior del viewport
                        scrub: true,       // Desplazamiento suave
                        markers: true,     // Muestra los marcadores para depuración
                        toggleActions: "play none none none",  // No retrocede cuando sale
                    }
                });
            });
        };

        handleScrollAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <section className="bg-[#100537] py-8 mt-8">
                {/* Primera fila: imagen que se desliza desde la derecha */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full row">
                    {/* Imagen */}
                    <div className="relative w-full h-full">
                        <img
                            src="/info-home-image.png"
                            alt="Teclados Mecánicos"
                            className="w-full max-w-none md:w-[1000px] h-auto object-contain info-img"
                            data-origin="right"  // Añadí data-origin
                        />
                    </div>

                    {/* Título y texto */}
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
            
            {/* Segunda fila: texto */}
            <div className="flex flex-col items-center text-center px-10 z-10">
                <h2 className="text-[#8252F7] text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                    Amplia selección de teclados de alta gama
                </h2>
            </div>

            {/* Segunda imagen: que se desliza desde el centro */}
            <div className="relative w-full h-full flex justify-center items-center">
            <img
        src="/imagen.png"  // Cambia la ruta de la imagen según sea necesario
        alt="Teclados Mecánicos"
        className="w-full max-w-none md:w-[1000px] h-auto object-contain info-img"
        data-origin="center"/>
            </div>
        </>
    );
};

export default InfoHome;

