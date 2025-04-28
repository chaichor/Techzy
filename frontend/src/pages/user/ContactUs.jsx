import React from 'react';
import FooterDesign from '../../components/FooterDesign';

const ContactUs = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 bg-[#100537]">
                <div className="">
                    <img
                        src="/triangles.png" // Cambia la ruta de la imagen según sea necesario
                        alt="Material grafico"
                        className="w-full max-w-none md:w-[1000px] h-auto object-contain img"
                    />
                </div>

                <div className="col-span-2">
                    <p className="text-4xl text-center pt-30 text-[#8252F7] font-semibold">Contactanos</p>
                    <form className="pt-18 max-w-none md:w-[900px] mx-auto">
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="email" name="floating_email" id="floating_email" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_email" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electrónico</label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <textarea name="floating_description" id="floating_description" rows="5" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_description" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción</label>
                        </div>
                        <button type="submit" className="max-w-none md:w-[900px] mt-6 px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">Enviar</button>
                    </form>
                </div>
            </div>
            <FooterDesign />
        </>
    );
};

export default ContactUs;