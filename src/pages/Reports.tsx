import { useState } from 'react'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('overview')
  const [dateRange, setDateRange] = useState('month')

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'procurement', name: 'Procurement', icon: '🏛️' },
    { id: 'farmers', name: 'Farmers', icon: '👨‍🌾' },
    { id: 'financial', name: 'Financial', icon: '💰' },
    { id: 'performance', name: 'Performance', icon: '📈' }
  ]

  const overviewData = {
    totalTransactions: 3780,
    totalValue: '₹2.8 Crores',
    avgTransactionValue: '₹7,407',
    topCrop: 'Wheat (45%)',
    topCenter: 'Sagar Main Mandi'
  }

  const procurementData = [
    { center: 'Sagar Main Mandi', volume: 1250, value: '₹95.5L', efficiency: '94%' },
    { center: 'Khurai Agricultural Center', volume: 980, value: '₹78.2L', efficiency: '91%' },
    { center: 'Banda Procurement Center', volume: 750, value: '₹58.8L', efficiency: '89%' },
    { center: 'Rehli Market Yard', volume: 800, value: '₹62.1L', efficiency: '92%' }
  ]

  const cropData = [
    { crop: 'Wheat', quantity: '1,850 quintals', value: '₹1.2 Cr', percentage: 45 },
    { crop: 'Soybean', quantity: '980 quintals', value: '₹85 L', percentage: 28 },
    { crop: 'Chickpea', quantity: '650 quintals', value: '₹45 L', percentage: 18 },
    { crop: 'Others', quantity: '320 quintals', value: '₹22 L', percentage: 9 }
  ]

  const performanceMetrics = [
    { metric: 'Average Wait Time', value: '25 minutes', target: '30 minutes', status: 'good' },
    { metric: 'Token Utilization', value: '87%', target: '80%', status: 'excellent' },
    { metric: 'Farmer Satisfaction', value: '4.6/5', target: '4.0/5', status: 'excellent' },
    { metric: 'System Uptime', value: '99.8%', target: '99%', status: 'excellent' },
    { metric: 'Payment Processing', value: '2.3 hours', target: '4 hours', status: 'good' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600'
      case 'good': return 'text-blue-600'
      case 'average': return 'text-yellow-600'
      case 'poor': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const renderOverviewReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-blue-100 text-sm mb-2">Total Transactions</h3>
          <p className="text-2xl font-bold">{overviewData.totalTransactions.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-green-100 text-sm mb-2">Total Value</h3>
          <p className="text-2xl font-bold">{overviewData.totalValue}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-purple-100 text-sm mb-2">Avg Transaction</h3>
          <p className="text-2xl font-bold">{overviewData.avgTransactionValue}</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <h3 className="text-orange-100 text-sm mb-2">Top Crop</h3>
          <p className="text-2xl font-bold">{overviewData.topCrop}</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
          <h3 className="text-teal-100 text-sm mb-2">Top Center</h3>
          <p className="text-xl font-bold">{overviewData.topCenter}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Crop Distribution</h3>
          <div className="space-y-4">
            {cropData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800">{item.crop}</span>
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{item.quantity}</span>
                    <span>{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{metric.metric}</p>
                  <p className="text-sm text-gray-600">Target: {metric.target}</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getStatusColor(metric.status)}`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">{metric.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderProcurementReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Procurement Center Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Center</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Volume (Quintals)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Value</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {procurementData.map((center, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{center.center}</td>
                  <td className="py-3 px-4">{center.volume.toLocaleString()}</td>
                  <td className="py-3 px-4 font-semibold text-green-600">{center.value}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {center.efficiency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive insights and data analysis</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            📊 Export PDF
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            📈 Generate Excel
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex space-x-4 overflow-x-auto">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedReport === type.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{type.icon}</span>
              <span>{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Report Content */}
      {selectedReport === 'overview' && renderOverviewReport()}
      {selectedReport === 'procurement' && renderProcurementReport()}

      {selectedReport === 'farmers' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Farmer Analytics</h3>
          <p className="text-gray-600">Detailed farmer engagement and activity reports coming soon...</p>
        </div>
      )}

      {selectedReport === 'financial' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Financial Reports</h3>
          <p className="text-gray-600">Revenue, payments, and financial analytics coming soon...</p>
        </div>
      )}

      {selectedReport === 'performance' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">System Performance</h3>
          <p className="text-gray-600">Detailed performance metrics and optimization reports coming soon...</p>
        </div>
      )}
    </div>
  )
}

export default Reports