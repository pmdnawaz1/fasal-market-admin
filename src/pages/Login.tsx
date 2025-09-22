import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setLoading(true)
      setTimeout(() => {
        navigate('/')
        setLoading(false)
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4" style={{backgroundImage: 'linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%)'}}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-300">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-blue-700">
            <span className="text-3xl">🏛️</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Fasal Market</h1>
          <p className="text-gray-700 font-medium">Government Admin Panel</p>
          <p className="text-sm text-gray-600 mt-1">मध्य प्रदेश कृषि विभाग</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              👤 Employee ID / Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              placeholder="Enter your employee ID"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🔒 Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 border border-blue-700"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Login to Admin Panel'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <p className="text-xs text-yellow-800 font-medium">🔑 Demo Credentials</p>
            <p className="text-xs text-yellow-700">Username: admin | Password: admin123</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            For technical support, contact IT Department
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login