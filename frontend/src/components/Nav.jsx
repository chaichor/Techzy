import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "text-[#41D7FC] font-semibold" : "text-white";

    useEffect(() => {
        const handleScroll = () => {
            // Detectar si el scroll ha superado los 500px
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`p-4 text-white shadow-md z-50 transition-all duration-500 ease-in-out
                        ${isSticky ? 'bg-[#100537] rounded-lg backdrop-blur-lg py-2 scale-95 fixed top-0 left-0 right-0 shadow-[0_0_10px_4px_rgba(65,215,252,0.8)]' : 'bg-primary py-4 relative'}`}
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 pl-4">
                    <img src="/techzy.svg" alt="Techzy Logo" className={`h-10 transition-all duration-500 ${isSticky ? 'h-8' : 'h-10'}`} />
                </Link>

                {/* Menú desplegable para pantallas pequeñas */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Menú principal */}
                <ul className={`hidden md:flex space-x-8 text-lg transition-all duration-300 ${isSticky ? 'text-xl space-x-6' : 'text-lg space-x-8'}`}>
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

                {/* Íconos */}
                <div className="flex items-center space-x-6 pr-4">
                    <Link to="/">
                        <img src="/user.png" alt="User" className={`h-8 transition-all duration-300 ${isSticky ? 'h-10' : 'h-8'}`} />
                    </Link>
                    <Link to="/cart">
                        <img src="/cart.png" alt="Cart" className={`h-8 transition-all duration-300 ${isSticky ? 'h-10' : 'h-8'}`} />
                    </Link>
                    <Link to="/favorites">
                        <img src="/favorites.png" alt="Favorites" className={`h-8 transition-all duration-300 ${isSticky ? 'h-10' : 'h-8'}`} />
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





