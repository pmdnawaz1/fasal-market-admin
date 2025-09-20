import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/procurement', label: 'Procurement Management', icon: '🏛️' },
    { path: '/tokens', label: 'Token Management', icon: '🎫' },
    { path: '/farmers', label: 'Farmer Management', icon: '👨‍🌾' },
    { path: '/reports', label: 'Reports & Analytics', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ]

  return (
    <div className="w-64 bg-blue-800 shadow-lg flex flex-col h-screen fixed z-10">
      <div className="p-4 border-b border-blue-700 bg-blue-900">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center border border-gray-300">
            <span className="text-blue-800 font-bold text-lg">🌾</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Kisan Suvidha</h1>
            <p className="text-xs text-blue-200">Admin Panel</p>
            <p className="text-xs text-blue-300">कृषि विभाग</p>
          </div>
        </div>
      </div>

      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white border border-blue-500'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-blue-700 bg-blue-900 mt-auto">
        <div className="flex items-center space-x-3 px-2 py-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center border border-blue-500">
            <span className="text-sm text-white">👤</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">राज कुमार</p>
            <p className="text-xs text-blue-200">District Officer</p>
            <p className="text-xs text-blue-300">ID: DO2024001</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar