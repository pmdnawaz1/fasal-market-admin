import { useState } from 'react'

const ProcurementManagement = () => {
  const [activeTab, setActiveTab] = useState('drives')
  const [showCreateForm, setShowCreateForm] = useState(false)

  const procurementDrives = [
    {
      id: 1,
      crop: 'Wheat',
      location: 'Sagar Main Mandi',
      date: '2024-09-23',
      startTime: '10:00',
      endTime: '16:00',
      msp: 2325,
      status: 'Active',
      registered: 45,
      completed: 12,
      expected: 150
    },
    {
      id: 2,
      crop: 'Soybean',
      location: 'Khurai Agricultural Center',
      date: '2024-09-25',
      startTime: '09:00',
      endTime: '17:00',
      msp: 4892,
      status: 'Scheduled',
      registered: 32,
      completed: 0,
      expected: 100
    },
    {
      id: 3,
      crop: 'Chickpea',
      location: 'Banda Procurement Center',
      date: '2024-09-28',
      startTime: '08:00',
      endTime: '15:00',
      msp: 7500,
      status: 'Scheduled',
      registered: 28,
      completed: 0,
      expected: 80
    }
  ]

  const centers = [
    { name: 'Sagar Main Mandi', capacity: 200, status: 'Active', facilities: ['Weighing', 'Storage', 'Quality Check'] },
    { name: 'Khurai Agricultural Center', capacity: 150, status: 'Active', facilities: ['Weighing', 'Storage'] },
    { name: 'Banda Procurement Center', capacity: 120, status: 'Maintenance', facilities: ['Weighing', 'Quality Check'] },
    { name: 'Rehli Market Yard', capacity: 180, status: 'Active', facilities: ['Weighing', 'Storage', 'Quality Check'] }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Scheduled': return 'bg-blue-100 text-blue-800'
      case 'Completed': return 'bg-gray-100 text-gray-800'
      case 'Maintenance': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const CreateDriveForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Create New Procurement Drive</h3>
        <button
          onClick={() => setShowCreateForm(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Select Crop</option>
            <option>Wheat</option>
            <option>Soybean</option>
            <option>Chickpea</option>
            <option>Corn</option>
            <option>Rice</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Procurement Center</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Select Center</option>
            {centers.filter(c => c.status === 'Active').map((center, index) => (
              <option key={index}>{center.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">MSP (₹ per quintal)</label>
          <input
            type="number"
            placeholder="Enter MSP"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
          <input
            type="time"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
          <input
            type="time"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
            placeholder="Any special instructions or requirements..."
          />
        </div>

        <div className="md:col-span-2 flex space-x-4">
          <button
            type="button"
            onClick={() => setShowCreateForm(false)}
            className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600"
          >
            Create Procurement Drive
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Procurement Management</h1>
          <p className="text-gray-600">Manage procurement drives and centers</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all"
        >
          + Create New Drive
        </button>
      </div>

      {showCreateForm && <CreateDriveForm />}

      <div className="bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('drives')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'drives'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Procurement Drives ({procurementDrives.length})
            </button>
            <button
              onClick={() => setActiveTab('centers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'centers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Centers ({centers.length})
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'drives' ? (
            <div className="space-y-4">
              {procurementDrives.map((drive) => (
                <div key={drive.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{drive.crop} Procurement</h3>
                      <p className="text-gray-600">{drive.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(drive.status)}`}>
                      {drive.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold">{new Date(drive.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold">{drive.startTime} - {drive.endTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">MSP</p>
                      <p className="font-semibold text-green-600">₹{drive.msp}/quintal</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Progress</p>
                      <p className="font-semibold">{drive.completed}/{drive.registered}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      Manage Tokens
                    </button>
                    <button className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                      Send Notifications
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {centers.map((center, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{center.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(center.status)}`}>
                      {center.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Capacity</p>
                      <p className="font-semibold">{center.capacity} farmers/day</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Facilities</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {center.facilities.map((facility, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-700 rounded text-sm hover:bg-blue-100">
                      Edit
                    </button>
                    <button className="flex-1 px-3 py-2 bg-green-50 text-green-700 rounded text-sm hover:bg-green-100">
                      Schedule
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

export default ProcurementManagement