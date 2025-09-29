import { useState } from 'react'

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today')

  const stats = {
    totalFarmers: 15420,
    activeProcurement: 8,
    pendingTokens: 1250,
    completedSales: 3780,
    totalRevenue: '₹2.8 Cr',
    avgWaitTime: '25 min'
  }

  const recentActivity = [
    { id: 1, type: 'farmer', message: 'New farmer registered: Ram Prasad (Sagar)', time: '5 minutes ago', icon: '👨‍🌾' },
    { id: 2, type: 'procurement', message: 'Wheat procurement started at Khurai Mandi', time: '15 minutes ago', icon: '🌾' },
    { id: 3, type: 'token', message: '47 new tokens issued for today', time: '32 minutes ago', icon: '🎫' },
    { id: 4, type: 'payment', message: 'Payment processed: ₹2.47L to farmers', time: '1 hour ago', icon: '💰' }
  ]

  const procurementCenters = [
    { name: 'Sagar Main Mandi', status: 'Active', farmers: 45, pending: 12, completed: 33 },
    { name: 'Khurai Agricultural Center', status: 'Active', farmers: 32, pending: 8, completed: 24 },
    { name: 'Banda Procurement Center', status: 'Closed', farmers: 28, pending: 0, completed: 28 },
    { name: 'Rehli Market Yard', status: 'Active', farmers: 38, pending: 15, completed: 23 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Real-time insights into agricultural procurement</p>
        </div>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Registered Farmers</p>
              <p className="text-3xl font-bold">{stats.totalFarmers.toLocaleString()}</p>
              <p className="text-blue-100 text-sm mt-1">+125 this week</p>
            </div>
            <div className="text-4xl">👨‍🌾</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Procurement Centers</p>
              <p className="text-3xl font-bold">{stats.activeProcurement}</p>
              <p className="text-green-100 text-sm mt-1">Out of 12 total centers</p>
            </div>
            <div className="text-4xl">🏛️</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Pending Tokens</p>
              <p className="text-3xl font-bold">{stats.pendingTokens}</p>
              <p className="text-purple-100 text-sm mt-1">Avg wait: {stats.avgWaitTime}</p>
            </div>
            <div className="text-4xl">🎫</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Completed Sales Today</p>
              <p className="text-3xl font-bold">{stats.completedSales}</p>
              <p className="text-orange-100 text-sm mt-1">Total volume: 850 quintals</p>
            </div>
            <div className="text-4xl">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm">Total Revenue Processed</p>
              <p className="text-3xl font-bold">{stats.totalRevenue}</p>
              <p className="text-teal-100 text-sm mt-1">This month</p>
            </div>
            <div className="text-4xl">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">System Efficiency</p>
              <p className="text-3xl font-bold">94%</p>
              <p className="text-indigo-100 text-sm mt-1">↑ 8% from last month</p>
            </div>
            <div className="text-4xl">⚡</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
            View All Activity →
          </button>
        </div>

        {/* Procurement Centers Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Procurement Centers</h3>
          <div className="space-y-4">
            {procurementCenters.map((center, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{center.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    center.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {center.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Total Farmers</p>
                    <p className="font-semibold">{center.farmers}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Pending</p>
                    <p className="font-semibold text-orange-600">{center.pending}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Completed</p>
                    <p className="font-semibold text-green-600">{center.completed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <span className="text-3xl mb-2">🆕</span>
            <span className="text-sm font-medium text-blue-800">Create Procurement Drive</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <span className="text-3xl mb-2">🎫</span>
            <span className="text-sm font-medium text-green-800">Manage Tokens</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <span className="text-3xl mb-2">📊</span>
            <span className="text-sm font-medium text-purple-800">Generate Report</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
            <span className="text-3xl mb-2">📢</span>
            <span className="text-sm font-medium text-orange-800">Send Notification</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard