# 🚀 Docker Part 1 - Dockerfile for Node.js

This project demonstrates how to containerize a simple Node.js application using Docker.

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

- **FROM node**
  - Uses the official Node.js Docker image.

- **WORKDIR /app**
  - Creates and sets `/app` as the working directory inside the container.

- **COPY package*.json .**
  - Copies `package.json` and `package-lock.json` before the application code.
  - This helps Docker cache dependencies.

- **RUN npm install**
  - Installs all project dependencies.

- **COPY . .**
  - Copies the entire project into the container.

- **CMD ["node", "index.js"]**
  - Starts the Node.js application.

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

## 🛠️ Build Docker Image

```bash
docker build -t docker-part1 .
```

---

## ▶️ Run Docker Container

```bash
docker run -p 3000:3000 docker-part1
```

If your application runs on another port, replace `3000` with your application's port.

Example:

```bash
docker run -p 5000:5000 docker-part1
```

---

## 📋 Docker Commands

### Build Image

```bash
docker build -t docker-part1 .
```

### View Images

```bash
docker images
```

### Run Container

```bash
docker run -p 3000:3000 docker-part1
```

### List Running Containers

```bash
docker ps
```

### List All Containers

```bash
docker ps -a
```

### Stop Container

```bash
docker stop <container_id>
```

### Remove Container

```bash
docker rm <container_id>
```

### Remove Image

```bash
docker rmi docker-part1
```

---

## 🎯 Learning Outcomes

- Understanding Dockerfile
- Using official Node.js image
- Working with WORKDIR
- Copying project files
- Installing dependencies
- Running a Node.js application inside Docker
- Using `.dockerignore`
- Building and running Docker containers

---

## 🧰 Technologies Used

- Docker
- Node.js
- JavaScript

---

## ⭐ Author

**Nikhil Shinde**

If you found this project helpful, don't forget to ⭐ the repository!
