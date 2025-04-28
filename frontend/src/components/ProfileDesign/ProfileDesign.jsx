import React from "react";
import { LogOut, Pencil } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';


const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#100537] flex items-center justify-center p-6">
      <div className="bg-[#1e0b55] rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* lado izquierdo */}
        <div className="bg-[#8349f7] rounded-2xl p-8 flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="relative w-32 h-32 mb-6">
            <img
              src="/user-profile.jpg"
              alt="Perfil"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
          <h2 className="text-white font-bold text-2xl">Ethan</h2>
          <p className="text-purple-100 text-lg mb-6">zzz</p>
          <Link
             to="/editprofile"  className="flex items-center gap-3 bg-[#100537] text-white px-6 py-3 rounded-full border border-purple-500 hover:bg-[#241362] transition text-base">
               Editar Perfil <Pencil size={18} />
           </Link>
           </div>

        {/* lado derecho */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Fecha de cumpleaños</p>
              <p className="text-purple-200">10/10/2006</p>
            </div>
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Correo</p>
              <p className="text-purple-200">ethandavidh@gmail.com</p>
            </div>
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Número de teléfono</p>
              <p className="text-purple-200">7104-4165</p>
            </div>
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Contraseña</p>
              <p className="text-purple-200">********</p>
            </div>
          </div>

          {/* Botón cerrar sesión */}
          <div className="mt-8 flex justify-end">
            
          <Link to="/login">
            <button className="flex items-center gap-2 text-white text-base hover:text-purple-400 transition">
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
