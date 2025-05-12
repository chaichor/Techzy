import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Componente LoginForm
 * 
 * Maneja el formulario de inicio de sesión para administradores
 * Incluye validación de campos, manejo de errores y estado de carga
 * Al iniciar sesión con éxito, almacena los datos del usuario en localStorage y redirige al dashboard
 */

const LoginForm = () => {
    /**
     * Estado del formulario
     * 
     * email: correo electrónico del administrador
     * password: contraseña del administrador
     */
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    /**
     * Estado de error
     * 
     * Mensaje de error en caso de falla en la autenticación
     */
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    /**
   * Maneja el envío del formulario de inicio de sesión
   * 
   * Valida los campos del formulario, verifica las credenciales
   * y maneja el proceso de autenticación del administrador
   * 
   * @param {Event} e - Evento de envío del formulario
   */
  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Realizar petición al backend para validar credenciales
            // Simulamos la validación con el email del archivo .env
            if (formData.email === 'admint@gmail.com' && formData.password === 'admin123') {
                // Almacenar datos en localStorage o usar un estado global como contexto
                localStorage.setItem('adminToken', 'token-simulado-123');
                localStorage.setItem('adminUser', JSON.stringify({ email: formData.email, role: 'admin' }));
                
                // Redirigir al dashboard
                navigate('/dashboard');
            } else {
                setError('Credenciales incorrectas. Verifica tu correo y contraseña.');
            }
        } catch (err) {
            setError('Error al iniciar sesión. Intenta nuevamente.');
            console.error('Error en login:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#241362] p-8 md:p-20 rounded-3xl shadow-lg w-full max-w-[450px]">
            <h1 className="text-3xl font-semibold text-center text-white mb-6">Panel Administrativo</h1>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Mensaje de error */}
                {error && (
                    <div className="p-3 bg-red-500 bg-opacity-25 rounded-lg text-white text-center mb-4">
                        {error}
                    </div>
                )}

                {/* Correo */}
                <div className="relative z-0 w-full mb-4 group">
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
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

                {/* Botón de ingresar */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-subprimary hover:text-primary transition duration-300 disabled:opacity-70"
                >
                    {loading ? 'Iniciando sesión...' : 'Ingresar al Panel'}
                </button>

                <div className="text-center mt-4 text-white">
                    <p>
                    <Link to="/admin/RecoveryPassword" className="text-subprimary hover:underline">
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </p>
                </div>

                {/* Mensaje de acceso restringido */}
                <div className="text-center mt-4 text-white">
                    <p className="text-sm">
                        Acceso exclusivo para administradores del sistema
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
