import React from 'react';

const ProductHead = () => {
    return (
        <>
            <div class="grid grid-cols-4 gap-4">
                <div class="...">
                    <img
                        src="/triangles.png" // Cambia la ruta de la imagen según sea necesario
                        alt="Material grafico"
                        className="w-full max-w-none md:w-[600px] h-auto object-contain img"
                        data-origin="right" // Añadí data-origin
                    />
                </div>
                <div class="col-span-2">
                    <p className="text-4xl text-center pt-30 text-white font-normal">Crea tu cuenta!</p>
                    <form className="pt-18 max-w-none md:w-[600px] mx-auto">
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_first_name" className="pl-1.5 peer-focus:font-medium absolute text-lg font-medium text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
                        </div>
                        <button type="submit" className="max-w-none md:w-[600px] mt-6 px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">Registrate</button>
                    </form>
                </div>
                <div class="...">
                    <img
                        src="/triangles_right.png" // Cambia la ruta de la imagen según sea necesario
                        alt="Material grafico"
                        className="w-full max-w-none md:w-[600px] h-auto object-contain img"
                        data-origin="right" // Añadí data-origin    
                    />
                </div>
            </div>
        </>
    );
};

export default ProductHead;