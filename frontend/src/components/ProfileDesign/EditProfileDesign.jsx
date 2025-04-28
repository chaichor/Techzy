import React from "react";


const EditProfileDesktop = () => {
  return (
    <div className="min-h-screen bg-[#1c005c] flex items-center justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-4xl flex flex-col gap-8">
        {/* Encabezado y foto */}
        <div className="flex gap-8 items-center">
          <div className="w-36 h-36 rounded-xl overflow-hidden bg-[#a184ff] flex items-center justify-center">
            <img
              src="/user-profile.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 bg-white border-2 border-[#a184ff] rounded-xl p-4 text-[#7a44ff]">
            <label className="text-sm font-semibold mb-1 block">Nombre</label>
            <p className="text-xl font-bold">Angel Chevez</p>
            <p className="text-lg">Campos</p>
          </div>
        </div>

        {/* Fecha de cumpleaños */}
        <div className="bg-white border-2 border-[#a184ff] rounded-xl p-4 text-[#7a44ff]">
          <label className="text-sm font-semibold mb-2 block">Fecha de cumpleaños</label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="mes"
              className="w-full px-3 py-2 border border-[#a184ff] rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="día"
              className="w-full px-3 py-2 border border-[#a184ff] rounded-lg text-center"
            />
            <input
              type="text"
              placeholder="año"
              className="w-full px-3 py-2 border border-[#a184ff] rounded-lg text-center"
            />
          </div>
        </div>

        {/* Teléfono */}
        <div className="bg-white border-2 border-[#a184ff] rounded-xl p-4 text-[#7a44ff]">
          <label className="text-sm font-semibold mb-2 block">Número de teléfono</label>
          <p className="text-lg">6576-0697</p>
        </div>

        {/* Correo */}
        <div className="bg-white border-2 border-[#a184ff] rounded-xl p-4 text-[#7a44ff]">
          <label className="text-sm font-semibold mb-2 block">Correo</label>
          <p className="text-lg">angeluwu.2@mail.com</p>
        </div>

        {/* Contraseña */}
        <div className="bg-white border-2 border-[#a184ff] rounded-xl p-4 text-[#7a44ff]">
          <label className="text-sm font-semibold mb-2 block">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña anterior"
            className="w-full mb-3 px-3 py-2 border border-[#a184ff] rounded-lg placeholder:text-[#b48cff]"
          />
          <input
            type="password"
            placeholder="Contraseña nueva"
            className="w-full px-3 py-2 border border-[#a184ff] rounded-lg placeholder:text-[#b48cff]"
          />
        </div>

        {/* Botón guardar */}
        <div className="flex justify-end">
          <button className="bg-[#a184ff] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#8d70ff] transition">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDesktop;
