import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FooterDesign from '../../components/FooterDesign';
import { useContactForm } from '../../hooks/contactForm';

const ContactUs = () => {
    // Estados para mostrar mensajes de éxito o error
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    // Usar el hook personalizado para el envío del formulario
    const { loading, error, submitContactForm } = useContactForm();
    
    // Configurar react-hook-form
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset 
    } = useForm();
    
    // Manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            await submitContactForm(data);
            // Mostrar mensaje de éxito
            setShowSuccessMessage(true);
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => setShowSuccessMessage(false), 5000);
            // Limpiar el formulario
            reset();
        } catch (err) {
            console.error('Error al enviar formulario:', err);
            // El error ya está manejado por el hook
        }
    };
    
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#100537] min-h-screen">
                <div className="hidden md:block">
                    <img
                        src="/triangles.png"
                        alt="Material grafico"
                        className="w-full max-w-none md:w-[1000px] h-auto object-contain img"
                    />
                </div>

                <div className="col-span-1 md:col-span-2 p-4 md:p-8 flex flex-col justify-center">
                    <p className="text-4xl text-center mb-8 text-[#8252F7] font-semibold">Contáctanos</p>
                    
                    {/* Mensaje de éxito */}
                    {showSuccessMessage && (
                        <div className="bg-green-600 text-white p-4 mb-6 rounded-lg text-center">
                            ¡Gracias por tu mensaje! Te responderemos lo antes posible.
                        </div>
                    )}
                    
                    {/* Mensaje de error */}
                    {error && (
                        <div className="bg-red-600 text-white p-4 mb-6 rounded-lg text-center">
                            {error}
                        </div>
                    )}
                    
                    <form 
                        className="max-w-none md:w-[900px] mx-auto" 
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div className="relative z-0 w-full mb-10 group">
                            <input 
                                type="email" 
                                id="email" 
                                className={`pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white ${errors.email ? 'border-red-500' : 'border-subprimary'} hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer`} 
                                placeholder=" " 
                                {...register('email', { 
                                    required: 'El correo electrónico es obligatorio',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Dirección de correo electrónico inválida'
                                    }
                                })}
                            />
                            <label 
                                htmlFor="email" 
                                className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Correo Electrónico
                            </label>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        
                        <div className="relative z-0 w-full mb-10 group">
                            <textarea 
                                id="description" 
                                rows="5" 
                                className={`pl-1.5 rounded-lg block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none text-white ${errors.description ? 'border-red-500' : 'border-subprimary'} hover:border-subsecondary transition duration-350 ease-in-out focus:outline-none focus:ring-0 focus:border-subsecondary peer`} 
                                placeholder=" " 
                                {...register('description', { 
                                    required: 'La descripción es obligatoria',
                                    minLength: {
                                        value: 10,
                                        message: 'La descripción debe tener al menos 10 caracteres'
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: 'La descripción no puede exceder los 500 caracteres'
                                    }
                                })}
                            />
                            <label 
                                htmlFor="description" 
                                className="pl-1.5 peer-focus:font-medium font-medium absolute text-lg text-subprimary duration-350 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-subsecondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Descripción
                            </label>
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                            )}
                        </div>
                        
                        <button 
                            type="submit" 
                            className="max-w-none md:w-[900px] mt-6 px-8 py-3 bg-primary text-white font-semibold border-1 border-subprimary rounded-full
                            shadow-xl hover:bg-subprimary hover:text-primary transition-all duration-300 
                            hover:shadow-[0px_4px_20px_#8252F7] disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
            <FooterDesign />
        </>
    );
};

export default ContactUs;