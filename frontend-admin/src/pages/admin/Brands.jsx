import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  PlusCircle, 
  Edit2, 
  Trash2, 
  X, 
  Flag, 
  RefreshCw
} from 'lucide-react';
import TechzyLogo from '../../assets/techzy.svg';

/**
 * Brands Component
 * 
 * Permite la gestión de marcas en el sistema, incluyendo listado,
 * búsqueda, adición, edición y eliminación.
 * 
 * Este componente implementa funcionalidad CRUD completa para marcas
 * con una interfaz intuitiva y consistente con el diseño de la aplicación.
 */
const Brands = () => {
  // Estado para almacenar las marcas
  const [marcas, setMarcas] = useState([
    { id: 1, nombre: 'Ajazz' },
    { id: 2, nombre: 'GammaKay' },
    { id: 3, nombre: 'Wooting' },
    { id: 4, nombre: 'ProKeycaps' },
    { id: 5, nombre: 'KeyLab' },
    { id: 6, nombre: 'SwitchKing' },
    { id: 7, nombre: 'RealLifeKey' },
    { id: 8, nombre: 'KeyboardA' },
    { id: 9, nombre: 'MechanicTools' },
    { id: 10, nombre: 'DactylMods' },
    { id: 11, nombre: 'ClickyKeys' },
    { id: 12, nombre: 'SwitchMaster' },
    { id: 13, nombre: 'ErgoType' },
    { id: 14, nombre: 'TactileTech' },
    { id: 15, nombre: 'QMKBoards' },
    { id: 16, nombre: 'KeebWorks' },
    { id: 17, nombre: 'ViaKeyboards' },
    { id: 18, nombre: 'GMKClones' },
    { id: 19, nombre: 'ArtisanCaps' },
    { id: 20, nombre: 'ZealPC' }
  ]);

  // Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState('');
  
  // Estado para controlar la visibilidad del modal de agregar
  const [mostrarModalAgregar, setMostrarModalAgregar] = useState(false);
  
  // Estado para controlar la visibilidad del modal de editar
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  
  // Estado para controlar la visibilidad del modal de eliminar
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);
  
  // Estado para almacenar la marca actual que se está editando o eliminando
  const [marcaActual, setMarcaActual] = useState(null);
  
  // Estado para el nombre de la nueva marca o la marca editada
  const [nombreMarca, setNombreMarca] = useState('');

  // Calcular el número total de marcas para mostrar en el encabezado
  const cantidadMarcas = marcas.length;

  /**
   * Filtra las marcas basadas en el término de búsqueda
   * @returns {Array} - Lista de marcas filtradas
   */
  const marcasFiltradas = () => {
    if (!busqueda) return marcas;
    
    return marcas.filter(marca => 
      marca.nombre.toLowerCase().includes(busqueda.toLowerCase())
    ).sort((a, b) => a.nombre.localeCompare(b.nombre)); // Sort A-Z
  };

  /**
   * Maneja el cambio en el campo de búsqueda
   * @param {Event} e - Evento de cambio
   */
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  /**
   * Abre el modal para agregar una nueva marca
   */
  const abrirModalAgregar = () => {
    setNombreMarca('');
    setMostrarModalAgregar(true);
  };

  /**
   * Abre el modal para editar una marca existente
   * @param {Object} marca - La marca a editar
   */
  const abrirModalEditar = (marca) => {
    setMarcaActual(marca);
    setNombreMarca(marca.nombre);
    setMostrarModalEditar(true);
  };

  /**
   * Abre el modal de confirmación para eliminar una marca
   * @param {Object} marca - La marca a eliminar
   */
  const abrirModalEliminar = (marca) => {
    setMarcaActual(marca);
    setMostrarModalEliminar(true);
  };

  /**
   * Cierra todos los modales
   */
  const cerrarModales = () => {
    setMostrarModalAgregar(false);
    setMostrarModalEditar(false);
    setMostrarModalEliminar(false);
    setMarcaActual(null);
    setNombreMarca('');
  };

  /**
   * Agrega una nueva marca a la lista
   */
  const agregarMarca = () => {
    if (nombreMarca.trim() === '') return;
    
    const nuevaMarca = {
      id: marcas.length > 0 ? Math.max(...marcas.map(m => m.id)) + 1 : 1,
      nombre: nombreMarca
    };
    
    setMarcas([...marcas, nuevaMarca]);
    cerrarModales();
  };

  /**
   * Actualiza una marca existente
   */
  const actualizarMarca = () => {
    if (nombreMarca.trim() === '' || !marcaActual) return;
    
    setMarcas(marcas.map(marca => 
      marca.id === marcaActual.id 
        ? { ...marca, nombre: nombreMarca } 
        : marca
    ));
    
    cerrarModales();
  };

  /**
   * Elimina una marca de la lista
   */
  const eliminarMarca = () => {
    if (!marcaActual) return;
    
    setMarcas(marcas.filter(marca => marca.id !== marcaActual.id));
    cerrarModales();
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
            <div className="text-[#41D7FC]">
              Cantidad: {cantidadMarcas}
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
                value={busqueda}
                onChange={handleBusquedaChange}
                className="bg-[#1C1650] text-white placeholder-gray-400 w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
              />
            </div>
            <button
              onClick={abrirModalAgregar}
              className="flex items-center justify-center space-x-2 bg-[#1C1650] hover:bg-[#41D7FC] hover:text-[#0E0B30] text-[#41D7FC] py-2 px-4 rounded-lg transition-colors"
            >
              <PlusCircle size={18} />
              <span>Agregar</span>
            </button>
          </div>
          
          {/* Lista de marcas con scrollbar personalizado */}
          <div className="bg-[#10083A] rounded-xl shadow-lg overflow-hidden">
            <div className="max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
              {marcasFiltradas().map((marca) => (
                <div 
                  key={marca.id} 
                  className="flex items-center justify-between p-4 border-b border-[#1C1650] hover:bg-[#1C1650] transition-colors"
                >
                  <span className="text-white">{marca.nombre}</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => abrirModalEditar(marca)}
                      className="text-[#41D7FC] hover:text-white transition-colors"
                      aria-label={`Editar ${marca.nombre}`}
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => abrirModalEliminar(marca)}
                      className="text-[#41D7FC] hover:text-red-500 transition-colors"
                      aria-label={`Eliminar ${marca.nombre}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para agregar marca */}
      {mostrarModalAgregar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Agregar Marca</h2>
              <button
                onClick={cerrarModales}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nombre de la marca"
              value={nombreMarca}
              onChange={(e) => setNombreMarca(e.target.value)}
              className="bg-[#1C1650] text-white w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
            />
            <button
              onClick={agregarMarca}
              className="w-full bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Agregar
            </button>
          </div>
        </div>
      )}

      {/* Modal para editar marca */}
      {mostrarModalEditar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Editar Marca</h2>
              <button
                onClick={cerrarModales}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nombre de la marca"
              value={nombreMarca}
              onChange={(e) => setNombreMarca(e.target.value)}
              className="bg-[#1C1650] text-white w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#41D7FC]"
            />
            <button
              onClick={actualizarMarca}
              className="w-full bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Actualizar
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación para eliminar */}
      {mostrarModalEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Eliminar Marca</h2>
              <button
                onClick={cerrarModales}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-white mb-6">
              ¿Está seguro que desea eliminar la marca "{marcaActual?.nombre}"?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={cerrarModales}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={eliminarMarca}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
