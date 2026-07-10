<div align="center">

# 🚀 Docker Part 1 - Dockerfile for Node.js

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

</div>

This project demonstrates how to containerize a simple Node.js application using Docker.

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

## 🧰 Technologies Used

- Docker
- Node.js
- JavaScript

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

---

## ⭐ Author

<div align="center">

**Nikhil Shinde**

![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=flat-square)
![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)

If you found this project helpful, don't forget to ⭐ the repository!

</div>
