import React from 'react';
import { Link } from 'react-router-dom';
// Importamos motion de framer-motion para animaciones
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Users, Package, BarChart3, Flag, MessageSquare } from 'lucide-react';
import TechzyLogo from '../../assets/techzy.svg';

/**
 * Componente Gestion
 * 
 * Muestra una página de gestión con diferentes módulos/componentes CRUD
 * organizados en una disposición específica (2 componentes en la fila superior,
 * 3 componentes en la fila inferior).
 * 
 * Este componente sirve como un hub central para acceder a las diferentes
 * funcionalidades administrativas del sistema, proporcionando enlaces
 * a los distintos módulos CRUD para la gestión de entidades.
 * 
 * Cada módulo CRUD se representa visualmente como una tarjeta con un icono
 * y un título descriptivo, utilizando un diseño consistente para mantener
 * la coherencia visual en toda la aplicación.
 */
const Management = () => {
  /**
   * Componente interno CrudCard
   * 
   * Crea una tarjeta reutilizable para cada módulo CRUD con animación de entrada
   * utilizando Framer Motion. Cada tarjeta muestra un icono y un título.
   * 
   * @param {string} title - Título descriptivo del módulo CRUD
   * @param {ReactNode} icon - Icono de Lucide React que representa el módulo
   * @param {string} className - Clases CSS adicionales para personalización
   * @returns {JSX.Element} - Tarjeta animada con icono y título
   */
  const CrudCard = ({ title, icon, className }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#1C1650] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center h-full min-h-[240px] ${className}`}
    >
      <div className="text-[#8252F7] mb-4">
        {icon}
      </div>
      <h3 className="text-[#41D7FC] text-lg font-semibold text-center">{title}</h3>
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#0E0B30] text-white">
      {/* Barra de navegación */}
      <nav className="bg-[#1C1650] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={TechzyLogo} alt="Techzy Logo" className="h-8 w-8" />
            <span className="text-[#41D7FC] font-bold text-xl">Techzy Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard" className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] p-8 md:p-10 container mx-auto">
        {/* Título de bienvenida */}
        {/* Título principal de la sección */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#41D7FC]">Módulos de Gestión</h1>
        </div>

        {/* Grid de tarjetas CRUD */}
        {/* Contenedor principal con grid responsivo para organizar las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {/* Fila superior: 2 tarjetas */}
          <div className="col-span-1 md:col-span-1">
            <CrudCard 
              title="CRUD de Users"
              icon={<Users size={64} />} 
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <CrudCard 
              title="CRUD de Product" 
              icon={<Package size={64} />} 
            />
          </div>
          
          {/* Fila inferior: 3 tarjetas */}
          <div className="col-span-1">
            <CrudCard 
              title="CRUD de Assessment" 
              icon={<BarChart3 size={64} />} 
            />
          </div>
          <div className="col-span-1">
            <Link to="/admin/brands">
              <CrudCard 
                title="CRUD de Brand" 
                icon={<Flag size={64} />} 
              />
            </Link>
          </div>
          <div className="col-span-1">
            <Link to="/admin/contact-forms">
              <CrudCard 
                title="CRUD de ContactForm" 
                icon={<MessageSquare size={64} />} 
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;