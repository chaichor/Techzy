import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BodyRegister = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div className="">
                    <img
                        src="/triangles.png" 
                        alt="Material grafico"
                        className="w-full max-w-none md:w-[1000px] h-auto"
                        data-origin="right" 
                    />
                </div>

                <div className="col-span-2">
                    <p className="text-4xl text-center pt-30 text-white font-normal">Crea tu cuenta!</p>
                    <form className="pt-18 max-w-none md:w-[900px] mx-auto">
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_first_name" className="pl-1.5 peer-focus:font-medium absolute text-lg font-medium text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_last_name" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-10 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                                <label for="floating_phone" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de nacimiento</label>
                            </div>
                            <div className="relative z-0 w-full mb-10 group">
                                <input type="text" name="floating_company" id="floating_company" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                                <label for="floating_company" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="email" name="floating_email" id="floating_email" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_email" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electrónico</label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <input type="password" name="floating_password" id="floating_password" className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg  bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer" placeholder=" " required />
                            <label for="floating_password" className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                        </div>
                        <div class="flex items-center pl-1.5">
                        <input id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-primary border-subprimary rounded-sm focus:ring-purple-600 ring-offset-gray-800 focus:ring-2"/>
                        <label for="link-checkbox" class="ms-2 text-sm font-medium  text-subprimary">He leido y acepto <Link to="/termconditions"><a href="#" class="text-subsecondary dark:text-subsecondary hover:underline">terminos y condiciones</a></Link>.</label>
                        </div>
                        <button type="submit" className="max-w-none md:w-[900px] mt-6 px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                        shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                        hover:shadow-[0px_4px_20px_#8252F7]">Registrate</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BodyRegister;
