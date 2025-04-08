import React from 'react';
import ProductHead from '../../components/Product/ProductHead';

const Products = () => {
    return (
        <>
            <div className="bg-[#100537]">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <img
                            src="/izquierda_triangles.png"
                            alt="Material grafico"
                            className="w-full h-auto p"
                        />
                    </div>

                    <div className="col-span-4 grid grid-cols-2 gap-1">
                        <ProductHead/>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <img
                            src="/right_triangles.png"
                            alt="Material grafico"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;