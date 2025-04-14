import React from 'react';
import ProductHead from '../../components/Product/ProductHead';
import DescriptionProduct from '../../components/Product/DescriptionProduct';
import RatingBar from '../../components/Product/RatingBar';
import FormReviewProduct from '../../components/Product/FormReviewProduct';
import CommentsProducts from '../../components/Product/CommentsProducts';

const Products = () => {
    return (
        <>
            <div className="grid grid-cols-8 gap-4 bg-primary">
                <div className="col-span-1">
                    <img
                        src="/lg_triangles_left.png"
                        alt="Material grafico"
                        className="w-full h-auto p"
                    />
                </div>

                <div className="col-span-6 gap-1 h-auto">
                    <div className="grid grid-cols-6 gap-1 h-[700px]">
                        <ProductHead />
                    </div>

                    <div className="grid h-[600px]">
                        <DescriptionProduct />
                    </div>

                </div>

                <div className="col-span-1 flex justify-end">
                    <img
                        src="/lg_triangles_right.png"
                        alt="Material grafico"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="grid grid-cols-8 gap-4 bg-primary">
                <div className="col-span-1">
                    <img
                        src="/lg_triangles_left.png"
                        alt="Material grafico"
                        className="w-full h-auto p"
                    />
                </div>

                <div className="col-span-6 gap-1 h-auto">
                    <div className="grid h-[500px]">
                        <RatingBar />
                    </div>

                    <div className="grid h-[600px]">
                        <FormReviewProduct />
                    </div>

                    <div className="grid h-[700px]">
                        <CommentsProducts />
                    </div>
                </div>

                <div className="col-span-1 flex justify-end">
                    <img
                        src="/lg_triangles_right.png"
                        alt="Material grafico"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Products;