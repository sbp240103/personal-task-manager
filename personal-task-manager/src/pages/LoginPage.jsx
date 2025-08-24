import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const apiClient = {
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      console.log('Mock API Call:', url, data);
      setTimeout(() => {
        if (url === '/auth/login') {
          if (data.email === 'user@example.com' && data.password === 'password123') {
            resolve({ data: { token: 'mock-auth-token-12345' } });
          } else {
            reject({ response: { data: { message: 'Invalid email or password.' } } });
          }
        }
      }, 1000);
    });
  }
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient.post('/auth/login', formData);
      
      const { token } = response.data;
      
      localStorage.setItem('authToken', token);
      
      navigate('/dashboard');

    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid email or password.';
      setError(errorMessage);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Log in to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md">{error}</div>}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password"  className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;