const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: false
}));

// Hardcoded credentials
const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'pass';

// Login endpoint
app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required',
        code: 400
      });
    }

    // Check credentials
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        code: 200
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password',
        code: 401
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      code: 500
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    code: 200
  });
});

// For Vercel serverless functions, export the app
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // For local development
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
