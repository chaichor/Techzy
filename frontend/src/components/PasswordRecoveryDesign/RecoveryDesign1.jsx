import React from "react";
import { CheckCircle } from "lucide-react";

const RecoveryForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary">
    <div className="text-center absolute top-40">
      <img
        src="/logo_header.png"
        alt="Techzy Logo"
        className="w-70 mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      />
    </div>

    <div className="w-[360px] bg-secondary text-white rounded-xl p-6 shadow-xl">
      <h2 className="text-2xl font-semibold mb-3 text-white">Ingresa tu cuenta</h2>
      <p className="text-sm text-subprimary mb-6">
        Introduce tu correo electrónico del que quieres recuperar la cuenta para enviarte un código de recuperación y confirmar si la cuenta es tuya.
      </p>
      <form>
        <div className="relative z-0 w-full mb-4 group">
          <input
            type="email"
            id="email"
            className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo Electrónico
          </label>
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
