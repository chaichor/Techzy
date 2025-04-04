import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation(); // Obtiene la ruta actual

    // Función para determinar si el enlace está activo
    const isActive = (path) => location.pathname === path ? "text-[#41D7FC] font-semibold" : "text-white";

    return (
        <nav className="bg-[#100537] p-4 text-white shadow-md">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/techzy.svg" alt="Techzy Logo" className="h-10" />
                </Link>
                
                {/* Menu */}
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

                {/* Icons */}
                <div className="flex items-center space-x-6">
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
        </nav>
    );
};

export default Nav;
