import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ClipboardList, RefreshCw, Trash2, AlertCircle, Mail } from 'lucide-react';
import TechzyLogo from '../../assets/techzy.svg';
import { AnimatePresence } from 'framer-motion';

// Importar los custom hooks
import { useContactForms, usePagination } from '../../hooks/contactForms';

/**
 * ContactForms Component
 * 
 * Muestra una lista de formularios de contacto enviados por los usuarios.
 * Incluye funcionalidad de paginación, visualización de mensajes y eliminación.
 * 
 * Este componente permite a los administradores revisar y gestionar
 * los mensajes recibidos a través del formulario de contacto del sitio web.
 * Muestra información del remitente y contenido del mensaje con datos reales del backend.
 */
const ContactForms = () => {
  // Usar custom hooks para gestionar los formularios de contacto
  const { 
    contactForms, 
    loading, 
    error, 
    deleteContactForm, 
    reloadContactForms 
  } = useContactForms();
  
  // Usar custom hook para la paginación
  const { 
    currentPage, 
    totalPages, 
    currentItems, 
    goToPreviousPage, 
    goToNextPage 
  } = usePagination(contactForms);
  
  // Estado para notificación
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' // 'success' o 'error'
  });
  
  /**
   * Muestra una notificación
   * @param {string} message - Mensaje a mostrar
   * @param {string} type - Tipo de notificación ('success' o 'error')
   */
  const showNotification = (message, type = 'success') => {
    setNotification({
      show: true,
      message,
      type
    });
    
    // Auto-ocultar después de 3 segundos
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };
  
  /**
   * Maneja la eliminación de un formulario de contacto
   * @param {string} id - ID del formulario a eliminar
   * @param {string} email - Email del remitente para la confirmación
   */
  const handleDeleteForm = async (id, email) => {
    if (window.confirm(`¿Está seguro que desea eliminar el formulario de ${email}?`)) {
      try {
        await deleteContactForm(id);
        showNotification('Formulario eliminado exitosamente');
      } catch (error) {
        showNotification('Error al eliminar el formulario: ' + (error.message || 'Error desconocido'), 'error');
      }
    }
  };
  
  /**
   * Maneja la recarga de los formularios de contacto
   */
  const handleRefresh = () => {
    reloadContactForms();
    showNotification('Datos actualizados');
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
      <div className="flex-grow flex flex-col justify-center items-center p-6 md:p-10">
        <div className="bg-[#10083A] rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden">
          {/* Título de la sección y botón de recarga */}
          <div className="flex justify-between items-center p-6 border-b border-[#1C1650]">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Formularios de contacto</h1>
              <ClipboardList size={32} className="text-[#41D7FC]" />
            </div>
            <button
              onClick={handleRefresh}
              className="p-2 rounded-full bg-[#1C1650] text-[#41D7FC] hover:bg-[#41D7FC] hover:text-[#1C1650] transition-colors"
              aria-label="Refrescar datos"
            >
              <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
          
          {/* Lista de formularios */}
          <div className="p-6">
            {/* Contador de formularios */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl text-white">Lista de formularios</h2>
              <div className="text-[#41D7FC] text-sm">
                Total: {contactForms.length}
              </div>
            </div>
            
            {/* Estado de carga */}
            {loading && (
              <div className="bg-[#1C1650] p-4 rounded-lg mb-6 flex items-center justify-center">
                <RefreshCw size={24} className="text-[#41D7FC] animate-spin mr-2" />
                <span className="text-white">Cargando...</span>
              </div>
            )}
            
            {/* Mensaje de error */}
            {error && (
              <div className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center">
                <AlertCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            )}
            
            {/* Mensajes con scrollbar personalizado */}
            <div className="space-y-4 max-h-[calc(100vh-340px)] overflow-y-auto custom-scrollbar pr-2">
              {!loading && currentItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 text-gray-400">
                  <Mail size={48} className="mb-4 opacity-50" />
                  <p className="text-center">
                    No hay formularios de contacto disponibles
                  </p>
                </div>
              ) : (
                currentItems.map((form) => (
                  <div 
                    key={form._id} 
                    className="flex items-center justify-between p-4 border-b border-[#1C1650] hover:bg-[#1C1650] transition-colors"
                  >
                    {/* Información del remitente */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail size={16} className="text-[#41D7FC]" />
                        <p className="text-white font-medium">{form.email}</p>
                      </div>
                      <p className="text-gray-300 text-sm">{new Date(form.createdAt).toLocaleString('es-ES')}</p>
                    </div>
                    
                    {/* Mensaje */}
                    <div className="flex-1 mx-4">
                      <p className="text-[#41D7FC] line-clamp-2">{form.description}</p>
                    </div>
                    
                    {/* Acciones */}
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDeleteForm(form._id, form.email)}
                        className="text-[#41D7FC] hover:text-red-500 transition-colors p-2"
                        aria-label={`Eliminar formulario de ${form.email}`}
                        disabled={loading}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Controles de paginación */}
            {contactForms.length > 0 && (
              <div className="flex justify-center mt-8 space-x-6">
                <button 
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1 || loading}
                  className="p-2 rounded-full bg-[#1C1650] text-[#41D7FC] disabled:opacity-50 hover:bg-[#41D7FC] hover:text-[#1C1650] transition-colors"
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages || loading}
                  className="p-2 rounded-full bg-[#1C1650] text-[#41D7FC] disabled:opacity-50 hover:bg-[#41D7FC] hover:text-[#1C1650] transition-colors"
                  aria-label="Página siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Notificación */}
      <AnimatePresence>
        {notification.show && (
          <div 
            className={`fixed bottom-4 right-4 z-50 rounded-lg shadow-lg p-4 flex items-center ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}
          >
            <AlertCircle size={20} className="mr-2" />
            <span>{notification.message}</span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForms;
