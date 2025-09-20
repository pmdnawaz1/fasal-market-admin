import { useState } from 'react'

const FarmerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const farmers = [
    {
      id: 'F001',
      name: 'राम प्रसाद शर्मा',
      phone: '+91 98765 43210',
      village: 'सरिया',
      district: 'सागर',
      farmSize: '5 एकड़',
      crops: ['गेहूं', 'सोयाबीन'],
      kccNumber: 'KCC123456789',
      status: 'Verified',
      totalSales: 12,
      totalEarnings: '₹2,45,000',
      lastActive: '2024-09-22',
      joinDate: '2024-01-15'
    },
    {
      id: 'F002',
      name: 'श्याम सिंह',
      phone: '+91 87654 32109',
      village: 'खुराई',
      district: 'सागर',
      farmSize: '8 एकड़',
      crops: ['चना', 'मक्का'],
      kccNumber: 'KCC987654321',
      status: 'Pending',
      totalSales: 8,
      totalEarnings: '₹1,85,000',
      lastActive: '2024-09-21',
      joinDate: '2024-02-10'
    },
    {
      id: 'F003',
      name: 'गीता देवी',
      phone: '+91 76543 21098',
      village: 'बांदा',
      district: 'सागर',
      farmSize: '3 एकड़',
      crops: ['गेहूं', 'चना'],
      kccNumber: 'KCC456789123',
      status: 'Verified',
      totalSales: 15,
      totalEarnings: '₹3,20,000',
      lastActive: '2024-09-23',
      joinDate: '2023-11-20'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredFarmers = farmers.filter(farmer => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farmer.phone.includes(searchTerm) ||
                         farmer.village.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === 'all' || farmer.status.toLowerCase() === selectedFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Farmer Management</h1>
          <p className="text-gray-600">Manage registered farmers and their profiles</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            📊 Export Data
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            📱 Send Bulk SMS
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Farmers</p>
              <p className="text-3xl font-bold">15,420</p>
            </div>
            <div className="text-4xl">👨‍🌾</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Verified</p>
              <p className="text-3xl font-bold">12,850</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pending</p>
              <p className="text-3xl font-bold">2,570</p>
            </div>
            <div className="text-4xl">⏳</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Active Today</p>
              <p className="text-3xl font-bold">1,280</p>
            </div>
            <div className="text-4xl">🔥</div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, phone, or village..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Farmers List */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">
            Farmer Directory ({filteredFarmers.length} farmers)
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredFarmers.map((farmer) => (
            <div key={farmer.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">👨‍🌾</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{farmer.name}</h4>
                    <p className="text-gray-600">{farmer.phone}</p>
                    <p className="text-sm text-gray-500">{farmer.village}, {farmer.district}</p>
                    <p className="text-sm text-gray-500">Farmer ID: {farmer.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(farmer.status)}`}>
                  {farmer.status}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Farm Size</p>
                  <p className="font-semibold">{farmer.farmSize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Crops</p>
                  <div className="flex flex-wrap gap-1">
                    {farmer.crops.map((crop, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Sales</p>
                  <p className="font-semibold">{farmer.totalSales}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="font-semibold text-green-600">{farmer.totalEarnings}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Active</p>
                  <p className="font-semibold">{new Date(farmer.lastActive).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">KCC Number</p>
                  <p className="font-semibold text-xs">{farmer.kccNumber}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                  📄 View Profile
                </button>
                <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm">
                  📊 Sales History
                </button>
                <button className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm">
                  📱 Contact
                </button>
                {farmer.status === 'Pending' && (
                  <>
                    <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm">
                      ✅ Approve
                    </button>
                    <button className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm">
                      ❌ Reject
                    </button>
                  </>
                )}
                <button className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors text-sm">
                  ✏️ Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No farmers found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FarmerManagement