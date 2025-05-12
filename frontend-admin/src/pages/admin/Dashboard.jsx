import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TechzyLogo from '../../assets/techzy.svg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

/**
 * Componente Dashboard
 * 
 * Muestra un panel administrativo con estadísticas de ventas, gráficos y datos financieros.
 * Incluye funcionalidad para cerrar sesión y mostrar información personalizada del usuario.
 * 
 * Este tablero principal sirve como centro de control para administradores, proporcionando
 * una visión general de las métricas clave del negocio a través de visualizaciones de datos
 * interactivas y responsivas. Implementa gráficos de líneas y circulares para representar
 * tendencias de ventas por producto y distribución geográfica respectivamente.
 * 
 * La interfaz incluye:
 * - Barra de navegación superior con logo e información del usuario
 * - Botón de gestión para acceder a los módulos CRUD
 * - Tarjetas de resumen para estadísticas rápidas
 * - Gráficos interactivos para análisis visual de datos
 * - Diseño responsivo adaptable a diferentes tamaños de pantalla
 * 
 * @returns {JSX.Element} Componente Dashboard renderizado
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Administrador');

  /**
   * Configuración de datos para el gráfico de líneas
   * 
   * Define las series de datos para visualizar las ventas de diferentes
   * categorías de productos (teclados mecánicos, keycaps, switches) a lo largo del tiempo.
   * Cada serie tiene su propio color, estilo de línea y puntos para facilitar
   * la diferenciación visual entre categorías.
   */
  // Datos para el gráfico de líneas
  const lineChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Teclados mecánicos',
        data: [200, 350, 550, 300, 250, 450, 350, 500],
        borderColor: '#F3B0F9',
        backgroundColor: 'rgba(243, 176, 249, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#F3B0F9',
      },
      {
        label: 'Keycaps',
        data: [150, 300, 400, 600, 350, 280, 420, 380],
        borderColor: '#8252F7',
        backgroundColor: 'rgba(130, 82, 247, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#8252F7',
      },
      {
        label: 'Switches',
        data: [100, 200, 250, 300, 450, 380, 270, 550],
        borderColor: '#8DDCFE',
        backgroundColor: 'rgba(141, 220, 254, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: '#8DDCFE',
      }
    ],
  };

  /**
   * Configuración de opciones para el gráfico de líneas
   * 
   * Define la apariencia, comportamiento y estilo del gráfico de líneas,
   * incluyendo la configuración de ejes, leyendas, tooltips y animaciones.
   * El diseño se adapta a la paleta de colores del tema oscuro de la aplicación.
   */
  // Opciones para el gráfico de líneas
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            family: "'Poppins', sans-serif",
            size: 10
          }
        },
        boxHeight: 8,
        boxWidth: 8
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(14, 11, 48, 0.9)',
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 12
        },
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 11
        },
        padding: 10,
        borderColor: '#8252F7',
        borderWidth: 1,
        displayColors: false
      }
    },
    scales: {
      y: {
        ticks: { 
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: "'Poppins', sans-serif",
            size: 9
          },
          maxTicksLimit: 5
        },
        grid: { 
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false
        },
        border: { display: false }
      },
      x: {
        ticks: { 
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: "'Poppins', sans-serif",
            size: 9
          }
        },
        grid: { 
          display: false
        },
        border: { display: false }
      }
    },
    animation: {
      duration: 2000,
    }
  };

  /**
   * Configuración de datos para el gráfico circular
   * 
   * Define los datos para visualizar la distribución geográfica de ventas
   * por ubicación, asignando un color específico a cada región para facilitar
   * la identificación visual de los segmentos más relevantes.
   */
  // Datos para el gráfico circular
  const pieChartData = {
    labels: ['San Salvador', 'Soyapango', 'Olocuilta', 'Sonsonate', 'Cabañas'],
    datasets: [
      {
        data: [35, 20, 15, 12, 18],
        backgroundColor: [
          '#6BE2FF',
          '#629DFA',
          '#6B89FF',
          '#7773FF',
          '#35B3DC',
        ],
        borderWidth: 0,
        hoverOffset: 15,
      },
    ],
  };

  /**
   * Configuración de opciones para el gráfico circular
   * 
   * Define la apariencia, comportamiento y estilo del gráfico circular,
   * incluyendo la posición de leyendas, estilo de tooltips, animaciones
   * y el recorte central para crear un efecto de dona (doughnut chart).
   */
  // Opciones para el gráfico circular
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white',
          font: {
            family: "'Poppins', sans-serif",
            size: 10
          },
          padding: 15
        },
        boxHeight: 8,
        boxWidth: 8
      },
      tooltip: {
        backgroundColor: 'rgba(14, 11, 48, 0.9)',
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 12
        },
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 11
        },
        padding: 10,
        borderColor: '#6BE2FF',
        borderWidth: 1,
        displayColors: false
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
    cutout: '65%'
  };

  /**
   * Efecto para obtener y mostrar la información del usuario al cargar el componente
   * 
   * Se ejecuta una sola vez al montar el componente. Recupera los datos del usuario
   * almacenados en localStorage durante el inicio de sesión para personalizar la interfaz
   * con información específica del usuario actual (por ejemplo, mostrar su email).
   */
  useEffect(() => {
    // Obtener información del usuario al cargar el componente
    const userData = localStorage.getItem('adminUser');
    if (userData) {
      // Parsear el JSON almacenado y extraer el email del usuario
      const user = JSON.parse(userData);
      setUserName(user.email);
    }
  }, []);

  /**
   * Maneja el proceso de cierre de sesión
   * 
   * Elimina la información del usuario y el token de autenticación del localStorage
   * y redirige al usuario a la página de inicio de sesión. Esta función se ejecuta
   * cuando el usuario hace clic en el botón "Cerrar Sesión" en la barra de navegación.
   * 
   * @returns {void}
   */
  const handleLogout = () => {
    // Eliminar el token y la información del usuario
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    // Redirigir al login
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0E0B30] text-white">
      {/* Barra de navegación - Contiene logo, título, botón de gestión y opciones de usuario */}
      <nav className="bg-[#1C1650] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo y título de la aplicación */}
          <div className="flex items-center space-x-2">
            <img src={TechzyLogo} alt="Techzy Logo" className="h-8 w-8" />
            <span className="text-[#41D7FC] font-bold text-xl">Techzy Admin</span>
          </div>
          
          {/* Controles de usuario: botón de gestión, saludo y cierre de sesión */}
          <div className="flex items-center space-x-4">
            {/* Botón para navegar a la página de gestión de módulos CRUD */}
            <Link 
              to="/admin/management" 
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Ir a la página de gestión">
              Gestión
            </Link>
            
            {/* Mensaje de bienvenida personalizado (oculto en móviles) */}
            <span className="text-white hidden md:inline">Bienvenido, {userName}</span>
            
            {/* Botón para cerrar sesión */}
            <button
              onClick={handleLogout}
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Cerrar sesión"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal - Sección central con estadísticas y gráficos */}
      <div className="flex-grow p-10 mt-8 flex justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Tarjetas de resumen de ventas - Muestra estadísticas rápidas en pequeñas tarjetas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]"
