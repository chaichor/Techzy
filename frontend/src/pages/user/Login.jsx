import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
    return (
        <div className="bg-[#100537]">
            <div className="grid grid-cols-1 md:grid-cols-6">
                {/* Imagen lateral izquierda */}
                <div className="hidden md:block col-span-1">
                    <img
                        src="/triangles.png"
                        alt="Material gráfico"
                        className="w-full h-full"  // Usamos object-cover para que cubra el contenedor sin deformarse
                    />
                </div>

                {/* Formulario en el centro */}
                <div className="col-span-4 flex justify-center items-center">
                    <LoginForm />
                </div>

                {/* Imagen lateral derecha */}
                <div className="hidden md:block col-span-1 flex">
                    <img
                        src="/triangles_right.png"
                        alt="Material gráfico"
                        className="w-full h-full"  // Usamos object-cover para que cubra el contenedor sin deformarse
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;

