import React from "react";
import { CheckCircle } from "lucide-react";

const RecoveryForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1B103B]">
    <div className="text-center absolute top-12">
      <img
        src="/logo_header.png"
        alt="Techzy Logo"
        className="w-32 mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      />
    </div>

    <div className="w-[360px] bg-[#2E1F5E] text-white rounded-xl p-6 shadow-xl">
      <h2 className="text-2xl font-semibold mb-3 text-white">Ingresa tu cuenta</h2>
      <p className="text-sm text-gray-300 mb-6">
        Introduce tu correo electrónico del que quieres recuperar la cuenta para enviarte un código de recuperación y confirmar si la cuenta es tuya.
      </p>
      <form>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full bg-[#3C2A70] text-white border-none rounded-full px-5 py-3 pr-10 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <CheckCircle className="absolute right-4 top-3.5 text-cyan-400 w-5 h-5" />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-semibold py-2"
        >
          Enviar Código
        </button>
      </form>
    </div>
  </div>
);

export default RecoveryForm;
