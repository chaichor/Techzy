import React from 'react';
import Cart from '../../components/ShoppingCart/EmptyCart';
import CartFull from '../../components/ShoppingCart/CartFull';

const ShoppingCart = () => {
    return (
        <>
        <div className="bg-[#100537]">
            <div>
                <Cart/>
            </div>  
        </div>
        </>
    );
};

export default ShoppingCart;