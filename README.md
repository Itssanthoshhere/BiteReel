
<div align="center">
  <br />
  <a href="https://github.com/Itssanthoshhere/BiteReel" target="_blank">
    <img src="/videos/thumbnail.png" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-MERN_Stack-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Express.js-000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
    <img src="https://img.shields.io/badge/-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
  </div>

  <div align="center">
    <h3>🍴 BiteReel</h3>
    A social platform for <b>food lovers</b> to explore, share, and engage with short-form food reels.<br/>
    <i>Built with the MERN stack, featuring video uploads, likes, saves, and comments.</i>
  </div>

  <br />

  <!-- <a href="https://bite-reel.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Frontend-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Frontend" />
  </a>
  <a href="https://bitereel.onrender.com/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20Backend%20API-blue?style=for-the-badge&logo=render&logoColor=white" alt="Backend API" />
  </a> -->
  <br />
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🧱 [Project Structure](#project-structure)  
6. 📝 [Customization](#customization)  
7. 📄 [License](#license)  
8. 🔗 [Contacts](#contacts)  

---

## ✨ Introduction

**BiteReel** is a modern food-based social media platform where users can:  
- Discover delicious dishes through short food reels.  
- Like, save, and comment on reels shared by food partners.  
- Upload videos (for food partners) to showcase recipes, cooking styles, and creativity.  

It is built on the **MERN Stack** and deployed with **Render (backend)** and **Vercel (frontend)**.

---

## ⚙️ Tech Stack

#### ⚡ Core
- **MongoDB Atlas** – Cloud-hosted NoSQL database.  
- **Express.js** – Backend framework for APIs.  
- **React + Vite** – Frontend framework with fast builds.  
- **Node.js** – Backend runtime environment.  

#### 🎨 Styling & UI
- **Tailwind CSS** – Utility-first responsive design.  
- **Custom CSS** – Component-level styling.  

#### 🔒 Authentication
- **JWT + Cookies** – Secure authentication with sessions.  

#### 📦 Deployment
- **Vercel** – Frontend hosting.  
- **Render** – Backend & API hosting.  

---

## 🔋 Features

- **User Authentication** – Secure login/signup for users & food partners.  
- **Video Uploads** – Food partners can upload food reels.  
- **Engagement** – Users can like, save, and comment on videos.  
- **Reel Feed** – Scrollable feed for exploring food reels.  
- **Responsive Design** – Works across desktop, tablet, and mobile.  

---

## 🤸 Quick Start

### Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/)  
- [MongoDB Atlas](https://www.mongodb.com/atlas)  

### Clone the Project
```bash
git clone https://github.com/Itssanthoshhere/BiteReel.git
cd BiteReel
````

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=https://bite-reel.vercel.app
```

Run backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=https://bitereel.onrender.com
```

Run frontend:

```bash
npm run dev
```

---

## 🧱 Project Structure

```
BiteReel/
│── backend/          # Express backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   └── server.js     # Entry point
│
│── frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── pages/    # Pages (Home, Login, Register, etc.)
│   │   ├── components/ # UI Components
│   │   └── styles/   # Custom CSS
│   └── vite.config.js
│
└── README.md
```

---

## 📝 Customization

* Update **CORS\_ORIGIN** in backend `.env` to match your frontend URL.
* Change **branding & styles** in `frontend/src/styles`.
* Extend API routes in `backend/routes`.

---

## 📄 License

This project is for **educational purposes only**.
All trademarks, logos, and content belong to their respective owners.

---

## 🔗 Contacts

* GitHub: [Itssanthoshhere](https://github.com/Itssanthoshhere)
* LinkedIn: [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

#### ⭐ Show Your Support

If you liked this project, **give it a ⭐** and share it with your friends!

---

