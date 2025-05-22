import { useState, useMemo } from 'react';

/**
 * Custom hook para buscar y filtrar marcas
 * @param {Array} brands - Lista de marcas a filtrar
 * @returns {Object} Estado y funciones para la búsqueda y filtrado
 */
const useSearchBrands = (brands) => {
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filtra las marcas basadas en el término de búsqueda
   */
  const filteredBrands = useMemo(() => {
    if (!searchTerm.trim()) return brands;
    
    return brands.filter(brand => 
      brand.brandName.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.brandName.localeCompare(b.brandName)); // Ordenar de A-Z
  }, [brands, searchTerm]);

  /**
   * Maneja el cambio en el campo de búsqueda
   * @param {Event} e - Evento de cambio
   */
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredBrands,
    handleSearchChange
  };
};

export default useSearchBrands;
