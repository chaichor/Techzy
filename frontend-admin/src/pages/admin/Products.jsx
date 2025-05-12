import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    PlusCircle,
    Edit2,
    Trash2,
    X,
    Flag,
    User,
    Package
} from 'lucide-react';
import TechzyLogo from '../../assets/techzy.svg';

const Products = () => {
    // Estado para almacenar las marcas
    const [marcas, setMarcas] = useState([
        { id: 1, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 2, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 3, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 4, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 5, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 6, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 7, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 8, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 9, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
        { id: 10, nombre: 'MCHOSE GX87', cantidad: 10, precio: 75, imagen: '/gx87_p.png' },
    ]);

    // Estado para el término de búsqueda
    const [busqueda, setBusqueda] = useState('');

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
                            <h1 className="text-2xl font-bold text-white">Productos</h1>
                            <Package size={26} className="text-[#41D7FC]" />
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
                    </div>

                    {/* Lista de marcas con scrollbar personalizado */}
                    <div className="bg-[#10083A] rounded-xl shadow-lg overflow-hidden">
                        <div className="max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
                            {marcasFiltradas().map((marca) => (
                                <div
                                    key={marca.id}
                                    className="flex items-center justify-between p-4 hover:bg-[#1C1650] transition-colors border-b border-[#1C1650]"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={marca.imagen}
                                            alt={marca.nombre}
                                            className="w-14 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-white font-semibold">{marca.nombre}</p>
                                            <p className="text-[#41D7FC] text-sm">${marca.precio}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-white">Cantidad: {marca.cantidad}</span>
                                        <button className="text-[#41D7FC] hover:text-white transition-colors">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => abrirModalEliminar(marca)} className="text-[#41D7FC] hover:text-red-500 transition-colors" aria-label={`Eliminar ${marca.nombre}`}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de confirmación para eliminar */}
            {mostrarModalEliminar && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#10083A] rounded-xl shadow-lg w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Eliminar Usuario</h2>
                            <button
                                onClick={cerrarModales}
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Cerrar modal"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-white mb-6">
                            ¿Está seguro que desea eliminar la marca "{marcaActual?.nombre} {marcaActual?.apellido}"?
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

export default Products;