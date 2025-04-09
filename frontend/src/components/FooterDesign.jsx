import React from "react";
import { FaInstagram, FaTiktok, FaCcVisa, FaCcMastercard, FaInfoCircle } from "react-icons/fa";

const FooterA = () => {
  return (
    <footer className="bg-[#18013c] text-purple-300 px-6 py-10 text-sm md:text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-semibold mb-2">Acerca de</h3>
          <ul className="space-y-1">
            <li><a href="" className="hover:underline">Sobre nosotros</a></li>
            <li><a href="#" className="hover:underline">Autenticidad</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-2">Contáctanos</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Escríbenos</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-2">Conéctate</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaInstagram /> <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok /> <a href="#" className="hover:underline">Tik Tok</a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-2">Techzy acepta</h3>
          <div className="flex gap-4 mt-2">
            <FaCcVisa className="text-blue-400 text-2xl" />
            <FaCcMastercard className="text-blue-400 text-2xl" />
          </div>
        </div>
      </div>


      <div className="mt-10 pt-6 border-t border-purple-700 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo_header.png" alt="Techzy Logo" className="mx-auto w-30" />
          <span className="text-purple-400">2025© Techzy. All rights reserved.</span>
        </div>
        
        {/* aqui va el falta poner la ruta de terminos y condiciones*/}
        <div className="flex items-center gap-2">
          <FaInfoCircle /> <a className="hover:underline">Términos y condiciones</a>
        </div>        
      </div>
    </footer>
  );
};

export default FooterA;
