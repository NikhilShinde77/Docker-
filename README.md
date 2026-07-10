<details open>
<summary><b>✅ Part 2 — Docker Compose (Node.js + Vite + Redis)</b></summary>

<br/>

## 📖 Overview

Part 2 extends the Docker Basics project into a **multi-container application** using **Docker Compose**.

The project contains three services:

- 🚀 **Backend** (Node.js)
- ⚡ **Frontend** (Vite)
- 🔴 **Redis** (Official Redis Image)

Docker Compose automatically creates a network so all containers can communicate with each other.

---

## 📁 Project Structure

```text
.
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── .env
│   └── index.js
│
├── dev/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/
│
├── docker-compose.yml
└── README.md
```

---

## 📄 Backend Dockerfile

```dockerfile
FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
```

---

## 📄 Frontend Dockerfile

```dockerfile
FROM node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
```

---

## 📄 docker-compose.yml

```yaml
services:
  backend:
    build: ./backend
    env_file:
      - ./backend/.env
    ports:
      - "8001:9000"

  dev:
    build: ./dev
    ports:
      - "5174:5174"

  redis:
    image: redis
    ports:
      - "6379:6379"
```

---

# 🚀 Docker Compose Commands

### Build Containers

```bash
docker compose build
```

### Start Containers

```bash
docker compose up
```

### Start in Detached Mode

```bash
docker compose up -d
```

### Rebuild Containers

```bash
docker compose up --build
```

### Stop Containers

```bash
docker compose down
```

### View Running Containers

```bash
docker ps
```

### View Logs

```bash
docker compose logs
```

### Backend Logs

```bash
docker compose logs backend
```

### Frontend Logs

```bash
docker compose logs dev
```

### Redis Logs

```bash
docker compose logs redis
```

### Execute Inside Backend

```bash
docker compose exec backend sh
```

### Execute Inside Frontend

```bash
docker compose exec dev sh
```

---

## 🌐 Services

| Service | Technology | Host Port | Container Port |
|----------|------------|-----------|----------------|
| Backend | Node.js | 8001 | 9000 |
| Frontend | Vite | 5174 | 5174 |
| Redis | Redis | 6379 | 6379 |

---

## 🔗 Docker Networking

Docker Compose automatically creates a private network for all containers.

Containers communicate using **service names**.

Example Redis connection:

```text
redis://redis:6379
```

---

## 📦 Environment Variables

Backend environment variables are loaded from:

```text
backend/.env
```

using:

```yaml
env_file:
  - ./backend/.env
```

---

## 🎯 Learning Outcomes

- Docker Compose
- Multi-container Applications
- Backend Containerization
- Frontend Containerization
- Redis Integration
- Docker Networking
- Environment Variables
- Port Mapping
- Container Communication
- Managing Multiple Containers

</details>
