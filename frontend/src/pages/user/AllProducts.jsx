import React from 'react';
import Filter from '../../components/AllProducts/Filter';
import ProductsAll from '../../components/AllProducts/ProductsAll';

const AllProducts = () => {
    return (
        <>
            <div class="grid grid-cols-12 gap-2 bg-primary w-full pt-10">
                <div class="pl-10 pb-10 col-span-12 text-4xl text-subprimary font-semibold">
                    <h1>Todos los productos</h1>
                </div>
                <div class="col-span-3 flex items-start justify-center">
                    <Filter />
                </div>
                <div class="col-span-9">
                    <ProductsAll />
                </div>
            </div>
        </>
    );
};

export default AllProducts;