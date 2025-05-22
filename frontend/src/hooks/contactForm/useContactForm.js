import { useState } from 'react';

/**
 * Custom hook para gestionar el envío de formularios de contacto
 * @returns {Object} Funciones y estado para el envío de formularios
 */
const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:5000/api/contact-forms';

  /**
   * Envía un formulario de contacto al backend
   * @param {Object} data - Datos del formulario (email, description)
   * @returns {Promise} Promesa con el resultado del envío
   */
  const submitContactForm = async (data) => {
    setLoading(true);
    setSuccess(false);
    setError(null);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }
      
      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Error al enviar formulario:', err);
      setError(err.message || 'Error al enviar el formulario');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    success,
    error,
    submitContactForm,
    resetStatus: () => {
      setSuccess(false);
      setError(null);
    }
  };
};

export default useContactForm;
