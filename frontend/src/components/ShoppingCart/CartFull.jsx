import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const mockItems = [
  {
    id: 1,
    title: 'MCHOSE',
    description:
      'MCHOSE Ace68 Teclado mecánico de eje magnético con cable 68 teclas baja latencia RT BK teclados personalizados para ordenador portátil Esports Ace 60 Pro.',
    version: 'White',
    quantity: 1,
    price: 75,
    imageSrc: '/epomaker_p.png',
  },
  {
    id: 2,
    title: 'MCHOSE',
    description:
      'MCHOSE Ace68 Teclado mecánico de eje magnético con cable 68 teclas baja latencia RT BK teclados personalizados para ordenador portátil Esports Ace 60 Pro.',
    version: 'White',
    quantity: 1,
    price: 75,
    imageSrc: '/epomaker_p.png',
  },
  {
    id: 3,
    title: 'MCHOSE',
    description:
      'MCHOSE Ace68 Teclado mecánico de eje magnético con cable 68 teclas baja latencia RT BK teclados personalizados para ordenador portátil Esports Ace 60 Pro.',
    version: 'White',
    quantity: 1,
    price: 75,
    imageSrc: '/epomaker_p.png',
  },
];

const CartItem = ({ item, onChangeQty, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#1B0E47] text-white p-4 rounded-xl flex gap-6 items-start w-full shadow-lg hover:scale-[1.01] transition cursor-pointer group"
    >
      <img
        src={item.imageSrc}
        alt={item.title}
        className="w-24 h-24 object-contain bg-white rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <h2 className="text-sm font-bold uppercase group-hover:text-subsecondary">{item.title}</h2>
        <p className="text-xs text-gray-300 leading-tight mb-2">{item.description}</p>
        <p className="text-sm"><span className="font-bold">Versión:</span> {item.version}</p>

        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); onChangeQty(item.id, item.quantity - 1); }}
              className="w-6 h-6 bg-[#100537] rounded-full text-white text-sm hover:text-subsecondary transition-all duration-300"
            >-</button>
            <span className="px-2">{item.quantity}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onChangeQty(item.id, item.quantity + 1); }}
              className="w-6 h-6 bg-[#100537] rounded-full text-white text-sm hover:text-subsecondary transition-all duration-300"
            >+</button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}
              className="hover:text-subsecondary transition-all duration-300"
            >
              <FiTrash size={18} />
            </button>
            <p className="font-bold text-sm">Precio: ${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const [items, setItems] = useState(mockItems);

  const handleChangeQty = (id, qty) => {
    if (qty < 1) return;
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-primary p-8 text-white">
      <h1 className="text-xl font-bold pl-2 mb-4">Tu carrito</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Lista de productos */}
        <div className="bg-primary p-4 flex-1 max-h-[600px] overflow-y-auto space-y-4 border-b-2 border-r-2 border-white">
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onChangeQty={handleChangeQty}
              onDelete={handleDelete}
            />
          ))}
        </div>

        <div className="border-1 border-secondary p-4 rounded-2xl w-full lg:w-80 h-fit">
          <h2 className="font-bold mb-2">Resumen del pedido</h2>
          <p className="mb-4">Subtotal: <span className="font-bold">{subtotal.toFixed(2)}$</span></p>
          <Link to="/checkout">
            <button className="max-w-none md:w-full px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">Proceder con la compra</button>
          </Link>
          <p className="text-xs text-subprimary mt-2 pt-2 pl-2">Impuestos y envío calculados al finalizar la compra.</p>
        </div>
      </div>

      <p className="text-ms text-subprimary pl-4 mt-6 ">
        El precio y la disponibilidad de los productos de Techzy.com están sujetos a cambio. En el carrito de compras puedes dejar temporalmente los productos que quieras. Aparecerá el precio más reciente de cada producto.
      </p>
    </div>
  );
};

export default CartPage;