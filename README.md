🚗 Car Rental Fullstack Project

A fullstack MERN application for renting cars online. Users can register, log in, and book cars, while owners/admins can manage rentals and view dashboards.

This project was built as part of my personal portfolio to demonstrate fullstack development skills using React, TailwindCSS, Express, and MongoDB.

✨ Features

🔑 Authentication & Authorization
Secure user login and registration using JWT.

📅 Car Booking System
Users can browse cars and book rentals.

🧑‍💻 Role-Based Dashboards

User → Book & manage rentals

Owner/Admin → Manage cars and track bookings

📸 Image Management
Upload car images with Multer and ImageKit.

📡 REST API
Backend powered by Express and MongoDB.

⚡ Modern UI
Responsive frontend with TailwindCSS, Motion, and React Hot Toast.

🛠️ Tech Stack
Frontend (/client)

⚛️ React 18

🎨 TailwindCSS 4

🔄 React Router DOM

🔔 React Hot Toast

🎬 Motion (animations)

🌐 Axios

Backend (/server)

🚀 Express 5

🗄️ MongoDB + Mongoose

🔑 JSON Web Token (JWT)

🔒 Bcrypt

📸 Multer + ImageKit

🌍 CORS

⚙️ dotenv

📂 Project Structure
Rent_Car-fullstack/
│── server/           # Backend (Node.js + Express + MongoDB)
│   ├── server.js     # Main server file
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   └── middleware/   # Middlewares (auth, error handling, etc.)
│
│── client/           # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/Rent_Car-fullstack.git
cd Rent_Car-fullstack

2️⃣ Backend Setup (/server)
cd server
npm install


Create a .env file inside /server:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint


Run the backend:

npm run server   # with nodemon
# or
npm start

3️⃣ Frontend Setup (/client)
cd client
npm install
npm run dev


Frontend: http://localhost:5173

Backend: http://localhost:5000

📸 Screenshots

Add screenshots here (Home page, Car list, Booking form, Dashboard, etc.)

📌 Future Improvements

💳 Payment integration (Stripe/Razorpay)

🔍 Car search & filtering (price, availability, type)

📊 Admin dashboard with analytics

☁️ Deployment on Netlify + Render/Vercel

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature/your-feature)

Commit your changes

Push and create a Pull Request

📜 License

This project is licensed under the ISC License.
