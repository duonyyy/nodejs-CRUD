import express from "express";
import dotenv from "dotenv";
import routes from "./routers/index.js";
import connectDB from "./config/dbconfig.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/db_movies";

// Kết nối MongoDB
connectDB(dbUrl);

// Middleware để parse JSON request
app.use(express.json());

routes(app);

// Khởi chạy server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
