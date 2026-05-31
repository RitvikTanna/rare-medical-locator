# Rare Medicine Locator

## Overview

Rare Medicine Locator is a full-stack healthcare platform designed to help patients, hospitals, and pharmacies locate rare medicines efficiently. The application provides real-time medicine availability information, allowing users to search for medicines, discover nearby pharmacies and hospitals, and streamline access to critical treatments.

## Features

* User authentication and authorization using JWT
* Secure user registration and login
* Search and manage rare medicines
* Locate nearby pharmacies and hospitals
* Real-time medicine availability tracking
* RESTful API architecture
* MongoDB database integration
* Responsive React-based user interface
* Protected routes and secure backend endpoints

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* CORS

## Project Structure

```text
rare-med-locator/
│
├── rare-medicine-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── rare-medicine-backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/rare-med-locator.git
cd rare-med-locator
```

### Backend Setup

```bash
cd rare-medicine-backend
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd ../rare-medicine-frontend
npm install
```

Create a `.env` file:

```env
VITE_API_BASE=https://your-backend-url.vercel.app
```

Start the frontend:

```bash
npm run dev
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Medicines

```http
GET    /api/medicines
POST   /api/medicines
PUT    /api/medicines/:id
DELETE /api/medicines/:id
```

### Shops

```http
GET /api/shops/nearby
```

## Deployment

### Backend

Deployed on Vercel:

```text
https://rare-medical-locator.vercel.app
```

### Frontend

Deploy the React application on Vercel with the backend URL configured through environment variables.

## Future Enhancements

* Interactive maps integration
* Pharmacy inventory synchronization
* Advanced medicine filtering
* Medicine request notifications
* Hospital inventory management
* AI-powered medicine recommendations
* Mobile application support

## Author

Ritvik Tanna
