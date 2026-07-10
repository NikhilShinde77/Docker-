<div align="center">

<!-- Animated wave banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,11,20,24,27&height=220&section=header&text=Docker%20Part%201&fontSize=45&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Dockerizing%20a%20Node.js%20Application&descAlignY=55&descSize=18" width="100%"/>

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=24&duration=3000&pause=800&color=2496ED&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=80&lines=Build+%E2%80%A2+Ship+%E2%80%A2+Run;Containerizing+Node.js+with+Docker;From+Dockerfile+to+Running+Container+%F0%9F%90%B3" alt="Typing SVG" />
</a>

<br/>

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-2496ED?style=for-the-badge)

</div>

<br/>

## 📖 About This Project

This project demonstrates how to containerize a simple Node.js application using Docker — from writing the `Dockerfile` to building the image and running the container.

```yaml
Part:       1
Topic:      Dockerizing a Node.js App
Stack:      Docker · Node.js · JavaScript
Goal:       Build → Run → Ship containers confidently
```

> "Package once, run anywhere."

---

## 📂 Project Structure

```
.
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
├── index.js
└── README.md
```

---

## 📄 Dockerfile

```dockerfile
FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

### Explanation

- **FROM node** — Uses the official Node.js Docker image.
- **WORKDIR /app** — Creates and sets `/app` as the working directory inside the container.
- **COPY package*.json .** — Copies `package.json` and `package-lock.json` before the application code (helps Docker cache dependencies).
- **RUN npm install** — Installs all project dependencies.
- **COPY . .** — Copies the entire project into the container.
- **CMD ["node", "index.js"]** — Starts the Node.js application.

---

## 📄 .dockerignore

```text
Dockerfile
node_modules
```

### Why use `.dockerignore`?

- Prevents unnecessary files from being copied into the Docker image.
- Reduces image size.
- Speeds up Docker builds.

---

## 🛠️ Build & Run

### Build Image
```bash
docker build -t docker-part1 .
```

### Run Container
```bash
docker run -p 3000:3000 docker-part1
```

If your application runs on another port, replace `3000` with your application's port:
```bash
docker run -p 5000:5000 docker-part1
```

---

## 📋 Docker Commands Reference

| Action | Command |
|---|---|
| Build image | `docker build -t docker-part1 .` |
| View images | `docker images` |
| Run container | `docker run -p 3000:3000 docker-part1` |
| List running containers | `docker ps` |
| List all containers | `docker ps -a` |
| Stop container | `docker stop <container_id>` |
| Remove container | `docker rm <container_id>` |
| Remove image | `docker rmi docker-part1` |

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,11,20,24,27&height=180&section=header&text=Docker%20Part%202&fontSize=38&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Multi-Container%20Setup%20with%20Docker%20Compose&descAlignY=60&descSize=15" width="100%"/>
</div>

## 📖 About Part 2

Part 2 extends the project into a **multi-container setup** using `docker-compose`. Instead of running a single container, we now spin up three services together: a **backend**, a **dev** service, and a **redis** cache.

```yaml
Part:       2
Topic:      Multi-Container App with Docker Compose
Stack:      Docker · Docker Compose · Node.js · Redis
Goal:       Run multiple connected containers with a single command
```

---

## 📂 Part 2 Project Structure

```
.
├── backend
│   ├── Dockerfile
│   ├── .dockerignore
│   └── .env
├── dev
│   ├── Dockerfile
│   └── .dockerignore
├── docker-compose.yml
└── README.md
```

---

## 📄 backend/Dockerfile

```dockerfile
FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
```

### backend/.dockerignore

```text
Dockerfile
node_modules
```

---

## 📄 dev/Dockerfile

```dockerfile
FROM node
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
```

### dev/.dockerignore

```text
Dockerfile
node_modules
```

### Backend vs Dev — Key Difference

| | backend | dev |
|---|---|---|
| Base image | `node` | `node` |
| Install step | `npm install` | `npm install` |
| Start command | `CMD ["node", "index.js"]` | `CMD ["npm", "run", "dev"]` |
| Purpose | Runs the production/backend server | Runs the app in dev mode (hot-reload, etc.) |

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

### Explanation

- **backend** — Builds from the `./backend` folder, loads environment variables from `./backend/.env`, and maps host port `8001` to container port `9000`.
- **dev** — Builds from the `./dev` folder and maps host port `5174` to container port `5174`.
- **redis** — Pulls the official `redis` image directly (no build needed) and maps host port `6379` to container port `6379`.

---

## 🛠️ Build & Run (Part 2)

### Start all services
```bash
docker compose up
```

### Start all services in detached mode
```bash
docker compose up -d
```

### Rebuild images before starting
```bash
docker compose up --build
```

### Stop all services
```bash
docker compose down
```

---

## 📋 Docker Compose Commands Reference

| Action | Command |
|---|---|
| Start services | `docker compose up` |
| Start in background | `docker compose up -d` |
| Rebuild & start | `docker compose up --build` |
| Stop services | `docker compose down` |
| View running services | `docker compose ps` |
| View logs (all services) | `docker compose logs` |
| View logs (one service) | `docker compose logs backend` |
| Restart a service | `docker compose restart backend` |
| Execute command in a service | `docker compose exec backend sh` |

---

## 🎯 Part 2 Learning Outcomes

- Writing multiple `Dockerfile`s for different services (backend & dev)
- Using `docker-compose.yml` to define and run multi-container apps
- Loading environment variables into a service with `env_file`
- Mapping different host/container ports per service
- Using a pre-built official image (`redis`) alongside custom-built services
- Managing multi-container apps with `docker compose up/down`

---

## 🗺️ Docker Learning Roadmap

<details>
<summary><b>✅ Part 1 — Dockerfile for Node.js</b></summary>
<br/>

- Writing a `Dockerfile`
- Using the official Node.js base image
- Setting `WORKDIR`
- Copying files & caching dependencies with `COPY package*.json`
- Installing dependencies with `npm install`
- Running the app with `CMD`
- Using `.dockerignore`
- Building & running the container

</details>

<details open>
<summary><b>✅ Part 2 — Docker Compose & Multi-Container Setup</b></summary>
<br/>

- Structuring a project into separate `backend` and `dev` services
- Writing service-specific Dockerfiles
- Using `docker-compose.yml` to orchestrate multiple containers
- Loading environment variables with `env_file`
- Adding a `redis` container from an official image
- Mapping custom host/container ports per service
- Running everything with `docker compose up`

</details>

<details>
<summary><b>🔜 Part 3 — Coming Soon</b></summary>
<br/>

- Docker volumes & persistent data
- Networking between containers
- Production-ready optimizations

</details>

---

## 🛠️ Tech Stack

<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 🎯 Learning Outcomes

- Understanding Dockerfile syntax
- Using the official Node.js image
- Working with `WORKDIR`
- Copying project files efficiently
- Installing dependencies
- Running a Node.js application inside Docker
- Using `.dockerignore`
- Building and running Docker containers
- Structuring multi-service apps with Docker Compose
- Connecting backend, dev, and redis containers together

---

<div align="center">

### 🌟 If you found this project helpful, consider giving it a star!

**Nikhil Shinde**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,11,20,24,27&height=120&section=footer" width="100%"/>

**#Docker #NodeJS #Containerization #DevOps #DockerCompose**

</div>
