import React, { useState } from 'react';

const CheckoutBody = () => {
    const [form, setForm] = useState({
        address: '',
        department: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        cardHolder: '',
        coupon: ''
    });

    const products = [
        { name: 'MCHOSE', version: 'Withe', price: 75, quantity: 1 },
        { name: 'MCHOSE', version: 'Withe', price: 75, quantity: 1 },
        { name: 'MCHOSE', version: 'Withe', price: 75, quantity: 1 },
    ];

    const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const shipping = 2;
    const total = subtotal + shipping;




    return (
        <div className="min-h-screen bg-primary text-white font-mono p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
                <div className="bg-secondary p-6 rounded-xl">
                    <h2 className="text-lg font-bold border-b border-white pb-2 mb-4">Entrega</h2>
                    <div className="relative z-0 w-full group p-2">
                        <input type="text" name="address" id="address" className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" placeholder="Dirección" />
                    </div>
                    <div className="relative z-0 w-full group p-2">
                    <select
                        name="department"
                        className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                    >
                        <option value="">Departamento</option>
                        <option value="San Salvador">San Salvador</option>
                        <option value="La Libertad">La Libertad</option>
                        <option value="Santa Ana">Santa Ana</option>
                    </select>
                    </div>
                    <p className="mt-1 text-base text-subprimary pl-3 font-semibold">
                        Entregas limitadas a El Salvador, porfavor tener en cuenta antes de llenar el formulario.
                    </p>
                </div>

                <div className="bg-secondary p-6 rounded-xl">
                    <h2 className="text-lg font-bold border-b border-white pb-2 mb-4">
                        Pago <span className="text-[#41D7FC] ml-4">TARJETA</span>
                    </h2>
                    <div className="relative z-0 w-full group p-2">
                    <input
                        type="text"
                        name="cardNumber"
                        className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" 
                        placeholder="Número de tarjeta"
                    />
                    </div>
                    <div className="flex">
                    <div className="relative z-0 w-full group p-2">
                        <input
                            type="text"
                            name="expiry"
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" 
                            placeholder="Fecha de nacimiento"
                        />
                    </div>
                    <div className="relative z-0 w-full group p-2">
                        <input
                            type="text"
                            name="cvv"
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" 
                            placeholder="(CVV)"
                        />
                    </div>
                    </div>
                    <div className="relative z-0 w-full group p-2">
                    <input
                        type="text"
                        name="cardHolder"
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" 
                            placeholder="Titular de la tarjeta"
                    />
                    </div>
                    <p className="mt-1 text-base text-subprimary pl-3 font-semibold">
                        Todas las transacciones son seguras y encriptadas.
                    </p>
                </div>

                <button
                    className="max-w-none w-full px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]"
                >
                    Realizar Compra
                </button>
            </div>

            <div className="w-full md:w-[350px] space-y-6">
                <div className="bg-primary p-4 rounded-xl space-y-4">
                    {products.map((p, i) => (
                        <div key={i} className="flex justify-between pt-2 pb-2 pl-3 p-3 rounded-lg border-2 border-secondary">
                            <div>
                                <h4 className="font-bold text-sm">{p.name}</h4>
                                <p className="text-sm text-[#ccc]">Versión: {p.version}</p>
                                <p className="text-sm text-white font-bold">Precio: ${p.price}</p>
                            </div>
                            <p className="text-sm text-white">Cantidad: {p.quantity}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-secondary p-4 rounded-xl space-y-3">
                    <p className="text-sm text-subprimary font-semibold">Si tienes algun cupón, ¡valídalo!</p>
                    <input
                        type="text"
                        name="coupon"
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer" 
                            placeholder="Código de cupón"
                    />
                    <button className="max-w-none w-full px-8 py-2 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">
                        Validar cupón
                    </button>
                </div>

                <div className="text-sm mt-4">
                    <p>Cant. Productos: {products.length}</p>
                    <p>Productos: {subtotal.toFixed(2)}$</p>
                    <p>Envío: {shipping.toFixed(2)}$</p>
                    <hr className="my-2" />
                    <p className="font-bold">Total: {total.toFixed(2)}$</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutBody;
