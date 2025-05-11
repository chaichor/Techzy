import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute Component
 * 
 * This component implements route protection in the application by validating user authentication.
 * It's used as a wrapper around routes that should only be accessible to authenticated users.
 * 
 * How it works:
 * 1. It checks for the presence of an 'adminToken' in localStorage to determine if the user is authenticated.
 * 2. If authenticated, it renders the child components (the protected route content).
 * 3. If not authenticated, it redirects the user to the login page using React Router's Navigate component.
 * 
 * Implementation in App.jsx:
 * <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
 * 
 * Security considerations:
 * - This uses localStorage for token storage, which protects against page refreshes but not XSS attacks.
 * - For production environments, consider additional security measures like token validation and expiry checks.
 * - The replace prop in Navigate prevents the back button from returning to protected routes after logout.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - The child components to render if authenticated
 * @returns {JSX.Element} Either the protected content or a redirect to the login page
 */
const ProtectedRoute = ({ children }) => {
    // Check if an authentication token exists in localStorage
    const isAuthenticated = localStorage.getItem('adminToken') !== null;
    
    // If not authenticated, redirect to the login page
    // The 'replace' prop replaces the current entry in the history stack
    // instead of adding a new one, preventing back-button navigation to protected routes
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    
    // If authenticated, render the protected content (children components)
    return children;
};

export default ProtectedRoute;
