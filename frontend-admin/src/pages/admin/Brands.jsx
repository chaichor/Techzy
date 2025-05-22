import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  PlusCircle, 
  Edit2, 
  Trash2, 
  X, 
  Flag, 
  RefreshCw,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TechzyLogo from '../../assets/techzy.svg';

// Importar los custom hooks
import { 
  useBrands, 
  useSearchBrands, 
  useModalBrands, 
  useNotification 
} from '../../hooks/brands';

/**
 * Brands Component
 * 
 * Permite la gestión de marcas en el sistema, incluyendo listado,
 * búsqueda, adición, edición y eliminación con conexión al backend.
 * 
 * Este componente implementa funcionalidad CRUD completa para marcas
 * con una interfaz intuitiva y consistente con el diseño de la aplicación.
 */
const Brands = () => {
  // Usar custom hooks para gestionar las marcas
  const { 
    brands, 
    loading, 
    error, 
    createBrand, 
    updateBrand, 
    deleteBrand,
    reloadBrands 
  } = useBrands();
  
  // Hook para búsqueda y filtrado
  const { 
    searchTerm, 
    filteredBrands, 
    handleSearchChange 
  } = useSearchBrands(brands);
  
  // Hook para gestión de modales
  const { 
    isAddModalOpen, 
    isEditModalOpen, 
    isDeleteModalOpen, 
    currentBrand, 
    brandName, 
    closeAllModals, 
    openAddModal, 
    openEditModal, 
    openDeleteModal, 
    handleBrandNameChange 
  } = useModalBrands();
  
  // Hook para notificaciones
  const { 
    notification, 
    showSuccess, 
    showError 
  } = useNotification();

  // Calcular el número total de marcas
  const brandsCount = brands.length;

  /**
   * Maneja la creación de una nueva marca
   */
  const handleCreateBrand = async () => {
    if (brandName.trim() === '') return;
    
    try {
      await createBrand({ name: brandName });
      showSuccess('Marca creada exitosamente');
      closeAllModals();
    } catch (err) {
      showError(err.message || 'Error al crear la marca');
    }
  };

  /**
   * Maneja la actualización de una marca existente
   */
  const handleUpdateBrand = async () => {
    if (brandName.trim() === '' || !currentBrand) return;
    
    try {
      await updateBrand(currentBrand._id, { name: brandName });
      showSuccess('Marca actualizada exitosamente');
      closeAllModals();
    } catch (err) {
      showError(err.message || 'Error al actualizar la marca');
    }
  };

  /**
   * Maneja la eliminación de una marca
   */
  const handleDeleteBrand = async () => {
    if (!currentBrand) return;
    
    try {
      await deleteBrand(currentBrand._id);
      showSuccess('Marca eliminada exitosamente');
      closeAllModals();
    } catch (err) {
      showError(err.message || 'Error al eliminar la marca');
    }
  };

  /**
   * Refresca la lista de marcas
   */
  const handleRefresh = () => {
    reloadBrands();
    showSuccess('Datos actualizados');
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-[#0E0B30] text-white">
      {/* Barra de navegación */}
      <nav className="bg-[#1C1650] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo y título */}
          <div className="flex items-center space-x-2">
            <img src={TechzyLogo} alt="Techzy Logo" className="h-8 w-8" />
            <span className="text-[#41D7FC] font-bold text-xl">Techzy Admin</span>
          </div>
          
          {/* Botones de navegación */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/admin/management" 
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Volver a la página de gestión"
            >
              Volver
            </Link>
            <Link 
              to="/admin/dashboard" 
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Ir al dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex-grow p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado con título y contador */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-white">Marcas</h1>
              <Flag size={26} className="text-[#41D7FC]" />
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-[#41D7FC]">
                Cantidad: {brandsCount}
              </div>
              <button
                onClick={handleRefresh}
                className="text-[#41D7FC] hover:text-white transition-colors"
                aria-label="Refrescar datos"
              >
                <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>
          
          {/* Barra de búsqueda y botón para agregar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-[#41D7FC]" />
              </div>
              <input
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-[#1C1650] text-white placeholder-gray-400 w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
              />
            </div>
            <button
              onClick={openAddModal}
              className="flex items-center justify-center space-x-2 bg-[#1C1650] hover:bg-[#41D7FC] hover:text-[#0E0B30] text-[#41D7FC] py-2 px-4 rounded-lg transition-colors"
              disabled={loading}
            >
              <PlusCircle size={18} />
              <span>Agregar</span>
            </button>
          </div>
          
          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center">
              <AlertCircle size={20} className="mr-2" />
              <span>{error}</span>
            </div>
          )}
          
          {/* Estado de carga */}
          {loading && !error && (
            <div className="bg-[#1C1650] p-4 rounded-lg mb-6 flex items-center justify-center">
              <RefreshCw size={24} className="text-[#41D7FC] animate-spin mr-2" />
              <span className="text-white">Cargando...</span>
            </div>
          )}
          
          {/* Lista de marcas con scrollbar personalizado */}
          <div className="bg-[#10083A] rounded-xl shadow-lg overflow-hidden">
            <div className="max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
              {filteredBrands.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 text-gray-400">
                  <Flag size={48} className="mb-4 opacity-50" />
                  <p className="text-center">
                    {loading ? 'Cargando marcas...' : 'No se encontraron marcas'}
                  </p>
                </div>
              ) : (
                filteredBrands.map((brand) => (
                  <div 
                    key={brand._id} 
                    className="flex items-center justify-between p-4 border-b border-[#1C1650] hover:bg-[#1C1650] transition-colors"
                  >
                    <span className="text-white">{brand.brandName}</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => openEditModal(brand)}
                        className="text-[#41D7FC] hover:text-white transition-colors"
                        aria-label={`Editar ${brand.brandName}`}
                        disabled={loading}
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(brand)}
                        className="text-[#41D7FC] hover:text-red-500 transition-colors"
                        aria-label={`Eliminar ${brand.brandName}`}
                        disabled={loading}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Notificación */}
      <AnimatePresence>
        {notification.show && (
          <div 
            className={`fixed bottom-4 right-4 z-50 rounded-lg shadow-lg p-4 flex items-center ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}
          >
            {notification.type === 'success' ? (
              <CheckCircle size={20} className="mr-2" />
            ) : (
              <AlertCircle size={20} className="mr-2" />
            )}
            <span>{notification.message}</span>
          </div>
        )}
      </AnimatePresence>

      {/* Modal para agregar marca */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Agregar Marca</h2>
              <button
                onClick={closeAllModals}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nombre de la marca"
              value={brandName}
              onChange={handleBrandNameChange}
              className="bg-[#1C1650] text-white w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
            />
            <button
              onClick={handleCreateBrand}
              className="w-full bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded-lg transition-colors"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Agregar'}
            </button>
          </div>
        </div>
      )}

      {/* Modal para editar marca */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Editar Marca</h2>
              <button
                onClick={closeAllModals}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nombre de la marca"
              value={brandName}
              onChange={handleBrandNameChange}
              className="bg-[#1C1650] text-white w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
            />
            <button
              onClick={handleUpdateBrand}
              className="w-full bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded-lg transition-colors"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Actualizar'}
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación para eliminar */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Eliminar Marca</h2>
              <button
                onClick={closeAllModals}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-white mb-6">
              ¿Está seguro que desea eliminar la marca "{currentBrand?.brandName}"?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={closeAllModals}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteBrand}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? 'Procesando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
