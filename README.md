<<<<<<< HEAD

## React + Express + TypeScript Boilerplate

This repository provides a simple and easy-to-use boilerplate setup for building full-stack applications using:

* **React** (Frontend)
* **Express** (Backend)
* **TypeScript** (Both frontend and backend)

### Features

* TypeScript setup for both client and server
* Development and production build scripts
* API routing with Express
* React development with Vite or Create React App (depending on your setup)
* CORS and proxy configured for smooth communication between frontend and backend
* Organized folder structure

### Folder Structure

```
root/
│
├── client/        # React frontend (TypeScript)
│
├── server/        # Express backend (TypeScript)
│
├── package.json   # Root package.json (optional for scripts/workspaces)
└── README.md
```

### Getting Started

1. **Install dependencies**

```bash
# From root
cd client && npm install
cd ../server && npm install
check the package.json to filter and choose the npm packges you need 
```

2. **Run the app in development**

```bash
# From root
# Run backend
cd server && nodemon main.ts ../server/src/main.ts

# Run frontend
cd ../client && npm run dev
```

3. **Build for production**

```bash
# From root
cd client && npm run build
cd ../server && npm run build
```

### Usage

Use this boilerplate as a starting point for your full-stack TypeScript projects. Customize it based on your project requirements.

---
=======

## React + Express + TypeScript Boilerplate

This repository provides a simple and easy-to-use boilerplate setup for building full-stack applications using:

* **React** (Frontend)
* **Express** (Backend)
* **TypeScript** (Both frontend and backend)

### Features

* TypeScript setup for both client and server
* Development and production build scripts
* API routing with Express
* React development with Vite or Create React App (depending on your setup)
* CORS and proxy configured for smooth communication between frontend and backend
* Organized folder structure

### Folder Structure

```
root/
│
├── client/        # React frontend (TypeScript)
│
├── server/        # Express backend (TypeScript)
│
├── package.json   # Root package.json (optional for scripts/workspaces)
└── README.md
```

### Getting Started

1. **Install dependencies**

```bash
# From root
cd client && npm install
cd ../server && npm install
check the package.json to filter and choose the npm packges you need 
```

2. **Run the app in development**

```bash
# From root
# Run backend
cd server && nodemon main.ts ../server/src/main.ts

# Run frontend
cd ../client && npm run dev
```

3. **Build for production**

```bash
# From root
cd client && npm run build
cd ../server && npm run build
```

### Usage

Use this boilerplate as a starting point for your full-stack TypeScript projects. Customize it based on your project requirements.

---
>>>>>>> 853da766530c756f863253c4f57ed1cf1082fafd
