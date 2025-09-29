import { useState } from 'react'
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import Button from '../components/ui/Button'

interface Industry {
  id: string
  name: string
  type: 'food-processing' | 'textile' | 'pharmaceutical' | 'oil-mills' | 'sugar-mills' | 'other'
  location: string
  contact: {
    person: string
    phone: string
    email: string
  }
  requirements: {
    cropTypes: string[]
    quantity: number
    priceRange: {
      min: number
      max: number
    }
    quality: 'A' | 'B' | 'C' | 'All'
    deliverySchedule: string
  }
  contracts: {
    active: number
    completed: number
    value: number
  }
  rating: number
  status: 'active' | 'inactive' | 'pending'
  registrationDate: string
  lastOrder: string
}

interface Contract {
  id: string
  industryId: string
  industryName: string
  cropType: string
  quantity: number
  pricePerQuintal: number
  totalValue: number
  startDate: string
  endDate: string
  status: 'active' | 'completed' | 'cancelled'
  farmersInvolved: number
  deliveredQuantity: number
}

const IndustryManagement = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'industries' | 'contracts' | 'requirements'>('overview')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')

  // Mock industries data
  const industries: Industry[] = [
    {
      id: 'ind1',
      name: 'Hindustan Unilever Foods',
      type: 'food-processing',
      location: 'Bhopal, MP',
      contact: {
        person: 'Rajesh Kumar',
        phone: '+91-9876543210',
        email: 'rajesh.kumar@hul.com'
      },
      requirements: {
        cropTypes: ['wheat', 'rice', 'soybean'],
        quantity: 500,
        priceRange: { min: 2000, max: 2500 },
        quality: 'A',
        deliverySchedule: 'Monthly'
      },
      contracts: {
        active: 8,
        completed: 45,
        value: 12500000
      },
      rating: 4.8,
      status: 'active',
      registrationDate: '2023-01-15',
      lastOrder: '2024-09-25'
    },
    {
      id: 'ind2',
      name: 'Ruchi Soya Industries',
      type: 'oil-mills',
      location: 'Indore, MP',
      contact: {
        person: 'Sunita Sharma',
        phone: '+91-9876543211',
        email: 'sunita@ruchisoya.com'
      },
      requirements: {
        cropTypes: ['mustard', 'sunflower', 'soybean'],
        quantity: 300,
        priceRange: { min: 4500, max: 5500 },
        quality: 'All',
        deliverySchedule: 'Bi-weekly'
      },
      contracts: {
        active: 12,
        completed: 28,
        value: 8900000
      },
      rating: 4.6,
      status: 'active',
      registrationDate: '2023-03-20',
      lastOrder: '2024-09-28'
    },
    {
      id: 'ind3',
      name: 'Shree Renuka Sugars',
      type: 'sugar-mills',
      location: 'Satna, MP',
      contact: {
        person: 'Mohan Patel',
        phone: '+91-9876543212',
        email: 'mohan@renukasugars.com'
      },
      requirements: {
        cropTypes: ['sugarcane'],
        quantity: 1000,
        priceRange: { min: 280, max: 320 },
        quality: 'B',
        deliverySchedule: 'Weekly'
      },
      contracts: {
        active: 15,
        completed: 62,
        value: 18700000
      },
      rating: 4.2,
      status: 'active',
      registrationDate: '2022-11-10',
      lastOrder: '2024-09-27'
    },
    {
      id: 'ind4',
      name: 'Arvind Textiles',
      type: 'textile',
      location: 'Gwalior, MP',
      contact: {
        person: 'Kavita Singh',
        phone: '+91-9876543213',
        email: 'kavita@arvindtextiles.com'
      },
      requirements: {
        cropTypes: ['cotton'],
        quantity: 200,
        priceRange: { min: 5000, max: 6000 },
        quality: 'A',
        deliverySchedule: 'Monthly'
      },
      contracts: {
        active: 5,
        completed: 18,
        value: 6200000
      },
      rating: 4.4,
      status: 'active',
      registrationDate: '2023-05-08',
      lastOrder: '2024-09-20'
    },
    {
      id: 'ind5',
      name: 'Cipla Pharmaceuticals',
      type: 'pharmaceutical',
      location: 'Ujjain, MP',
      contact: {
        person: 'Dr. Amit Verma',
        phone: '+91-9876543214',
        email: 'amit@cipla.com'
      },
      requirements: {
        cropTypes: ['turmeric', 'ashwagandha', 'neem'],
        quantity: 50,
        priceRange: { min: 8000, max: 12000 },
        quality: 'A',
        deliverySchedule: 'Quarterly'
      },
      contracts: {
        active: 3,
        completed: 12,
        value: 3800000
      },
      rating: 4.9,
      status: 'active',
      registrationDate: '2023-07-12',
      lastOrder: '2024-09-15'
    }
  ]

  // Mock contracts data
  const contracts: Contract[] = [
    {
      id: 'con1',
      industryId: 'ind1',
      industryName: 'Hindustan Unilever Foods',
      cropType: 'wheat',
      quantity: 100,
      pricePerQuintal: 2200,
      totalValue: 220000,
      startDate: '2024-09-01',
      endDate: '2024-12-31',
      status: 'active',
      farmersInvolved: 25,
      deliveredQuantity: 30
    },
    {
      id: 'con2',
      industryId: 'ind2',
      industryName: 'Ruchi Soya Industries',
      cropType: 'soybean',
      quantity: 150,
      pricePerQuintal: 5200,
      totalValue: 780000,
      startDate: '2024-08-15',
      endDate: '2024-11-30',
      status: 'active',
      farmersInvolved: 40,
      deliveredQuantity: 75
    },
    {
      id: 'con3',
      industryId: 'ind3',
      industryName: 'Shree Renuka Sugars',
      cropType: 'sugarcane',
      quantity: 300,
      pricePerQuintal: 300,
      totalValue: 90000,
      startDate: '2024-07-01',
      endDate: '2024-10-31',
      status: 'completed',
      farmersInvolved: 60,
      deliveredQuantity: 300
    }
  ]

  const industryTypes = [
    { id: 'food-processing', name: 'Food Processing', icon: '🏭' },
    { id: 'oil-mills', name: 'Oil Mills', icon: '🫒' },
    { id: 'sugar-mills', name: 'Sugar Mills', icon: '🍯' },
    { id: 'textile', name: 'Textile', icon: '🧵' },
    { id: 'pharmaceutical', name: 'Pharmaceutical', icon: '💊' },
    { id: 'other', name: 'Other', icon: '🏢' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-700 bg-green-100'
      case 'inactive': return 'text-red-700 bg-red-100'
      case 'pending': return 'text-yellow-700 bg-yellow-100'
      case 'completed': return 'text-blue-700 bg-blue-100'
      case 'cancelled': return 'text-gray-700 bg-gray-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  const getTypeIcon = (type: string) => {
    const typeObj = industryTypes.find(t => t.id === type)
    return typeObj?.icon || '🏢'
  }

  const filteredIndustries = industries.filter(industry => {
    if (statusFilter !== 'all' && industry.status !== statusFilter) return false
    if (typeFilter !== 'all' && industry.type !== typeFilter) return false
    return true
  })

  const filteredContracts = contracts.filter(contract => {
    if (statusFilter !== 'all' && contract.status !== statusFilter) return false
    return true
  })

  const totalIndustries = industries.length
  const activeIndustries = industries.filter(i => i.status === 'active').length
  const totalContracts = contracts.length
  const activeContracts = contracts.filter(c => c.status === 'active').length
  const totalValue = contracts.reduce((sum, c) => sum + c.totalValue, 0)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🏭 Industry Management</h1>
        <p className="text-gray-600">Manage industry partnerships and procurement contracts</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{totalIndustries}</div>
              <div className="text-sm text-gray-600">Total Industries</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{activeIndustries}</div>
              <div className="text-sm text-gray-600">Active Partners</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{totalContracts}</div>
              <div className="text-sm text-gray-600">Total Contracts</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{activeContracts}</div>
              <div className="text-sm text-gray-600">Active Contracts</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">₹{(totalValue/100000).toFixed(1)}L</div>
              <div className="text-sm text-gray-600">Total Value</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedTab === 'overview' ? 'primary' : 'outline'}
          onClick={() => setSelectedTab('overview')}
          size="sm"
        >
          📊 Overview
        </Button>
        <Button
          variant={selectedTab === 'industries' ? 'primary' : 'outline'}
          onClick={() => setSelectedTab('industries')}
          size="sm"
        >
          🏭 Industries ({filteredIndustries.length})
        </Button>
        <Button
          variant={selectedTab === 'contracts' ? 'primary' : 'outline'}
          onClick={() => setSelectedTab('contracts')}
          size="sm"
        >
          📋 Contracts ({filteredContracts.length})
        </Button>
        <Button
          variant={selectedTab === 'requirements' ? 'primary' : 'outline'}
          onClick={() => setSelectedTab('requirements')}
          size="sm"
        >
          📝 Requirements
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
              >
                <option value="all">All Types</option>
                {industryTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.icon} {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-auto">
              <Button size="sm">+ Add Industry</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content based on selected tab */}
      {selectedTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Industry Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>🏭 Industry Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {industryTypes.map(type => {
                  const count = industries.filter(i => i.type === type.id).length
                  const percentage = totalIndustries > 0 ? (count / totalIndustries * 100).toFixed(1) : '0'
                  return (
                    <div key={type.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{type.icon}</span>
                        <span className="text-sm font-medium">{type.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="bg-gray-200 rounded-full h-2 w-20">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>📈 Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-green-600">✅</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">New contract signed</div>
                    <div className="text-xs text-gray-500">Hindustan Unilever - Wheat procurement</div>
                  </div>
                  <div className="text-xs text-gray-400">2h ago</div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-blue-600">📦</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Delivery completed</div>
                    <div className="text-xs text-gray-500">Ruchi Soya - 50 quintals soybean</div>
                  </div>
                  <div className="text-xs text-gray-400">4h ago</div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="text-yellow-600">⏰</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Payment pending</div>
                    <div className="text-xs text-gray-500">Renuka Sugars - ₹2.5L due</div>
                  </div>
                  <div className="text-xs text-gray-400">1d ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTab === 'industries' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredIndustries.map(industry => (
            <Card key={industry.id} hover>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{getTypeIcon(industry.type)}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                        <p className="text-sm text-gray-600">{industry.location}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(industry.status)}`}>
                      {industry.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{industry.contracts.active}</div>
                      <div className="text-xs text-gray-600">Active</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{industry.contracts.completed}</div>
                      <div className="text-xs text-gray-600">Completed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">
                        ₹{(industry.contracts.value/100000).toFixed(1)}L
                      </div>
                      <div className="text-xs text-gray-600">Value</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Contact:</span>
                      <span className="font-medium">{industry.contact.person}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-medium">{industry.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Last Order:</span>
                      <span className="font-medium">{new Date(industry.lastOrder).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">View Details</Button>
                    <Button variant="outline" size="sm" className="flex-1">Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'contracts' && (
        <div className="space-y-4">
          {filteredContracts.map(contract => (
            <Card key={contract.id} hover>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{contract.industryName}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(contract.status)}`}>
                        {contract.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Crop Type</div>
                        <div className="font-semibold">{contract.cropType}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Quantity</div>
                        <div className="font-semibold">{contract.quantity} quintals</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Price</div>
                        <div className="font-semibold">₹{contract.pricePerQuintal.toLocaleString()}/quintal</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Total Value</div>
                        <div className="font-semibold text-green-600">₹{contract.totalValue.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Contract Period</div>
                        <div className="text-sm font-medium">
                          {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Farmers Involved</div>
                        <div className="text-sm font-medium">{contract.farmersInvolved} farmers</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Progress</div>
                        <div className="flex items-center space-x-2">
                          <div className="bg-gray-200 rounded-full h-2 flex-1">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(contract.deliveredQuantity / contract.quantity) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {contract.deliveredQuantity}/{contract.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'requirements' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.filter(i => i.status === 'active').map(industry => (
            <Card key={industry.id} hover>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>{getTypeIcon(industry.type)}</span>
                  <span>{industry.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Crop Requirements</div>
                    <div className="flex flex-wrap gap-1">
                      {industry.requirements.cropTypes.map((crop, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Quantity Needed</div>
                      <div className="font-semibold">{industry.requirements.quantity} quintals</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Quality Grade</div>
                      <div className="font-semibold">{industry.requirements.quality}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Price Range</div>
                      <div className="font-semibold">
                        ₹{industry.requirements.priceRange.min.toLocaleString()} -
                        ₹{industry.requirements.priceRange.max.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Delivery</div>
                      <div className="font-semibold">{industry.requirements.deliverySchedule}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">Match Farmers</Button>
                    <Button variant="outline" size="sm">Contact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default IndustryManagement