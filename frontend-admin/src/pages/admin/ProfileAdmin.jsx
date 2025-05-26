import React, { useState } from "react";
import { LogOut, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import TechzyLogo from '../../assets/techzy.svg';

const ProfileAdmin = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Estado para los datos del perfil
  const [profileData, setProfileData] = useState({
    name: "Ethan",
    email: "ethandavidh@gmail.com",
    phone: "7104-4165",
    password: "********",
  });

  // Estado temporal para edición
  const [tempData, setTempData] = useState(profileData);

  // Manejar cambio de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar cambios
  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  // Cancelar edición
  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#1C1650] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={TechzyLogo} alt="Techzy Logo" className="h-8 w-8" />
            <span className="text-[#41D7FC] font-bold text-xl">Techzy Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/dashboard"
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/profile"
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
            >
              Perfil
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenedor principal */}
      <div
        className={`min-h-screen bg-[#100537] flex items-center justify-center p-6 relative ${
          isEditing ? "filter blur-sm pointer-events-none select-none" : ""
        }`}
      >
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
            <h2 className="text-white font-bold text-2xl">{profileData.name}</h2>
            <p className="text-purple-100 text-lg mb-6">zzz</p>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-3 bg-[#100537] text-white px-6 py-3 rounded-full border border-purple-500 hover:bg-[#241362] transition text-base"
            >
              Editar Perfil <Pencil size={18} />
            </button>
          </div>

          {/* lado derecho */}
          <div className="w-full md:w-2/3 flex flex-col justify-between gap-4">
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Correo</p>
              <p className="text-purple-200">{profileData.email}</p>
            </div>
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Número de teléfono</p>
              <p className="text-purple-200">{profileData.phone}</p>
            </div>
            <div className="bg-[#100537] text-white p-6 rounded-lg border border-[#8349f7]">
              <p className="text-purple-400 font-medium mb-1">Contraseña</p>
              <p className="text-purple-200">{profileData.password}</p>
            </div>
          </div>

          {/* Botón cerrar sesión */}
          <div className="flex justify-end mt-auto w-full">
            <Link to="/login">
              <button className="flex items-center gap-2 text-white text-base hover:text-purple-400 transition">
                <LogOut size={20} />
                Cerrar Sesión
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de edición */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1e0b55] p-6 rounded-2xl w-full max-w-lg shadow-lg">
            <h3 className="text-white text-2xl mb-4 font-bold">Editar Perfil</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="flex flex-col gap-4"
            >
              <label className="text-purple-300 font-semibold">
                Nombre
                <input
                  type="text"
                  name="name"
                  value={tempData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md p-2 bg-[#100537] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </label>

              <label className="text-purple-300 font-semibold">
                Correo
                <input
                  type="email"
                  name="email"
                  value={tempData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md p-2 bg-[#100537] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </label>

              <label className="text-purple-300 font-semibold">
                Número de teléfono
                <input
                  type="tel"
                  name="phone"
                  value={tempData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md p-2 bg-[#100537] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </label>

              <label className="text-purple-300 font-semibold">
                Contraseña
                <input
                  type="password"
                  name="password"
                  value={tempData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md p-2 bg-[#100537] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </label>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-md border border-purple-500 text-purple-300 hover:bg-purple-700 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileAdmin;
