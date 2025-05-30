import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="bg-[#241362] p-8 md:p-20 rounded-3xl shadow-lg w-full max-w-[450px]">
            <h1 className="text-3xl font-semibold text-center text-white mb-6">Iniciar Sesión</h1>

            <form className="space-y-4">
                {/* Correo */}
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

                {/* Contraseña */}
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="password"
                        id="password"
                        className="pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white border-subprimary hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="password"
                        className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Contraseña
                    </label>
                </div>
                <div className="text-center mt-4 text-white">
                    <p>
                    <Link to="/recoverydesign1" className="text-subprimary hover:underline">
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </p>
                </div>

                {/* Botón de ingresar */}
                <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-subprimary hover:text-primary transition duration-300"
                >
                    Ingresar
                </button>

                {/* Enlace para el registro */}
                <div className="text-center mt-4 text-white">
                    <p>
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="text-[#41D7FC] hover:underline">
                            Regístrate
                        </Link>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;




