import { useState, useMemo } from 'react';

/**
 * Custom hook para la paginación de formularios de contacto
 * @param {Array} items - Elementos a paginar
 * @param {number} itemsPerPage - Número de elementos por página
 * @returns {Object} Estado y funciones para la paginación
 */
const usePagination = (items, itemsPerPage = 7) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calcular el total de páginas
  const totalPages = useMemo(() => 
    Math.ceil(items.length / itemsPerPage), 
    [items.length, itemsPerPage]
  );
  
  // Obtener elementos para la página actual
  const currentItems = useMemo(() => 
    items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ),
    [items, currentPage, itemsPerPage]
  );
  
  /**
   * Navega a la página anterior
   */
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  /**
   * Navega a la página siguiente
   */
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  /**
   * Navega a una página específica
   * @param {number} pageNumber - Número de página
   */
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  // Reinicia a la primera página cuando cambian los items
  useMemo(() => {
    setCurrentPage(1);
  }, [items]);
  
  return {
    currentPage,
    totalPages,
    currentItems,
    goToPreviousPage,
    goToNextPage,
    goToPage
  };
};

export default usePagination;
