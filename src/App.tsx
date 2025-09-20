import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ProcurementManagement from './pages/ProcurementManagement'
import TokenManagement from './pages/TokenManagement'
import FarmerManagement from './pages/FarmerManagement'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="procurement" element={<ProcurementManagement />} />
          <Route path="tokens" element={<TokenManagement />} />
          <Route path="farmers" element={<FarmerManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App