# WatchYourHealth Full-Stack Project

**WatchYourHealth** is a full-stack application designed to help users track and assess their health.  
It dynamically generates reports based on raw JSON data and provides a seamless interface for both users and admins.

---

## Features

### Server (Backend)

- **User Authentication:** Register, login, logout, and fetch user info using JWT and cookies.
- **Assessment Reports:** Generate PDF reports for health and cardiac assessments using Puppeteer and custom HTML templates.
- **Session Data:** Stores and serves assessment session data for report generation and preview.
- **Configurable Reports:** Report layouts and data extraction are managed via configuration in `reportConfig.js`.
- **Static File Serving:** Generated PDF reports are served from the `/reports` endpoint.

### Client (Frontend)

- **User Dashboard:** View and manage health assessment sessions.
- **Report Preview:** Preview reports before downloading PDFs.
- **Interactive Forms:** Submit assessments and track health data.
- **Responsive Design:** Works on desktop and mobile devices.

---

## Project Structure

project-root/
├─ server/
│ ├─ server.js # Main Express server entry
│ ├─ routes/ # API route handlers (auth.js, report.js)
│ ├─ controllers/ # Controller logic (userController.js, reportController.js)
│ ├─ middleware/ # Custom middleware (authMiddleware.js)
│ ├─ data/ # Assessment session data (data.js)
│ ├─ config/ # Report configuration (reportConfig.js)
│ ├─ utils/ # Utility functions (apiError.js, apiResponse.js, asyncHandler.js, readData.js)
│ ├─ users.json # Stores registered user data
│ ├─ reports/ # Generated PDF reports
│ └─ .env.sample # Sample environment variables
├─ client/
│ ├─ public/ # Static assets
│ ├─ src/
│ │ ├─ components/ # React components
│ │ ├─ pages/ # React pages
│ │ ├─ App.js # Main App component
│ │ └─ index.js # Entry point
│ ├─ package.json
│ └─ .env.sample # Sample environment variables
├─ README.md # Project documentation
└─ .gitignore # Files to ignore in Git

---

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project-root

2. Server Setup

cd server
npm install
cp .env.sample .env   # Update variables as needed
npm run server         # or npm start

3. Client Setup
cd client
npm install
cp .env.sample .env   # Update variables if needed
npm start

API Endpoints (Server)
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT token in cookie
GET	/api/auth/get-user	Get current user info (requires auth)
GET	/api/auth/logout	Logout user (clears cookie)

Reports
Method	Endpoint	Description
POST	/api/report/generate	Generate a PDF report for a session
GET	/api/report/preview/:sessionId	Preview HTML report for a session
GET	/api/report/sessions	List available assessment sessions
GET	/api/report/config/:assessmentId	Get report configuration for an assessment type

Environment Variables
Server (server/.env)

PORT=5000
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:5000


Client (client/.env)

VITE_BACKEND_URL=http://localhost:5000

Dependencies
Server

express

cors

cookie-parser

dotenv

bcryptjs

jsonwebtoken

puppeteer

handlebars

uuid

Client

react

react-dom

react-router-dom

axios

bootstrap / tailwindcss (if used)


```
