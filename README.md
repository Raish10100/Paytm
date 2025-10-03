# Paytm Clone 💸

A full-stack MERN application inspired by **Paytm**, allowing users to **sign up, sign in, check balances, search friends, and transfer money securely**. This project demonstrates core concepts of authentication, authorization, transactions, and frontend-backend integration.

---

## 🚀 Features

* **Authentication**: JWT-based signup & signin
* **User Search**: Find users by first name or last name
* **Balance Management**: Securely view your account balance
* **Money Transfer**: Transfer money between users using transactions
* **Protected Routes**: Role-based access with authentication middleware
* **Frontend**: React with routing (React Router DOM)

---

## 🛠 Tech Stack

**Frontend**

* React + Vite
* React Router DOM
* Axios
* Tailwind CSS

**Backend**

* Node.js + Express
* MongoDB + Mongoose
* JWT for authentication
* bcrypt for password hashing
* cors for security
* dotenv for environment variables

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Raish10100/Paytm.git
cd Paytm
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```env
PORT=3000
MONGO_URI=your_mongo_connection_url
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
nodemon index.js
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/` and add:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

Run the frontend:

```bash
npm run dev
```

---

## 📌 API Endpoints

### **User Routes**

* `POST /api/v1/user/signup` → Create account
* `POST /api/v1/user/signin` → Login
* `GET /api/v1/user/bulk?filter=name` → Search users

### **Account Routes**

* `GET /api/v1/account/balance` → Get balance
* `POST /api/v1/account/transfer` → Transfer money

---

## 🎯 Future Improvements

* Add transaction history
* Add payment gateway simulation
* Add mobile responsiveness
* Deploy backend (Render/Heroku) & frontend (Vercel/Netlify)

---

## 📄 License

This project is for **educational purposes only**. Not intended for production use.