import React from 'react';
import Filter from '../../components/Switches/Filter';
import Products from '../../components/Switches/Products';
import FooterDesign from '../../components/FooterDesign';

const Switches = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 bg-primary w-full pt-10 pb-7">

                <div className="pl-10 pb-10 col-span-1 md:col-span-12 text-4xl text-subprimary font-semibold">
                    <h1>Switches</h1>
                </div>

                <div className="col-span-1 md:col-span-3 flex items-start justify-center">
                    <Filter />
                </div>

                <div className="col-span-1 md:col-span-9">
                    <Products />
                </div>

            </div>
            <FooterDesign />
        </>
    );
};

export default Switches;