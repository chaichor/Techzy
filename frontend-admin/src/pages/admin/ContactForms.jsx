import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ClipboardList } from 'lucide-react';
import TechzyLogo from '../../assets/techzy.svg';
import PerfilSvg from '../../assets/perfil.svg';

/**
 * ContactForms Component
 * 
 * Muestra una lista de formularios de contacto enviados por los usuarios.
 * Incluye funcionalidad de paginación y visualización de mensajes.
 * 
 * Este componente permite a los administradores revisar y gestionar
 * los mensajes recibidos a través del formulario de contacto del sitio web.
 * Muestra información del remitente, calificación y contenido del mensaje.
 */
const ContactForms = () => {
  // Estado para controlar la página actual de paginación
  const [currentPage, setCurrentPage] = useState(1);
  
  /**
   * Datos de ejemplo para los formularios de contacto
   * En una implementación real, estos datos vendrían de una API
   * 
   * @type {Array<{id: number, nombre: string, estrellas: number, mensaje: string}>}
   */
  const formularios = [
    { id: 1, nombre: 'Carlos', estrellas: 5, mensaje: 'Hola xikos fijense que no me funciona el teclado' },
    { id: 2, nombre: 'Ethan', estrellas: 5, mensaje: 'Como estamos chavales' },
    { id: 3, nombre: 'Victor', estrellas: 5, mensaje: 'Pagina de $%m#*' },
    { id: 4, nombre: 'Victor', estrellas: 5, mensaje: 'Pagina de $%m#*' },
    { id: 5, nombre: 'Victor', estrellas: 5, mensaje: 'Pagina de $%m#*' },
    { id: 6, nombre: 'Victor', estrellas: 5, mensaje: 'Pagina de $%m#*' },
    { id: 7, nombre: 'Victor', estrellas: 5, mensaje: 'Pagina de $%m#*' },
    { id: 8, nombre: 'Maria', estrellas: 4, mensaje: 'Excelente servicio, pero necesito asistencia' },
    { id: 9, nombre: 'Juan', estrellas: 3, mensaje: 'El producto llegó con retraso' },
    { id: 10, nombre: 'Ana', estrellas: 5, mensaje: 'Muy contenta con mi compra' },
    { id: 11, nombre: 'Pedro', estrellas: 4, mensaje: 'Buena calidad pero el envío tardó más de lo esperado' },
    { id: 12, nombre: 'Laura', estrellas: 5, mensaje: 'Los switches son increíbles, muchas gracias' },
    { id: 13, nombre: 'Diego', estrellas: 2, mensaje: 'Tengo problemas con mi pedido' },
    { id: 14, nombre: 'Sofia', estrellas: 5, mensaje: 'Increíble experiencia de compra' },
    { id: 15, nombre: 'Alejandro', estrellas: 4, mensaje: 'Buena atención al cliente' },
    { id: 16, nombre: 'Valentina', estrellas: 5, mensaje: 'Los keycaps son hermosos' },
    { id: 17, nombre: 'Mateo', estrellas: 3, mensaje: 'Necesito ayuda con la instalación' },
    { id: 18, nombre: 'Isabella', estrellas: 5, mensaje: 'Excelente calidad' },
    { id: 19, nombre: 'Santiago', estrellas: 4, mensaje: 'Buen producto, cumple con lo prometido' },
    { id: 20, nombre: 'Camila', estrellas: 5, mensaje: 'Me encanta mi nuevo teclado mecánico' }
  ];

  // Número de elementos por página
  const itemsPerPage = 7;
  
  // Calcular el total de páginas
  const totalPages = Math.ceil(formularios.length / itemsPerPage);
  
  // Obtener elementos para la página actual
  const currentItems = formularios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  /**
   * Maneja la navegación a la página anterior
   * @returns {void}
   */
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Maneja la navegación a la página siguiente
   * @returns {void}
   */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * Renderiza estrellas basadas en la calificación
   * @param {number} count - Número de estrellas a mostrar
   * @returns {JSX.Element} - Estrellas renderizadas
   */
  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <span key={index} className="text-yellow-400">★</span>
      ));
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
          {/* Título de la sección */}
          <div className="flex items-center space-x-4 p-6 border-b border-[#1C1650]">
            <h1 className="text-2xl font-bold text-white">Formularios de parte de los clientes</h1>
            <ClipboardList size={32} className="text-[#41D7FC]" />
          </div>
          
          {/* Lista de formularios */}
          <div className="p-6">
            <h2 className="text-xl text-white mb-6">Lista de formularios</h2>
            
            {/* Mensajes con scrollbar personalizado */}
            <div className="space-y-4 max-h-[calc(100vh-340px)] overflow-y-auto custom-scrollbar pr-2">
              {currentItems.map((formulario) => (
                <div 
                  key={formulario.id} 
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1C1650] transition-colors"
                >
                  {/* Información del remitente y su imagen - Con ancho fijo */}
                  <div className="flex items-center space-x-3 w-64 min-w-64 flex-shrink-0">
                    {/* Nombre y estrellas - Con ancho fijo */}
                    <div className="flex flex-col w-40 min-w-40">
                      <p className="text-sm text-white font-medium truncate">{formulario.nombre}</p>
                      <div className="text-xs">
                        {renderStars(formulario.estrellas)}
                      </div>
                    </div>
                    
                    {/* Imagen de perfil - Tamaño fijo */}
                    <img src={PerfilSvg} alt="Perfil" className="w-10 h-10 rounded-full flex-shrink-0" />
                  </div>
                  
                  {/* Mensaje - Con alineación vertical centrada */}
                  <div className="flex-1 flex items-center pl-4">
                    <p className="text-[#41D7FC]">{formulario.mensaje}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Controles de paginación */}
            <div className="flex justify-center mt-8 space-x-6">
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-[#1C1650] text-[#41D7FC] disabled:opacity-50"
                aria-label="Página anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-[#1C1650] text-[#41D7FC] disabled:opacity-50"
                aria-label="Página siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
