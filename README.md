
<div align="center">

<!-- Animated wave banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,11,20,24,27&height=220&section=header&text=Docker%20Part%201&fontSize=45&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Dockerizing%20a%20Node.js%20Application&descAlignY=55&descSize=18" width="100%"/>

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=24&duration=3000&pause=800&color=2496ED&center=true&vCenter=true&multiline=true&repeat=true&width=650&height=80&lines=Build+%E2%80%A2+Ship+%E2%80%A2+Run;Containerizing+Node.js+with+Docker;From+Dockerfile+to+Running+Container+%F0%9F%90%B3" alt="Typing SVG" />
  
</a>



<br/>
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

## 🗺️ Docker Learning Roadmap

<details open>
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

<details>
<summary><b>🔜 Part 2 — Coming Soon</b></summary>
<br/>

- Docker Compose
- Multi-container setups
- Environment variables & `.env` files

</details>

---

## 🛠️ Tech Stack

<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
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

---

<div align="center">

### 🌟 If you found this project helpful, consider giving it a star!

**Nikhil Shinde**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,11,20,24,27&height=120&section=footer" width="100%"/>

**#Docker #NodeJS #Containerization #DevOps**

</div> 
