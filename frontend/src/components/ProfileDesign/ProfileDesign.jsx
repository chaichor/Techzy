import React from "react";
import { LogOut, Pencil } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#100537] flex items-center justify-center p-4">
      <div className="bg-[#1e0b55] rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* lado izquierdo */}
        <div className="bg-[#8349f7] rounded-2xl p-6 flex flex-col items-center justify-center w-full md:w-1/3">
          <div className="relative w-28 h-28 mb-4">
            <img
              src="/user-profile.jpg" 
              alt="Perfil"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
          <h2 className="text-white font-semibold text-lg">Ethan </h2>
          <p className="text-purple-100 mb-4"> zzz</p>
          <button className="flex items-center gap-2 bg-[#100537] text-white px-4 py-2 rounded-full border border-purple-500 hover:bg-[#241362] transition">
            Editar Perfil <Pencil size={16} />
          </button>
        </div>

        {/* lado derecho */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#100537] text-white p-4 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400">Fecha de cumpleaños</p>
              <p className="text-purple-200">10/10/2006</p>
            </div>
            <div className="bg-[#100537] text-white p-4 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400">Correo</p>
              <p className="text-purple-200">ethandavidh@gmail.com</p>
            </div>
            <div className="bg-[#100537] text-white p-4 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400">Número de teléfono</p>
              <p className="text-purple-200">7104-4165</p>
            </div>
            <div className="bg-[#100537] text-white p-4 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400">Contraseña</p>
              <p className="text-purple-200">  </p>
            </div>
          </div>

          {/* Botón cerrar sesión */}
          <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 text-white text-sm hover:text-purple-400 transition">
              <LogOut size={18} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
