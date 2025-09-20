import { useState } from 'react'

const TokenManagement = () => {
  const [activeTab, setActiveTab] = useState('active')

  const activeTokens = [
    {
      id: 'WHT240923-156',
      farmer: 'राम प्रसाद शर्मा',
      crop: 'Wheat',
      quantity: 75,
      timeSlot: '11:00 AM - 12:00 PM',
      center: 'Sagar Main Mandi',
      phone: '+91 98765 43210',
      status: 'Confirmed',
      qrCode: true
    },
    {
      id: 'SOY240923-089',
      farmer: 'श्याम सिंह',
      crop: 'Soybean',
      quantity: 50,
      timeSlot: '2:00 PM - 3:00 PM',
      center: 'Khurai Agricultural Center',
      phone: '+91 87654 32109',
      status: 'Pending',
      qrCode: false
    },
    {
      id: 'WHT240923-201',
      farmer: 'गीता देवी',
      crop: 'Wheat',
      quantity: 100,
      timeSlot: '10:00 AM - 11:00 AM',
      center: 'Sagar Main Mandi',
      phone: '+91 76543 21098',
      status: 'In Progress',
      qrCode: true
    }
  ]

  const completedTokens = [
    {
      id: 'WHT240922-145',
      farmer: 'विनोद कुमार',
      crop: 'Wheat',
      quantity: 85,
      amount: '₹1,87,625',
      center: 'Sagar Main Mandi',
      completedAt: '2024-09-22 14:30',
      rating: 5
    },
    {
      id: 'SOY240922-078',
      farmer: 'सुरेश यादव',
      crop: 'Soybean',
      quantity: 60,
      amount: '₹2,93,520',
      center: 'Khurai Agricultural Center',
      completedAt: '2024-09-22 11:15',
      rating: 4
    }
  ]

  const timeSlots = [
    { time: '10:00 AM - 11:00 AM', total: 50, booked: 45, available: 5 },
    { time: '11:00 AM - 12:00 PM', total: 50, booked: 48, available: 2 },
    { time: '12:00 PM - 1:00 PM', total: 50, booked: 50, available: 0 },
    { time: '2:00 PM - 3:00 PM', total: 50, booked: 32, available: 18 },
    { time: '3:00 PM - 4:00 PM', total: 50, booked: 28, available: 22 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const generateQR = (tokenId: string) => {
    console.log(`Generating QR code for token: ${tokenId}`)
  }

  const cancelToken = (tokenId: string) => {
    console.log(`Cancelling token: ${tokenId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Token Management</h1>
          <p className="text-gray-600">Manage digital tokens for procurement drives</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            📊 Slot Analytics
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            📱 Send SMS Updates
          </button>
        </div>
      </div>

      {/* Time Slot Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Time Slot Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {timeSlots.map((slot, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">{slot.time}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Booked:</span>
                  <span className="font-semibold">{slot.booked}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Available:</span>
                  <span className={`font-semibold ${slot.available > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {slot.available}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(slot.booked / slot.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token Lists */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('active')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'active'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Tokens ({activeTokens.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed ({completedTokens.length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'active' ? (
            <div className="space-y-4">
              {activeTokens.map((token) => (
                <div key={token.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Token: {token.id}</h3>
                      <p className="text-gray-600">{token.farmer} • {token.phone}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(token.status)}`}>
                      {token.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Crop & Quantity</p>
                      <p className="font-semibold">{token.crop} - {token.quantity} quintals</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time Slot</p>
                      <p className="font-semibold">{token.timeSlot}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Center</p>
                      <p className="font-semibold">{token.center}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">QR Code</p>
                      <p className={`font-semibold ${token.qrCode ? 'text-green-600' : 'text-orange-600'}`}>
                        {token.qrCode ? 'Generated' : 'Pending'}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {!token.qrCode && (
                      <button
                        onClick={() => generateQR(token.id)}
                        className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        📱 Generate QR
                      </button>
                    )}
                    <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      📞 Contact Farmer
                    </button>
                    <button className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                      ✏️ Edit Details
                    </button>
                    <button
                      onClick={() => cancelToken(token.id)}
                      className="px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      ❌ Cancel Token
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {completedTokens.map((token) => (
                <div key={token.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Token: {token.id}</h3>
                      <p className="text-gray-600">{token.farmer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{token.amount}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < token.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Crop & Quantity</p>
                      <p className="font-semibold">{token.crop} - {token.quantity} quintals</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Center</p>
                      <p className="font-semibold">{token.center}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Completed At</p>
                      <p className="font-semibold">{new Date(token.completedAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Payment</p>
                      <p className="font-semibold text-green-600">Processed</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      📄 View Receipt
                    </button>
                    <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      📊 Transaction Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TokenManagement