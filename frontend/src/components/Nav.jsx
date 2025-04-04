import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar cuando el menu se abre o cierra
    const location = useLocation(); // Obtiene la ruta actual

    // Función para determinar si el enlace encendido
    const isActive = (path) => location.pathname === path ? "text-[#41D7FC] font-semibold" : "text-white";

    return (
        <nav className="bg-[#100537] p-4 text-white shadow-md z-50 relative">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo alineado a la izquierda con padding */}
                <Link to="/" className="flex items-center space-x-2 pl-4">
                    <img src="/techzy.svg" alt="Techzy Logo" className="h-10" />
                </Link>

                {/* Menú desplegable para pantallas pequeñas */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Ícono de menú hamburguesa */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Menú principal (Visible en pantallas grandes) */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li>
                        <Link to="/" className={`${isActive("/")} transition-colors duration-[1000ms] hover:text-[#41D7FC]`}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorias" className={`${isActive("/categorias")} transition-colors duration-[1000ms] hover:text-[#41D7FC]`}>
                            Categorías
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre-nosotros" className={`${isActive("/sobre-nosotros")} transition-colors duration-[1000ms] hover:text-[#41D7FC]`}>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto" className={`${isActive("/contacto")} transition-colors duration-[1000ms] hover:text-[#41D7FC]`}>
                            Contáctanos
                        </Link>
                    </li>
                </ul>

                {/* Íconos alineados a la derecha con espaciado */}
                <div className="flex items-center space-x-6 pr-4">
                    <Link to="/profile">
                        <img src="/user.png" alt="User" className="h-8" />
                    </Link>
                    <Link to="/cart">
                        <img src="/cart.png" alt="Cart" className="h-8" />
                    </Link>
                    <Link to="/favorites">
                        <img src="/favorites.png" alt="Favorites" className="h-8" />
                    </Link>
                </div>
            </div>

            {/* Menú desplegable en pantallas pequeñas */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#100537] p-4`}>
                <ul className="space-y-4 text-center">
                    <li>
                        <Link to="/" className={`${isActive("/")} block text-white`}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorias" className={`${isActive("/categorias")} block text-white`}>
                            Categorías
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre-nosotros" className={`${isActive("/sobre-nosotros")} block text-white`}>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto" className={`${isActive("/contacto")} block text-white`}>
                            Contáctanos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
