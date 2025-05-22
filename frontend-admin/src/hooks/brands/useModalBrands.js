import { useState } from 'react';

/**
 * Custom hook para gestionar los modales de marcas
 * @returns {Object} Estado y funciones para controlar los modales
 */
const useModalBrands = () => {
  // Estado para controlar la visibilidad de los modales
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Estado para la marca actual seleccionada
  const [currentBrand, setCurrentBrand] = useState(null);
  
  // Estado para el formulario
  const [brandName, setBrandName] = useState('');

  /**
   * Cierra todos los modales y resetea los estados
   */
  const closeAllModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setCurrentBrand(null);
    setBrandName('');
  };

  /**
   * Abre el modal para agregar una nueva marca
   */
  const openAddModal = () => {
    setBrandName('');
    setIsAddModalOpen(true);
  };

  /**
   * Abre el modal para editar una marca existente
   * @param {Object} brand - La marca a editar
   */
  const openEditModal = (brand) => {
    setCurrentBrand(brand);
    setBrandName(brand.name);
    setIsEditModalOpen(true);
  };

  /**
   * Abre el modal de confirmación para eliminar una marca
   * @param {Object} brand - La marca a eliminar
   */
  const openDeleteModal = (brand) => {
    setCurrentBrand(brand);
    setIsDeleteModalOpen(true);
  };

  /**
   * Maneja el cambio en el campo de nombre de marca
   * @param {Event} e - Evento de cambio
   */
  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  return {
    isAddModalOpen,
    isEditModalOpen,
    isDeleteModalOpen,
    currentBrand,
    brandName,
    closeAllModals,
    openAddModal,
    openEditModal,
    openDeleteModal,
    handleBrandNameChange,
    setBrandName
  };
};

export default useModalBrands;
