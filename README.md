<div align="center">

# 🐳 Docker + Node.js + Vite + Redis

Build and run a full-stack application using Docker and Docker Compose — a Node.js backend, a Vite frontend, and Redis for caching.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

</div>

---

## 📖 About

This project demonstrates containerizing a Node.js application with Docker, then running a full multi-service app (backend + frontend + Redis) together using Docker Compose.

---

## 📂 Project Structure

```
.
├── backend
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── .env
│   └── index.js
│
├── dev
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/
│
├── docker-compose.yml
└── README.md
```

---

## 📄 Dockerfile (Backend)

```dockerfile
FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

## 📄 Dockerfile (Frontend)

```dockerfile
FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```

## 📄 .dockerignore

```text
Dockerfile
node_modules
```

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

## 🐳 Services

| Service | Framework | Container Port | Host Port | Access |
|---|---|---|---|---|
| Backend | Node.js | 9000 | 8001 | http://localhost:8001 |
| Frontend | Vite | 5174 | 5174 | http://localhost:5174 |
| Redis | Redis | 6379 | 6379 | localhost:6379 |

Containers communicate using service names instead of IP addresses (e.g. `redis://redis:6379`).

---

## 🚀 Commands

| Action | Command |
|---|---|
| Build image | `docker build -t app .` |
| Build (compose) | `docker compose build` |
| Start | `docker compose up` |
| Start in background | `docker compose up -d` |
| Rebuild | `docker compose up --build` |
| Stop | `docker compose down` |
| View running containers | `docker ps` |
| View logs | `docker compose logs` |
| Exec into a service | `docker compose exec <service> sh` |

---

## 🛠️ Tech Stack

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🎯 Learning Outcomes

- Dockerfile & image building
- .dockerignore usage
- Docker Compose & multi-container apps
- Backend + frontend + Redis containerization
- Docker networking & service communication
- Environment variables & port mapping

---

<div align="center">

**Nikhil Shinde**

⭐ If you found this project helpful, consider giving it a star!

</div>
