import React, { useState } from 'react';
import Swal from 'sweetalert2';

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

    const handlePurchase = (e) => {
        e.preventDefault();

        // Validación básica del formulario
        if (!form.address || !form.department || !form.cardNumber || !form.expiry || !form.cvv || !form.cardHolder) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor completa todos los campos requeridos',
                icon: 'error',
                confirmButtonText: 'Entendido',
                background: '#1E1E1E', // Manteniendo tu fondo oscuro original
                color: 'white',
                iconColor: '#3B82F6', // Color azel estándar (puedes cambiarlo por cualquier código HEX)
                customClass: {
                    popup: 'rounded-xl! border border-gray-700',
                    icon: '!border-blue-500', // Borde azul para el icono
                    confirmButton: 'max-w-none! w-full! px-8! py-3! bg-primary! text-white! font-semibold! border-1! border-subprimary! rounded-full! shadow-xl! hover:bg-subprimary! hover:text-primary! transition-all! duration-300! hover:shadow-[0px_4px_20px_#8252F7]!'
                }
            });
            return;
        }

        // Simulación de procesamiento de pago
        setTimeout(() => {
            Swal.fire({
                title: '¡Compra realizada!',
                text: 'Tu transacción se completó con éxito',
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#1E1E1E',
                color: 'white',
                customClass: {
                    popup: 'rounded-xl border border-gray-700',
                    confirmButton: 'bg-subprimary hover:bg-purple-700 text-primary font-semibold py-2 px-4 rounded-full',
                    title: 'text-xl font-mono',
                    htmlContainer: 'text-lg font-mono'
                }
            });
        }, 1500);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-primary text-white font-mono p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
                <div className="bg-secondary p-6 rounded-xl">
                    <h2 className="text-lg font-bold border-b border-white pb-2 mb-4">Entrega</h2>
                    <div className="relative z-0 w-full group p-2">
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={form.address}
                            onChange={handleInputChange}
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                            placeholder="Dirección"
                            required
                        />
                    </div>
                    <div className="relative z-0 w-full group p-2">
                        <select
                            name="department"
                            value={form.department}
                            onChange={handleInputChange}
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                            required
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
                            value={form.cardNumber}
                            onChange={handleInputChange}
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                            placeholder="Número de tarjeta"
                            required
                        />
                    </div>
                    <div className="flex">
                        <div className="relative z-0 w-full group p-2">
                            <input
                                type="text"
                                name="expiry"
                                value={form.expiry}
                                onChange={handleInputChange}
                                className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                                placeholder="Fecha de nacimiento"
                                required
                            />
                        </div>
                        <div className="relative z-0 w-full group p-2">
                            <input
                                type="text"
                                name="cvv"
                                value={form.cvv}
                                onChange={handleInputChange}
                                className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                                placeholder="(CVV)"
                                required
                            />
                        </div>
                    </div>
                    <div className="relative z-0 w-full group p-2">
                        <input
                            type="text"
                            name="cardHolder"
                            value={form.cardHolder}
                            onChange={handleInputChange}
                            className="bg-primary pl-4 rounded-lg block py-2.5 px-0 w-full text-base border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition-all duration-350 focus:outline-none focus:ring-0 placeholder:text-subprimary hover:placeholder:text-subsecondary focus:border-subsecondary peer"
                            placeholder="Titular de la tarjeta"
                            required
                        />
                    </div>
                    <p className="mt-1 text-base text-subprimary pl-3 font-semibold">
                        Todas las transacciones son seguras y encriptadas.
                    </p>
                </div>

                <button
                    onClick={handlePurchase}
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
                        value={form.coupon}
                        onChange={handleInputChange}
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