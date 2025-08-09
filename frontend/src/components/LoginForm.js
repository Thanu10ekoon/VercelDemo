import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = ({ onLoginResult }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Backend URL - change this to your deployed backend URL
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/login`, {
        username: formData.username,
        password: formData.password
      });

      // Success response
      onLoginResult({
        success: true,
        code: response.status,
        message: response.data.message
      });
    } catch (error) {
      // Error response
      if (error.response) {
        // Server responded with error status
        onLoginResult({
          success: false,
          code: error.response.status,
          message: error.response.data.message || 'Login failed'
        });
      } else if (error.request) {
        // Network error
        onLoginResult({
          success: false,
          code: 503,
          message: 'Network error - Unable to connect to server'
        });
      } else {
        // Other error
        onLoginResult({
          success: false,
          code: 500,
          message: 'An unexpected error occurred'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit" disabled={loading} className="login-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="credentials-hint">
        <p><small>Hint: username: <code>user</code>, password: <code>pass</code></small></p>
      </div>
    </div>
  );
};

export default LoginForm;
