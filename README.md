# 🚀 Docker Part 1 - Dockerfile for Node.js

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

**Nikhil Shinde**

If you found this project helpful, don't forget to ⭐ the repository!
