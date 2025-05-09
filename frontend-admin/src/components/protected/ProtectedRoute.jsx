import { Navigate } from 'react-router-dom';

// Componente para proteger rutas que requieren autenticación
const ProtectedRoute = ({ children }) => {
    // Verificar si existe un token en localStorage
    const isAuthenticated = localStorage.getItem('adminToken') !== null;
    
    // Si no está autenticado, redirigir al login
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    
    // Si está autenticado, mostrar el contenido de la ruta
    return children;
};

export default ProtectedRoute;
