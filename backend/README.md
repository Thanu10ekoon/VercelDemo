# Login Backend

A simple Node.js backend for user authentication with hardcoded credentials.

## Credentials
- Username: `user`
- Password: `pass`

## API Endpoints

### POST /api/login
Login endpoint that validates username and password.

**Request Body:**
```json
{
  "username": "user",
  "password": "pass"
}
```

**Responses:**

**Success (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "code": 200
}
```

**Bad Request (400):**
```json
{
  "success": false,
  "message": "Username and password are required",
  "code": 400
}
```

**Unauthorized (401):**
```json
{
  "success": false,
  "message": "Invalid username or password",
  "code": 401
}
```

**Internal Server Error (500):**
```json
{
  "success": false,
  "message": "Internal server error",
  "code": 500
}
```

### GET /api/health
Health check endpoint.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. Server will run on http://localhost:3001

## Deployment to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the backend directory
3. Follow the prompts to deploy

The backend will be deployed as serverless functions on Vercel.
