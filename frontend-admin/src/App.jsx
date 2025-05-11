import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Management from './pages/admin/Management'
import ContactForms from './pages/admin/ContactForms'
import Brands from './pages/admin/Brands'
import ProtectedRoute from './components/protected/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-primary)] text-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/management" element={<ProtectedRoute><Management /></ProtectedRoute>} />
          <Route path="/admin/contact-forms" element={<ProtectedRoute><ContactForms /></ProtectedRoute>} />
          <Route path="/admin/brands" element={<ProtectedRoute><Brands /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist</p>
    </div>
  )
}

export default App
