import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook para gestionar las marcas con operaciones CRUD
 * @returns {Object} Funciones y estado para gestionar marcas
 */
const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const API_URL = 'http://localhost:5000/api/brands';

  /**
   * Recarga las marcas
   */
  const reloadBrands = useCallback(() => {
    setReloadTrigger(prev => prev + 1);
  }, []);

  /**
   * Obtiene todas las marcas del backend
   */
  const fetchBrands = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener las marcas');
      }
      
      const data = await response.json();
      setBrands(data);
    } catch (err) {
      console.error('Error al cargar marcas:', err);
      setError(err.message || 'Error al obtener las marcas');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Crea una nueva marca
   * @param {Object} brandData - Datos de la marca a crear
   * @returns {Promise} Promesa con el resultado de la operación
   */
  const createBrand = async (brandData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convertir name a brandName para coincidir con el backend
      const payload = { brandName: brandData.name };
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear la marca');
      }
      
      // Recargar las marcas después de crear una nueva
      await fetchBrands();
      return { success: true };
    } catch (err) {
      console.error('Error al crear marca:', err);
      setError(err.message || 'Error al crear la marca');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Actualiza una marca existente
   * @param {string} id - ID de la marca a actualizar
   * @param {Object} brandData - Nuevos datos de la marca
   * @returns {Promise} Promesa con el resultado de la operación
   */
  const updateBrand = async (id, brandData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convertir name a brandName para coincidir con el backend
      const payload = { brandName: brandData.name };
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar la marca');
      }
      
      // Recargar las marcas después de actualizar
      await fetchBrands();
      return { success: true };
    } catch (err) {
      console.error('Error al actualizar marca:', err);
      setError(err.message || 'Error al actualizar la marca');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Elimina una marca
   * @param {string} id - ID de la marca a eliminar
   * @returns {Promise} Promesa con el resultado de la operación
   */
  const deleteBrand = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al eliminar la marca');
      }
      
      setBrands(prevBrands => 
        prevBrands.filter(brand => brand._id !== id)
      );
      
      return { success: true };
    } catch (err) {
      console.error('Error al eliminar marca:', err);
      setError(err.message || 'Error al eliminar la marca');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Cargar marcas al montar el componente o cuando se solicite una recarga
  useEffect(() => {
    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadTrigger]); // Omitimos fetchBrands intencionalmente para evitar loops infinitos

  return {
    brands,
    loading,
    error,
    createBrand,
    updateBrand,
    deleteBrand,
    reloadBrands
  };
};

export default useBrands;
