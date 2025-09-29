import { useState } from 'react'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'

const SystemAnalytics = () => {
  const [timeframe, setTimeframe] = useState('today')

  const systemMetrics = {
    serverHealth: {
      status: 'Healthy',
      uptime: '99.98%',
      responseTime: '125ms',
      errorRate: '0.02%'
    },
    userActivity: {
      activeUsers: 2847,
      newRegistrations: 145,
      totalSessions: 5623,
      avgSessionTime: '8m 45s'
    },
    transactionMetrics: {
      totalTransactions: 1254,
      successRate: '99.87%',
      failedTransactions: 2,
      totalVolume: '₹12.8 Cr'
    },
    platformUsage: [
      { platform: 'Mobile App', users: 2156, percentage: 75.7 },
      { platform: 'Web Portal', users: 691, percentage: 24.3 }
    ]
  }

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High server load detected on Database Server 2',
      time: '5 minutes ago',
      status: 'investigating'
    },
    {
      id: 2,
      type: 'info',
      message: 'Scheduled maintenance completed successfully',
      time: '2 hours ago',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'error',
      message: 'Payment gateway timeout - 3 transactions affected',
      time: '4 hours ago',
      status: 'resolved'
    }
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error': return '🔴'
      case 'warning': return '🟡'
      case 'info': return '🔵'
      default: return '⚪'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600'
      case 'investigating': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">System Analytics</h1>
          <p className="text-gray-600">Real-time system performance and health monitoring</p>
        </div>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">System Status</p>
                <p className="text-2xl font-bold text-green-600">
                  {systemMetrics.serverHealth.status}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Uptime: {systemMetrics.serverHealth.uptime}
                </p>
              </div>
              <div className="text-4xl">🟢</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-2xl font-bold text-blue-600">
                  {systemMetrics.serverHealth.responseTime}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  ↓ 15ms from yesterday
                </p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-purple-600">
                  {systemMetrics.userActivity.activeUsers.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  +{systemMetrics.userActivity.newRegistrations} new today
                </p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold text-green-600">
                  {systemMetrics.serverHealth.errorRate}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Well within limits
                </p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>💳 Transaction Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Total Transactions</p>
                  <p className="text-xl font-bold text-gray-900">
                    {systemMetrics.transactionMetrics.totalTransactions}
                  </p>
                </div>
                <div className="text-2xl">📊</div>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-xl font-bold text-green-600">
                    {systemMetrics.transactionMetrics.successRate}
                  </p>
                </div>
                <div className="text-2xl">✅</div>
              </div>

              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Failed Transactions</p>
                  <p className="text-xl font-bold text-red-600">
                    {systemMetrics.transactionMetrics.failedTransactions}
                  </p>
                </div>
                <div className="text-2xl">❌</div>
              </div>

              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Transaction Volume</p>
                  <p className="text-xl font-bold text-purple-600">
                    {systemMetrics.transactionMetrics.totalVolume}
                  </p>
                </div>
                <div className="text-2xl">💰</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Usage */}
        <Card>
          <CardHeader>
            <CardTitle>📱 Platform Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemMetrics.platformUsage.map((platform, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      {platform.platform}
                    </span>
                    <span className="text-sm text-gray-600">
                      {platform.users.toLocaleString()} users ({platform.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0 ? 'bg-blue-600' : 'bg-green-600'
                      }`}
                      style={{ width: `${platform.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Session Analytics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Total Sessions</p>
                  <p className="font-semibold text-gray-900">
                    {systemMetrics.userActivity.totalSessions.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Avg Session Time</p>
                  <p className="font-semibold text-gray-900">
                    {systemMetrics.userActivity.avgSessionTime}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>🚨 System Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map(alert => (
              <div key={alert.id} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl">{getAlertIcon(alert.type)}</div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{alert.message}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-600">{alert.time}</p>
                    <span className={`text-sm font-medium ${getStatusColor(alert.status)}`}>
                      {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>📈 CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-600">CPU Usage Chart</p>
                <p className="text-sm text-gray-500">Real-time monitoring dashboard</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💾 Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-gray-600">Memory Usage Chart</p>
                <p className="text-sm text-gray-500">Real-time monitoring dashboard</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SystemAnalytics