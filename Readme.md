# Yoliday Project

This repository contains both the **Frontend** (Next.js) and **Backend** (Node.js + Express + MySQL) for the Yoliday project.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Backend](#backend)
  - [Features](#backend-features)
  - [Setup & Usage](#backend-setup--usage)
  - [API Endpoints](#backend-api-endpoints)
  - [Database Schema](#backend-database-schema)
- [Frontend](#frontend)
  - [Features](#frontend-features)
  - [Setup & Usage](#frontend-setup--usage)
  - [Key Files](#frontend-key-files)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Project Overview

**Yoliday** is a full-stack web application for managing and browsing projects, with a shopping cart feature. The backend provides a RESTful API, and the frontend offers a user-friendly interface.

---

## Directory Structure

```
yoliday/
├── Backend2/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
└── Frontend/
    ├── pages/
    │   ├── _app.tsx
    │   ├── index.tsx
    │   ├── projects.tsx
    │   └── cart.tsx
    ├── components/
    │   ├── ProjectList.tsx
    │   ├── Cart.tsx
    │   └── Navbar.tsx
    ├── public/
    ├── styles/
    ├── package.json
    └── next.config.js
```

---

## Backend

### Backend Features

- RESTful API for projects and cart
- Pagination for projects
- Cart operations with duplicate prevention
- CORS support
- Input validation (Joi)
- TypeScript

### Backend Setup & Usage

1. **Install dependencies:**
   ```sh
   cd Backend2
   npm install
   ```

2. **Configure environment:**
   - Create a `.env` file:
     ```
     PORT=5000
     CORS_ORIGIN=http://localhost:3000
     DB_HOST=localhost
     DB_USER=your_mysql_user
     DB_PASSWORD=your_mysql_password
     DB_NAME=yoliday_db
     ```

3. **Run the server:**
   - Development: `npm run dev`
   - Production: `npm run build && npm start`

### Backend API Endpoints

- `GET /projects` — List projects (supports `page` and `limit`)
- `GET /cart` — List cart items
- `POST /cart` — Add project to cart (`{ "project_id": 1 }`)

### Backend Database Schema

```sql
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  author VARCHAR(100),
  image_url VARCHAR(255)
);

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
```

---

## Frontend

### Frontend Features

- Built with Next.js and React
- Project listing with pagination
- Add to cart functionality
- Cart page with project details
- Responsive design

### Frontend Setup & Usage

1. **Install dependencies:**
   ```sh
   cd Frontend
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Frontend Key Files

- **pages/index.tsx** — Home page
- **pages/projects.tsx** — Project listing, fetches from `/projects` API
- **pages/cart.tsx** — Cart page, fetches from `/cart` API
- **components/ProjectList.tsx** — Renders list of projects
- **components/Cart.tsx** — Renders cart items
- **components/Navbar.tsx** — Navigation bar

**Example: Fetching projects in `pages/projects.tsx`:**
```typescript
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data.projects));
  }, []);

  // ...render projects...
}
```

---

## Development

- Start backend and frontend servers in separate terminals.
- Ensure backend CORS allows frontend origin.
- Use TypeScript for both backend and frontend.

---

## Troubleshooting

- **CORS errors:** Check `CORS_ORIGIN` in backend `.env`.
- **Database errors:** Ensure MySQL is running and credentials are correct.
- **Port conflicts:** Change `PORT` in backend or frontend as needed.

---

## License

MIT License

---