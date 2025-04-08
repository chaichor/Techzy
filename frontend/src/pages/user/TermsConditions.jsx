import React from 'react';

const TermsConditions = () => {
    return (
        <div className="w-full p-6 bg-[#100537]">
            <h1 className="text-3xl font-semibold text-center mb-6 text-white">Términos y Condiciones</h1>
            <br/>      <br/>      <br/>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#41D7FC] text-center">1. Introducción</h2>
                <p className="text-[#8252F7] text-center">
                    Bienvenido a Techzy, tu tienda en línea especializada en la venta de teclados y accesorios tecnológicos. <br/>Al acceder y
                    utilizar nuestro sitio web, aceptas cumplir con los siguientes Términos y Condiciones. <br/>Si no estás de acuerdo con alguna
                    de las disposiciones, por favor, no utilices nuestros servicios.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#41D7FC] text-center">2. Productos</h2>
                <p className="text-[#8252F7] text-center">
                    En Techzy, ofrecemos una amplia gama de teclados mecánicos, de membrana y otros tipos de teclados, así como accesorios
                    relacionados con la tecnología. <br/>Las imágenes y descripciones de los productos tienen fines ilustrativos y pueden variar
                    ligeramente respecto al producto físico. <br/>Nos reservamos el derecho de modificar los productos y su disponibilidad sin
                    previo aviso.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#41D7FC] text-center">3. Precios y Métodos de Pago</h2>
                <p className="text-[#8252F7] text-center">
                    Los precios de los productos en Techzy se encuentran en Dorales e incluyen impuestos ya estipulados en cada compra. <br/>Los precios
                    pueden cambiar sin previo aviso, pero los cambios no afectarán a los pedidos que ya hayan sido confirmados.
                </p>
                <p className="text-[#8252F7] text-center">
                    Los pagos pueden realizarse mediante tarjeta de crédito o débito a través de una plataforma de pago segura. <br/>Aceptamos
                    las siguientes tarjetas:
                </p>
                <br/>
                <p className="text-[#41D7FC] text-center">
                    - Matercard <br/>
                    - Visa
                </p>
                <br/>
                <p className="text-[#8252F7] text-center">
                    El proceso de pago es seguro y se realiza a través de proveedores de pago certificados. <br/>Al realizar la compra, confirmas
                    que la tarjeta utilizada es tuya o que tienes permiso para utilizarla.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#41D7FC] text-center">4. Envíos</h2>
                <p className="text-[#8252F7] text-center">
                    En Techzy, ofrecemos opciones de envío nacionales. <br/>Los costos y tiempos de entrega se calcularán al momento de realizar
                    la compra y variarán según el destino y la modalidad de envío seleccionada.
                </p>
                <p className="text-[#8252F7] text-center">
                    Techzy no es responsable por cualquier daño o pérdida ocasionada durante el proceso de envío. <br/>En caso de que el paquete
                    no llegue o llegue dañado, por favor, contacta con nosotros dentro de 7 días para que podamos ayudarte a resolver el
                    problema.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#41D7FC] text-center">5. Política de Devoluciones</h2>
                <p className="text-[#8252F7] text-center">
                    Si no estás completamente satisfecho con tu compra, puedes devolver el producto dentro de 30 días naturales
                    desde la fecha de recepción del pedido. <br/>Los productos deben estar en su estado original, sin signos de uso y con su
                    embalaje original.
                </p>
                <p className="text-[#8252F7] text-center">
                    Los gastos de envío para devoluciones correrán a cargo del cliente, salvo que el producto esté defectuoso o haya sido un
                    error en el envío. <br/>Para procesar una devolución, debes contactar a nuestro servicio de atención al cliente en techzy o
                    7777-7777 para recibir instrucciones.
                </p>
            </section>

            <div className="relative w-full h-full flex justify-center items-center">
                <img
                    src="/techzy_name.png"
                    alt="Copyright TECHZY 2025"
                    className="w-full max-w-none md:w-[1000px] h-auto object-contain info-img"
                    data-origin="center"
                />
            </div>
        </div>
    );
};

export default TermsConditions;


