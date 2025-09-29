import { useState } from 'react'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface ColdStorage {
  id: string
  name: string
  location: string
  capacity: number
  available: number
  pricePerQuintal: number
  rating: number
  contact: string
  email: string
  features: string[]
  certifications: string[]
  status: 'active' | 'maintenance' | 'inactive'
  registeredDate: string
  lastInspection: string
  licenseNumber: string
  ownerName: string
  temperature: {
    current: number
    min: number
    max: number
  }
  humidity: number
  bookings: number
  revenue: number
}

const ColdStorageManagement = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'facilities' | 'bookings' | 'analytics'>('overview')
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const coldStorages: ColdStorage[] = [
    {
      id: 'cs001',
      name: 'Sagar Advanced Cold Storage',
      location: 'Industrial Area, Sagar, MP',
      capacity: 5000,
      available: 1200,
      pricePerQuintal: 25,
      rating: 4.8,
      contact: '+91 9876543210',
      email: 'info@sagarcoldstorage.com',
      features: ['Temperature Control', 'Humidity Control', '24/7 Security', 'Easy Access', 'Loading Dock'],
      certifications: ['ISO 22000', 'HACCP', 'FSSAI License'],
      status: 'active',
      registeredDate: '2020-03-15',
      lastInspection: '2024-08-15',
      licenseNumber: 'CS-MP-2020-001',
      ownerName: 'Rajesh Kumar',
      temperature: { current: 2, min: 0, max: 4 },
      humidity: 85,
      bookings: 45,
      revenue: 125000
    },
    {
      id: 'cs002',
      name: 'Khurai Multi-Commodity Storage',
      location: 'Khurai, Sagar, MP',
      capacity: 3000,
      available: 800,
      pricePerQuintal: 22,
      rating: 4.5,
      contact: '+91 9876543211',
      email: 'manager@khuraistorage.com',
      features: ['Multi-Commodity', 'Quality Assurance', 'Insurance Coverage', 'Pest Control'],
      certifications: ['FSSAI License', 'Warehouse License'],
      status: 'active',
      registeredDate: '2019-07-22',
      lastInspection: '2024-07-30',
      licenseNumber: 'CS-MP-2019-015',
      ownerName: 'Sunita Devi',
      temperature: { current: 1, min: -1, max: 3 },
      humidity: 80,
      bookings: 32,
      revenue: 95000
    },
    {
      id: 'cs003',
      name: 'Banda Cooperative Cold Store',
      location: 'Banda, Sagar, MP',
      capacity: 2000,
      available: 500,
      pricePerQuintal: 20,
      rating: 4.2,
      contact: '+91 9876543212',
      email: 'banda.coop@storage.com',
      features: ['Cooperative', 'Low Cost', 'Government Backed', 'Farmer Friendly'],
      certifications: ['Cooperative License', 'FSSAI License'],
      status: 'maintenance',
      registeredDate: '2018-11-10',
      lastInspection: '2024-06-20',
      licenseNumber: 'CS-MP-2018-028',
      ownerName: 'Banda Farmer Cooperative',
      temperature: { current: 3, min: 1, max: 5 },
      humidity: 75,
      bookings: 28,
      revenue: 75000
    },
    {
      id: 'cs004',
      name: 'Rehli Premium Storage',
      location: 'Rehli Market Yard, MP',
      capacity: 4000,
      available: 2000,
      pricePerQuintal: 30,
      rating: 4.9,
      contact: '+91 9876543213',
      email: 'contact@rehlipremium.com',
      features: ['Premium Quality', 'Latest Technology', 'Quick Loading', 'Digital Monitoring'],
      certifications: ['ISO 22000', 'HACCP', 'Export License', 'Organic Certified'],
      status: 'active',
      registeredDate: '2021-01-20',
      lastInspection: '2024-09-10',
      licenseNumber: 'CS-MP-2021-005',
      ownerName: 'Modern Storage Ltd',
      temperature: { current: 0, min: -2, max: 2 },
      humidity: 90,
      bookings: 55,
      revenue: 180000
    }
  ]

  const getTotalStats = () => {
    return {
      totalFacilities: coldStorages.length,
      totalCapacity: coldStorages.reduce((sum, cs) => sum + cs.capacity, 0),
      totalAvailable: coldStorages.reduce((sum, cs) => sum + cs.available, 0),
      totalBookings: coldStorages.reduce((sum, cs) => sum + cs.bookings, 0),
      totalRevenue: coldStorages.reduce((sum, cs) => sum + cs.revenue, 0),
      activeFacilities: coldStorages.filter(cs => cs.status === 'active').length,
      avgRating: (coldStorages.reduce((sum, cs) => sum + cs.rating, 0) / coldStorages.length).toFixed(1)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'inactive': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '✅'
      case 'maintenance': return '🔧'
      case 'inactive': return '❌'
      default: return '❓'
    }
  }

  const stats = getTotalStats()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Cold Storage Management</h1>
          <p className="text-gray-600">Manage and monitor cold storage facilities</p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          ➕ Add New Facility
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Facilities</p>
                <p className="text-3xl font-bold text-blue-600">{stats.totalFacilities}</p>
                <p className="text-sm text-green-600">{stats.activeFacilities} active</p>
              </div>
              <div className="text-4xl">🏢</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Capacity</p>
                <p className="text-3xl font-bold text-purple-600">{stats.totalCapacity.toLocaleString()} MT</p>
                <p className="text-sm text-blue-600">{stats.totalAvailable.toLocaleString()} MT available</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bookings</p>
                <p className="text-3xl font-bold text-green-600">{stats.totalBookings}</p>
                <p className="text-sm text-gray-600">This month</p>
              </div>
              <div className="text-4xl">📋</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue</p>
                <p className="text-3xl font-bold text-orange-600">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
                <p className="text-sm text-gray-600">Avg rating: {stats.avgRating} ⭐</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: '📊 Overview', count: coldStorages.length },
            { id: 'facilities', label: '🏢 Facilities', count: stats.activeFacilities },
            { id: 'bookings', label: '📋 Bookings', count: stats.totalBookings },
            { id: 'analytics', label: '📈 Analytics', count: null }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label} {tab.count && `(${tab.count})`}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {selectedTab === 'facilities' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {coldStorages.map(storage => (
            <Card key={storage.id} hover>
              <CardContent>
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{storage.name}</h3>
                      <p className="text-gray-600">{storage.location}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(storage.status)}`}>
                        {getStatusIcon(storage.status)} {storage.status.charAt(0).toUpperCase() + storage.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Capacity & Pricing */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Capacity</p>
                      <p className="font-semibold">{storage.capacity} MT</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Available</p>
                      <p className="font-semibold text-green-600">{storage.available} MT</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-semibold">₹{storage.pricePerQuintal}/quintal</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-semibold">⭐ {storage.rating}</p>
                    </div>
                  </div>

                  {/* Environmental Conditions */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Temperature</p>
                        <p className="font-semibold text-blue-600">
                          {storage.temperature.current}°C (Range: {storage.temperature.min}°C to {storage.temperature.max}°C)
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Humidity</p>
                        <p className="font-semibold text-blue-600">{storage.humidity}%</p>
                      </div>
                    </div>
                  </div>

                  {/* Features & Certifications */}
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {storage.features.map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Certifications:</p>
                      <div className="flex flex-wrap gap-1">
                        {storage.certifications.map((cert, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            ✓ {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Monthly Bookings</p>
                      <p className="font-semibold">{storage.bookings}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue</p>
                      <p className="font-semibold">₹{storage.revenue.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      📞 Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      📊 Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      ✏️ Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>📊 Facility Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Utilization Rate</span>
                  <span className="font-semibold">
                    {(((stats.totalCapacity - stats.totalAvailable) / stats.totalCapacity) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${(((stats.totalCapacity - stats.totalAvailable) / stats.totalCapacity) * 100)}%`
                    }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-sm text-gray-600">Avg Price</p>
                    <p className="font-semibold">₹{Math.round(coldStorages.reduce((sum, cs) => sum + cs.pricePerQuintal, 0) / coldStorages.length)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Best Rating</p>
                    <p className="font-semibold">⭐ {Math.max(...coldStorages.map(cs => cs.rating))}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>🔔 Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg">🏢</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New facility registered</p>
                    <p className="text-xs text-gray-600">Rehli Premium Storage completed verification</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-lg">📋</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Booking milestone reached</p>
                    <p className="text-xs text-gray-600">Sagar Advanced crossed 50 bookings this month</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="text-lg">🔧</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Maintenance scheduled</p>
                    <p className="text-xs text-gray-600">Banda Cooperative scheduled for inspection</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTab === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>📈 Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-gray-600">Revenue Analytics Chart</p>
                  <p className="text-sm text-gray-500">Monthly revenue comparison</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capacity Utilization */}
          <Card>
            <CardHeader>
              <CardTitle>📦 Capacity Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">🥧</div>
                  <p className="text-gray-600">Capacity Utilization</p>
                  <p className="text-sm text-gray-500">Storage utilization by facility</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default ColdStorageManagement