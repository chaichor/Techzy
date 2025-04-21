import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-[#100537] py-20 px-4 space-y-32 relative overflow-hidden">
            {/* Imagen decorativa superior derecha */}
            <img
                src="/prrrrr.png"
                alt="Decoración teclado"
                className="absolute top-0 right-0 w-[250px] md:w-[400px] opacity-90 pointer-events-none"
            />

            {/* ¿Qué es Techzy? */}
            <div className="flex flex-col items-center gap-6 z-10">
                <div className="flex items-center gap-1">
                    <img src="/icon_qet.png" alt="Icono" className="w-40 h-40" />
                    <div className="bg-[#28195e] px-6 py-3 rounded-xl">
                        <h2 className="text-white text-xl md:text-3xl font-bold">
                            ¿Qué es <span className="text-[#b084f7] italic">Techzy</span>?
                        </h2>
                    </div>
                </div>
                <div className="bg-[#28195e] text-[#b084f7] text-center p-6 md:max-w-2xl rounded-xl font-medium tracking-wide leading-relaxed">
                    Techzy es una tienda especializada en teclados personalizados, donde los usuarios pueden crear teclados a medida, eligiendo desde las teclas hasta los interruptores, para adaptarlos a sus necesidades y estilo personal.
                </div>
            </div>

            {/* Nuestra Misión */}
            <div className="flex flex-col items-center gap-6 z-10">
                <div className="flex items-center gap-4">
                    <div className="bg-[#28195e] px-6 py-3 rounded-xl">
                        <h2 className="text-white text-xl md:text-3xl font-bold">
                            Nuestra Misión
                        </h2>
                    </div>
                    <img src="/icon_nm.png" alt="Switch" className="w-16 h-16" />
                </div>
                <div className="bg-[#28195e] text-[#b084f7] text-center p-6 md:max-w-2xl rounded-xl font-medium tracking-wide leading-relaxed">
                    Ofrecer una solución rápida, fácil y accesible brindando un excelente servicio a nuestros clientes y con una amplia variedad en los precios para que los usuarios puedan personalizar más sus lugares de recreación o trabajo y brindar una buena seguridad en su compra en línea respaldada por las tecnologías actuales.
                </div>
            </div>

            {/* Nuestra Visión */}
            <div className="flex flex-col items-center gap-1 z-10">
                <div className="flex items-center gap-1">
                    <img src="/icon_nv.png" alt="Icono Visión" className="w-50 h-50" />
                    <div className="bg-[#28195e] px-6 py-3 rounded-xl">
                        <h2 className="text-white text-xl md:text-3xl font-bold">
                            Nuestra Visión
                        </h2>
                    </div>
                </div>
                <div className="bg-[#28195e] text-[#b084f7] text-center p-6 md:max-w-2xl rounded-xl font-medium tracking-wide leading-relaxed">
                    Ser la tienda líder y dominar en el mercado de teclados nacionalmente manteniendo nuestros valores, la variedad de precios y nuestro servicio personalizado con excelente seguridad.
                </div>
            </div>

            {/* Imagen decorativa inferior izquierda */}
            <img
                src="/prrrr2.png"
                alt="Decoración teclado inferior"
                className="absolute bottom-0 left-0 w-[250px] md:w-[400px] opacity-90 pointer-events-none"
            />
        </section>
    );
};

export default AboutUs;


