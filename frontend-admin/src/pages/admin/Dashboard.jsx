import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Importamos motion de framer-motion para las animaciones de los componentes
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

/**
 * Componente Dashboard
 * 
 * Muestra un panel administrativo con estadísticas de ventas, gráficos y datos financieros
 * Incluye funcionalidad para cerrar sesión y mostrar información personalizada del usuario
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Administrador');

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

  useEffect(() => {
    // Obtener información del usuario al cargar el componente
    const userData = localStorage.getItem('adminUser');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.email);
    }
  }, []);

  /**
   * Maneja el proceso de cierre de sesión
   * 
   * Elimina la información del usuario y el token de autenticación del localStorage
   * y redirige al usuario a la página de inicio de sesión
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
      {/* Barra de navegación */}
      <nav className="bg-[#1C1650] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-[#41D7FC] font-bold text-xl">Techzy Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white hidden md:inline">Bienvenido, {userName}</span>
            <button
              onClick={handleLogout}
              className="bg-[#41D7FC] hover:bg-[#8252F7] text-[#100537] font-bold py-2 px-4 rounded transition duration-300"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex-grow p-10 mt-8 flex justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Tarjetas de resumen de ventas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas Hoy</p>
              <p className="text-2xl font-bold flex items-center">10 <span className="text-green-400 text-sm ml-2">↑</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas esta Semana</p>
              <p className="text-2xl font-bold flex items-center">19 <span className="text-yellow-400 text-sm ml-2">↘</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas este Mes</p>
              <p className="text-2xl font-bold flex items-center">39 <span className="text-green-400 text-sm ml-2">↑</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas últimos 3 Meses</p>
              <p className="text-2xl font-bold flex items-center">87 <span className="text-green-400 text-sm ml-2">↑</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas últimos 6 Meses</p>
              <p className="text-2xl font-bold flex items-center">135 <span className="text-red-400 text-sm ml-2">↓</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-3 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <p className="text-xs text-[#41D7FC]">Ventas en un Año</p>
              <p className="text-2xl font-bold flex items-center">347 <span className="text-red-400 text-sm ml-2">↓</span></p>
            </motion.div>
          </div>
          
          {/* Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-5 shadow-lg backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <h2 className="text-xl text-[#41D7FC] mb-4">Artículo mas comprado</h2>
              <Line data={lineChartData} options={lineOptions} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-5 shadow-lg backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <h2 className="text-xl text-[#41D7FC] mb-4">Mayores compras por Departamentos</h2>
              <Pie data={pieChartData} options={pieOptions} />
            </motion.div>
          </div>
          
          {/* Tarjetas de dinero generado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1C1650] rounded-lg p-6 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hoy</h2>
              <p className="text-3xl font-bold">$120</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1C1650] rounded-lg p-6 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hace 3 meses</h2>
              <p className="text-3xl font-bold">$7948</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1C1650] rounded-lg p-6 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
              <h2 className="text-lg text-[#41D7FC] mb-3">Dinero generado hace 6 meses</h2>
              <p className="text-3xl font-bold">$9850</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1C1650] rounded-lg p-6 shadow-md backdrop-blur-sm relative overflow-hidden" 
              style={{
                boxShadow: '0 0 15px 2px rgba(107, 226, 255, 0.5)',
                background: 'linear-gradient(180deg, rgba(28, 22, 80, 0.8) 0%, rgba(28, 22, 80, 0.9) 100%)'
              }}
            >
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
