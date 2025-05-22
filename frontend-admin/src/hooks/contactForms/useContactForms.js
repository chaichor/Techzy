import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook para gestionar los formularios de contacto con operaciones CRUD
 * @returns {Object} Funciones y estado para gestionar formularios de contacto
 */
const useContactForms = () => {
  const [contactForms, setContactForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const API_URL = 'http://localhost:5000/api/contact-forms';

  /**
   * Recarga los formularios de contacto
   */
  const reloadContactForms = useCallback(() => {
    setReloadTrigger(prev => prev + 1);
  }, []);

  /**
   * Obtiene todos los formularios de contacto del backend
   */
  const fetchContactForms = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener los formularios de contacto');
      }
      
      const data = await response.json();
      setContactForms(data);
    } catch (err) {
      console.error('Error al cargar formularios de contacto:', err);
      setError(err.message || 'Error al obtener los formularios de contacto');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Elimina un formulario de contacto
   * @param {string} id - ID del formulario a eliminar
   * @returns {Promise} Promesa con el resultado de la operación
   */
  const deleteContactForm = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al eliminar el formulario de contacto');
      }
      
      setContactForms(prevForms => 
        prevForms.filter(form => form._id !== id)
      );
      
      return { success: true };
    } catch (err) {
      console.error('Error al eliminar formulario de contacto:', err);
      setError(err.message || 'Error al eliminar el formulario de contacto');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Cargar formularios de contacto al montar el componente o cuando se solicite una recarga
  useEffect(() => {
    fetchContactForms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger]); // Omitimos fetchContactForms intencionalmente para evitar loops infinitos

  return {
    contactForms,
    loading,
    error,
    deleteContactForm,
    reloadContactForms
  };
};

export default useContactForms;
