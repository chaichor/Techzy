import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ProtectedRoute from './components/protected/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-primary)] text-white">
        <Routes>
          <Route path="/" element={<Login />} />
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
      <h1 className="text-3xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg">La página que buscas no existe</p>
    </div>
  )
}

export default App
