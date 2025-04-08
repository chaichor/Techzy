import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoHome = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            document.querySelectorAll(".info-img").forEach((img) => {
                const origin = img.getAttribute("data-origin");
                if (origin !== "left" && origin !== "right" && origin !== "center") {
                    img.setAttribute("data-origin", "left");
                }

                gsap.fromTo(img, {
                    x: () => {
                        const origin = img.getAttribute("data-origin");
                        if (origin === "left") return 200;
                        if (origin === "center") return 0;
                        return -200;
                    },
                    opacity: 1,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 60%",
                        end: "bottom top",
                        scrub: true,
                        markers: false,
                        toggleActions: "play none none none",
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
                <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full row">
                    <div className="relative w-full h-full">
                        <img
                            src="/info-home-image.png"
                            alt="Teclados Mecánicos"
                            className="w-full max-w-none md:w-[1000px] h-auto object-contain info-img"
                            data-origin="right"
                        />
                    </div>

                    <div className="flex flex-col items-center text-center px-4 z-10">
                        <h2 className="text-[#8252F7] text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                            Keycaps para <br />todos los gustos
                        </h2>
                        <p className="text-white text-2xl lg:text-5xl font-light">
                            La mejor calidad en Keycaps <br /> para que puedas <br />
                            customizar tu teclado a tu gusto,<br /> con tus colores favoritos.
                        </p>
                    </div>
                </div>      
            </section>

            <div className="flex flex-col items-center text-center px-10 z-10">
                <h2 className="text-[#8252F7] text-2xl lg:text-5xl font-semibold mb-4">
                    AMPLIA SELECCIÓN DE TECLADOS DE ALTA GAMA
                </h2>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="relative w-full h-full flex justify-center items-center">
                <img
                    src="/info-home-one.png"
                    alt="Teclados Mecánicos"
                    className="w-full max-w-none md:w-[1000px] h-auto object-contain info-img"
                    data-origin="center"
                />
            </div>

            {/* Bloque nuevo de texto centrado */}
            <section className="bg-[#100537] text-center py-20 px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#8252F7]">"CONFIA EN TECHZY PARA TU FUTURO TECLADO"</h1>
                <p className="text-white text-2xl lg:text-5xl font-light">
                    COLORES Y DISEÑOS <br />
                    PARA TODOS LOS GUSTOS Y COLORES
                </p>
            </section>
            <br /><br /><br /><br /><br /><br />
            {/* Imagen izquierda / texto derecha */}
            <section className="bg-[#100537] py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="row">
                        <img
                            src="/info-home-two.png"
                            alt="Producto Izquierda"
                            className="w-full max-w-none md:w-[800px] h-auto object-contain info-img"
                            data-origin="left"
                        />
                    </div>      
                    <div className="text-white text-center md:text-left px-0">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-[#8252F7]">"LO MEJOR DE LO MEJOR"</h2>
                        <p className="text-lg md:text-3xl font-light">
                            Sabemos que eres un cliente exigente, <br />entonces ofrecemos solo lo mejor de las mejores marcas <br />para darle ese toque que le falta a tu setup.
                        </p>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br />
            {/* Imagen derecha / texto izquierda */}
            <section className="bg-[#100537] py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className="text-white text-center md:text-right px-4 order-2 md:order-1">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-[#8252F7]">"EXPERIENCIAS ÚNICAS"</h2>
                        <p className="text-lg md:text-3xl font-light">
                        Seguramente buscas cosas especificas de un estilo pero con Techzy, <br />encontraras el que mas te guste entre mas de 50 productos.
                        </p>
                    </div>
                    <div className="row order-1 md:order-2">
                        <img
                            src="/info-home-three.png"
                            alt="Producto Derecha"
                            className="w-full max-w-none md:w-[800px] h-auto object-contain info-img"
                            data-origin="right"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfoHome;

