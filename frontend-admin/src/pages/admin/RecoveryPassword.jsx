import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechzyResetFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Correo electrónico inválido");
      return;
    }
    setEmailError("");
    setStep(2);
  };

  const handleCodeChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handlePasswordSubmit = () => {
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }
    setPasswordError("");
    setSuccessMessage("Contraseña actualizada correctamente");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const stepTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-[#0b032d] text-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div {...stepTransition} key="step1" className="bg-[#1c1240] p-8 rounded-xl w-[90%] max-w-md text-center">
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">Techzy<span className="text-white">.</span></h1>
            <h2 className="text-xl font-semibold mb-4">Ingresa tu cuenta</h2>
            <p className="text-sm text-[#cbd5e1] mb-4">
              Introduce el correo electrónico con el que te registraste para enviarte un código de recuperación.
            </p>
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-[#0b032d] border border-cyan-400 text-white mb-2"
            />
            {emailError && <p className="text-red-400 text-sm mb-2">{emailError}</p>}
            <button onClick={handleEmailSubmit} className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-2 rounded">
              Enviar Código
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div {...stepTransition} key="step2" className="bg-[#1c1240] p-8 rounded-xl w-[90%] max-w-md text-center">
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">Techzy<span className="text-white">.</span></h1>
            <h2 className="text-xl font-semibold mb-4">Ingresa el código</h2>
            <p className="text-sm text-[#cbd5e1] mb-4">
              Comprueba tu correo e ingresa el código que te hemos enviado para verificar tu identidad.
            </p>
            <div className="flex justify-between gap-2 mb-4">
              {code.map((digit, i) => (
                <input
                  key={i}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(e.target.value, i)}
                  className="w-12 h-12 text-center text-xl bg-[#0b032d] border border-cyan-400 rounded text-white"
                />
              ))}
            </div>
            <button onClick={() => setStep(3)} className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-2 rounded">
              Acceder
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div {...stepTransition} key="step3" className="bg-[#1c1240] p-8 rounded-xl w-[90%] max-w-md text-center">
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">Techzy<span className="text-white">.</span></h1>
            <h2 className="text-xl font-semibold mb-4">Actualiza tu contraseña</h2>
            <p className="text-sm text-[#cbd5e1] mb-4">
              Crea tu nueva contraseña para entrar de nuevo en tu cuenta de usuario.
            </p>
            <input
              type="password"
              placeholder="Crear contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-[#0b032d] border border-cyan-400 text-white mb-3"
            />
            <input
              type="password"
              placeholder="Repetir contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-[#0b032d] border border-cyan-400 text-white mb-2"
            />
            {passwordError && <p className="text-red-400 text-sm mb-2">{passwordError}</p>}
            {successMessage && <p className="text-green-400 text-sm mb-2">{successMessage}</p>}
            <button onClick={handlePasswordSubmit} className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-2 rounded mb-2">
              Iniciar Sesión
            </button>
            <button onClick={() => setStep(2)} className="w-full bg-[#0b032d] text-cyan-300 border border-cyan-300 py-1 rounded">
              Volver
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
