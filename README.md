# Japanese Conjugator

A web application for exploring and learning Japanese verb conjugation patterns.

This project consists of a React + TypeScript frontend (using Vite) and an Express + PostgreSQL backend.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Running the App](#running-the-app)
  - [Frontend](#running-the-frontend)
  - [Backend](#running-the-backend)
- [Running Tests](#running-tests)
- [Linting](#linting)
- [Backend Environment Variables](#backend-environment-variables)
- [Database Setup](#database-setup)
- [Useful Tips](#useful-tips)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (for backend)

---

## Project Structure

```
JapaneseConjugator/
  ├─ src/                # Frontend source code (React)
  ├─ server/             # Backend source code (Express, PostgreSQL)
  ├─ public/             # Static assets
  ├─ package.json        # Frontend dependencies and scripts
  ├─ server/package.json # Backend dependencies and scripts
  └─ ...
```

---

## Setup Instructions

### Frontend

1. **Install dependencies:**
   ```sh
   npm install
   ```

### Backend

1. **Install dependencies:**
   ```sh
   cd server
   npm install
   ```

---

## Running the App

### Running the Frontend

Start the development server (with hot module reload):

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Running the Backend

Start the Express server:

```sh
cd server
npm run dev
```

The backend will be available at [http://localhost:1337](http://localhost:1337) by default.

#### Setting the Server Port

You can set the `PORT` environment variable to change the backend port:

- **Windows (Command Prompt):**
  ```sh
  set PORT=5000 && npm run dev
  ```
- **Windows (PowerShell):**
  ```sh
  $env:PORT=5000; npm run dev
  ```
- **Unix/Linux/macOS:**
  ```sh
  PORT=5000 npm run dev
  ```

---

## Running Tests

### Frontend Tests

- **Run all tests:**
  ```sh
  npm test
  ```
- **Interactive UI mode:**
  ```sh
  npm run test:ui
  ```
- **Test coverage report:**
  ```sh
  npm run test:coverage
  ```

### Backend Tests

No backend tests are implemented yet.

---

## Linting

Run ESLint to check for code quality issues:

```sh
npm run lint
```

---

## Backend Environment Variables

- `PORT`: Port for the Express server (defaults to 1337 if not set).
- **Database connection** is currently hardcoded in `server/db.js`:
  - host: `db`
  - port: `5432`
  - user: `postgres`
  - password: `123456`
  - database: `japaneseconjugator`

You may need to update these values to match your local PostgreSQL setup.

---

## Database Setup

1. **Ensure PostgreSQL is running.**
2. **Create the database:**
   ```sql
   CREATE DATABASE japaneseconjugator;
   ```
3. **(Optional) Create the user and set password:**
   ```sql
   CREATE USER postgres WITH PASSWORD '123456';
   GRANT ALL PRIVILEGES ON DATABASE japaneseconjugator TO postgres;
   ```
4. **(Optional) Create tables:**
   You can add table creation logic in `server/index.js` or connect to the database and create tables manually.

---

## Useful Tips

- The frontend and backend run independently. You may need to configure CORS or proxy settings for API calls in development.
- Update database credentials in `server/db.js` as needed for your environment.
- For production, consider using environment variables for sensitive data and a process manager (like PM2) for the backend.

---

## License

See [LICENSE](LICENSE).
