# Simple Login System

A full-stack application with Node.js backend and React frontend for user authentication, designed for deployment on Vercel as separate projects.

## Project Structure

```
vrceldemo/
├── backend/           # Node.js Express server
│   ├── server.js      # Main server file
│   ├── package.json   # Backend dependencies
│   ├── vercel.json    # Vercel configuration
│   └── README.md      # Backend documentation
└── frontend/          # React application
    ├── src/           # React source code
    ├── public/        # Public assets
    ├── package.json   # Frontend dependencies
    ├── .env           # Environment variables
    └── README.md      # Frontend documentation
```

## Authentication

**Valid Credentials:**
- Username: `user`
- Password: `pass`

## Local Development

### Backend (Port 3001)
```bash
cd backend
npm install
npm run dev
```

### Frontend (Port 3000)
```bash
cd frontend
npm install
npm start
```

## Deployment to Vercel

### Deploy Backend as Serverless Functions

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Deploy using Vercel CLI:
   ```bash
   npm i -g vercel
   vercel
   ```

3. Follow prompts and note the deployed URL (e.g., `https://your-backend.vercel.app`)

### Deploy Frontend

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Update `.env` file with your deployed backend URL:
   ```
   REACT_APP_BACKEND_URL=https://your-backend.vercel.app
   ```

3. Deploy using Vercel CLI:
   ```bash
   vercel
   ```

### Alternative: GitHub Integration

1. Push both projects to separate GitHub repositories
2. Connect each repo to Vercel through the dashboard
3. Set environment variables in Vercel dashboard:
   - Frontend: `REACT_APP_BACKEND_URL=https://your-backend.vercel.app`

## API Endpoints

### POST /api/login
Authenticates user with username and password.

**Request:**
```json
{
  "username": "user",
  "password": "pass"
}
```

**Responses:**
- **200**: Login successful
- **400**: Missing credentials
- **401**: Invalid credentials
- **500**: Server error

### GET /api/health
Health check endpoint.

## Features

- ✅ Simple authentication with hardcoded credentials
- ✅ Express.js backend with CORS support
- ✅ React frontend with error handling
- ✅ Proper HTTP status codes (200, 400, 401, 500, 503)
- ✅ Vercel-ready configuration for serverless deployment
- ✅ Environment-based configuration
- ✅ Responsive design

## Security Notes

This is a demo application with hardcoded credentials. For production use:
- Implement proper user database
- Add password hashing
- Use JWT or session management
- Add rate limiting
- Implement HTTPS
- Add input validation and sanitization
