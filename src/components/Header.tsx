import { useState } from 'react'

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    { id: 1, message: 'New farmer registration from Sagar district', time: '5 min ago', type: 'info' },
    { id: 2, message: 'Wheat procurement drive completed successfully', time: '1 hour ago', type: 'success' },
    { id: 3, message: 'Token system maintenance scheduled for tonight', time: '2 hours ago', type: 'warning' }
  ]

  return (
    <header className="bg-white shadow-sm border-b-2 border-blue-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-blue-800">Government Admin Panel</h2>
          <p className="text-gray-600">मध्य प्रदेश कृषि विभाग • Madhya Pradesh Agricultural Department</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors border border-gray-200"
            >
              <span className="text-xl">🔔</span>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </div>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-2">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-2">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center border border-blue-700">
              <span className="text-white font-bold">👤</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">राज कुमार</p>
              <p className="text-xs text-gray-600">District Officer, Sagar</p>
              <p className="text-xs text-gray-500">Officer ID: DO2024001</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header