>
  <p className="text-xs text-[#41D7FC]">Ventas Hoy</p>
  <p className="text-2xl font-bold flex items-center">10 <span className="text-green-400 text-sm ml-2">↑</span></p>
</motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" 
            >
              <p className="text-xs text-[#41D7FC]">Ventas esta Semana</p>
              <p className="text-2xl font-bold flex items-center">19 <span className="text-yellow-400 text-sm ml-2">↘</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" 

            >
              <p className="text-xs text-[#41D7FC]">Ventas este Mes</p>
              <p className="text-2xl font-bold flex items-center">39 <span className="text-green-400 text-sm ml-2">↑</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" 
            >
              <p className="text-xs text-[#41D7FC]">Ventas últimos 3 Meses</p>
              <p className="text-2xl font-bold flex items-center">87 <span className="text-green-400 text-sm ml-2">↑</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <p className="text-xs text-[#41D7FC]">Ventas últimos 6 Meses</p>
              <p className="text-2xl font-bold flex items-center">135 <span className="text-red-400 text-sm ml-2">↓</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <p className="text-xs text-[#41D7FC]">Ventas en un Año</p>
              <p className="text-2xl font-bold flex items-center">347 <span className="text-red-400 text-sm ml-2">↓</span></p>
            </motion.div>
          </div>
          
          {/* Gráficos - Visualizaciones interactivas de datos de ventas y distribución */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-xl text-[#41D7FC] mb-4">Artículo mas comprado</h2>
              <Line data={lineChartData} options={lineOptions} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-xl text-[#41D7FC] mb-4">Mayores compras por Departamentos</h2>
              <Pie data={pieChartData} options={pieOptions} />
            </motion.div>
          </div>
          
          {/* Tarjetas de dinero generado - Métricas financieras en diferentes períodos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hoy</h2>
              <p className="text-3xl font-bold">$120</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hace 3 meses</h2>
              <p className="text-3xl font-bold">$7948</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hace 6 meses</h2>
              <p className="text-3xl font-bold">$9850</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1C1650] rounded-lg p-3 relative overflow-hidden transition duration-300 hover:ring-2 hover:ring-[#6BE2FF] hover:scale-[1.02]" >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado desde siempre</h2>
              <p className="text-3xl font-bold">$145,459</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
