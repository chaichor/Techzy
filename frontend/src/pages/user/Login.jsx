import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
    return (
        <>
        <div className="bg-[#100537] w-screen overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-6">
                {/* Imagen lateral izquierda */}
                <div className="hidden md:flex  h-screen">
                    <img
                        src="/triangles.png"
                        alt="Material gráfico"
                        className="w-full "
                    />
                </div>

                {/* Formulario central */}
                <div className="col-span-4 flex justify-center items-center h-screen">
                    <LoginForm />
                </div>

                {/* Imagen lateral derecha */}
                <div className="hidden md:flex h-screen">
                    <img
                        src="/triangles_right.png"
                        alt="Material gráfico"
                        className="w-full "
                    />
                </div>
            </div>
        </div>

        </>
    );
};

export default Login;





