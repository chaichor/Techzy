import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

/**
 * Componente Login
 * 
 * Página principal de inicio de sesión para administradores
 * Proporciona una interfaz visual con imágenes laterales y un formulario de acceso centralizado
 * Sirve como contenedor para el componente LoginForm que maneja la lógica de autenticación
 */

/**
 * Renderiza la página de inicio de sesión
 * 
 * Distribuye la pantalla en tres secciones: dos imágenes laterales y un formulario central
 * Las imágenes laterales solo se muestran en dispositivos de tamaño mediano o superior
 * @returns {JSX.Element} Elemento React con la estructura de la página de login
 */
const Login = () => {
    return (
        <>
        <div className="bg-[#100537] w-screen overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-6">
                {/* Imagen lateral izquierda */}
                <div className="hidden md:flex h-screen">
                    <img
                        src="/admin_left.png"
                        alt="Material gráfico"
                        className="w-full"
                    />
                </div>

                {/* Formulario central */}
                <div className="col-span-4 flex justify-center items-center h-screen">
                    <LoginForm />
                </div>

                {/* Imagen lateral derecha */}
                <div className="hidden md:flex h-screen">
                    <img
                        src="/admin_right.png"
                        alt="Material gráfico"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
